const modal = document.getElementById("formModal");
const btn = document.getElementsByClassName("btn btn-success");
const span = document.getElementsByClassName("close");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target==modal){
        modal.style.display = "none";
    }
}


// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
const timestamp = new date().getTime();
const randomNumber = Math.floor(Math.random()*10000);
const uniqueId = timestamp.toString() + randomNumber.toString();
return uniqueId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
const card = document.createElement('div');
card.classList.add('card')

const cardTitle = document.createElement('h2');
cardTitle.textContent = title;
card.appendChild(cardTitle);

const cardContent = document.createElement('p');
cardContent.textContent = content;
card.appendChild(cardContent);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
