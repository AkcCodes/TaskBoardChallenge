const modal = document.getElementById("formModal");
const btn = document.getElementsByClassName("btn btn-success");
const submit = document.getElementById("submit")
const taskNameInputEl = $('#taskTitle');
const taskTypeInputEl = $('#taskDescription');
const taskDateInputEl = $('#dueDate');
const taskList = JSON.parse(localStorage.getItem('tasks'));


document.addEventListener('submit',function(event){
    event.preventDefault();

    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(taskList)
    const task = {
        title: event.target[0].value,
        date: event.target[1].value,
        description: event.target[2].value,
        id: generateTaskId(),
    }
    taskList.push(task)


    localStorage.setItem('tasks', JSON.stringify(taskList));

    createTaskCard();
});

// Retrieve tasks and nextId from localStorage
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
   const rndm = crypto.randomUUID();
    return rndm;
}

// Todo: create a function to create a task card

function createTaskCard(task) {
  const value = localStorage.getItem('tasks')

  const card = document.createElement('div');
  card.classList.add('card-body')

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = value.title;
  card.appendChild(cardTitle);

  const cardDate = document.createElement('h2');
  cardDate.textContent = value.date;
  card.appendChild(cardDate);

  const cardContent = document.createElement('p');
  cardContent.textContent = value.description;
  card.appendChild(cardContent);

  const cardContainer = document.getElementById('todo-cards');
  cardContainer.appendChild(card);
}
if (task.dueDate && task.status !== 'done') {
    const now = dayjs();
    const taskDueDate = dayjs(task.dueDate, 'DD/MM/YYYY');

    
    if (now.isSame(taskDueDate, 'day')) {
      taskCard.addClass('bg-warning text-white');
    } else if (now.isAfter(taskDueDate)) {
      taskCard.addClass('bg-danger text-white');
      cardDeleteBtn.addClass('border-light');
    }

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const tasks = readTasksFromStorage();

    const todoList = $('#todo-cards');
    todoList.empty();
  
    const inProgressList = $('#in-progress-cards');
    inProgressList.empty();
  
    const doneList = $('#done-cards');
    doneList.empty();
  
    for (let task of tasks) {
      if (task.status === 'to-do') {
        todoList.append(createTaskCard(task));
      } else if (task.status === 'in-progress') {
        inProgressList.append(createTaskCard(task));
      } else if (task.status === 'done') {
        doneList.append(createTaskCard(task));
      }
    }
  
    $('#draggable').draggable({
      opacity: 0.7,
      zIndex: 100,
      helper: function (e) {
        const original = $(e.target).hasClass('ui-draggable')
          ? $(e.target)
          : $(e.target).closest('.ui-draggable');
        return original.clone().css({
          width: original.outerWidth(),
        });
      },
    });
  }

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  event.preventDefault();

  const taskName = taskNameInputEl.val().trim();
  const taskType = taskTypeInputEl.val(); 
  const taskDate = taskDateInputEl.val(); 

  const newtask = {
    name: taskName,
    type: taskType,
    dueDate: taskDate,
    status: 'to-do',
}
const tasks = readTasksFromStorage();
  tasks.push(newTask);

  saveTasksToStorage(tasks);

  printTaskData();

  // ? Clear the form inputs
  taskNameInputEl.val('');
  taskTypeInputEl.val('');
  taskDateInputEl.val('');
}
// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  const tasks = readTasksFromStorage();

  const taskId = ui.draggable[0].dataset.taskId;

  const newStatus = event.target.id;

  for (let task of tasks) {
    if (task.id === taskId) {
      task.status = newStatus;
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  printProjectData();
}

projectFormEl.on('submit', handleProjectFormSubmit);

projectDisplayEl.on('click', '.btn-delete-task', handleDeleteProject);

displayTime();
setInterval(displayTime, 1000);

$(document).ready(function () {
  printProjectData();

  $('#dueDate').datepicker({
    changeMonth: true,
    changeYear: true,
  });

  $('.lane').droppable({
    accept: '#draggable',
    drop: handleDrop,
  });
});



// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    for(let i = 0; i < tasks.length; i++){
        createTaskCard(tasks[i])
    }
});

