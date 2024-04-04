const modal = document.getElementById("formModal");
const btn = document.getElementsByClassName("btn btn-success");
const submit = document.getElementById("submit")



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

// Todo: create a function to render the task list and make cards draggable
function renderTaskList(content) {
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

    const cards = document.getElementsByClassName('card-body');
    
    
   $( function() {
    $( "#draggable" ).draggable();
    });
}


// Todo: create a function to handle adding a new task
function handleAddTask(event) {

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    for(let i = 0; i < tasks.length; i++){
        
    }
});
