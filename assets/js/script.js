// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Assign references to important DOM elements
const taskId = document.querySelector("#task-id");
const taskTitle = document.querySelector("#taskTitle");
const taskDueDate = document.querySelector("#taskDueDate");
const taskDescription = document.querySelector("#taskDescription");
const taskStatus = document.querySelector("#taskStatus");

// Todo: create a function to generate a unique task id
// Use Date.now to use for unique task id
function generateTaskId() {
    // grabs unix time to use as unique ID
    uniqueTaskId = dayjs();
    console.log("using dayjs uniqueId = "+uniqueTaskId);
    // converts unix time to local timestamp (only down to seconds)
    const unixDateTime = Date(uniqueTaskId.toString());
    console.log("using Date = "+unixDateTime);
    // could also use (this is without using dayjs):  const dayUniqueId = Date(Date.now()).toString();

    return uniqueTaskId,
}
generateTaskId()

// Todo: create a function to create a task card
// use div id="todo-cards" or "in-progress-cards" or "done-cards" to define which column
//
function createTaskCard(task) {
    let taskId = document.createElement("div");
    let taskTitle = document.createElement("div");
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
