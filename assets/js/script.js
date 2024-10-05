// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Assign references to important DOM elements

const taskTitleEl = $('#taskTitle');
// need day/month/year only
const taskDueDateEl = $('#taskDueDate');
const taskDescriptionEl = $('#taskDescription');

$('#btnAddTask').on('click', handleAddTask);
renderTaskList();
// Todo: create a function to generate a unique task id
// Use Date.now to use for unique task id



function generateTaskIdNumber() {
    // generate a UUID
    return uuidv4();
}

    //  Use the task ID (which is unix time) to convert to timestamp (only down to seconds)


// pull tasks from local storage and provide fall though if no tasks present
function getTasksFromStorage () {
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    // if no tasks exist in local storage set the array to empty waiting on user
    // to provide new task which will be loaded into local storage.
    if (!tasks) {
        tasks = [];
    }
    return tasks;
}


// Todo: create a function to create a task card
// use div id="todo-cards" or "in-progress-cards" or "done-cards" to define which column
//

function createTaskCard(task) {
    const card = $('<div>')
        .addClass('card project-card draggable my-3')
        .attr('data-task-id', task.id);

    const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text(task.description);
    const cardDueDate = $('<p>').addClass('card-text').text(`Due Date: ${task.dueDate}`);
    const cardDeleteBtn = $('<button>')
        .addClass('btn btn-danger delete')
        .text('Delete')
        .attr('data-task-id', task.id);

    cardDeleteBtn.on('click', handleDeleteTask);

// Compare current date to task due date
    const currentDate = new Date();
    const dueDate = new Date(taskDueDateEl.val());

// Check if the current date is past the due date
    if (currentDate > dueDate) {
        console.log("The current date is past the due date.");
    } else {
        console.log("The due date has not passed yet.");
    }
    cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
    card.append(cardHeader, cardBody);

    return card;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // Clear existing tasks in the board
    $('#todo-cards, #in-progress-cards, #done-cards').empty();

    // Retrieve tasks from local storage
    let tasks = getTasksFromStorage();

    tasks.forEach(task => {
        let taskCard = createTaskCard(task);

        // Append task card to the appropriate column
        switch (task.status) {
            case 'todo':
                $('#todo-cards').append(taskCard);
                break;
            case 'in-progress':
                $('#in-progress-cards').append(taskCard);
                break;
            case 'done':
                $('#done-cards').append(taskCard);
                break;
        }
    });

    // Make the cards draggable
    $('.draggable').draggable({
        revert: 'invalid',
        start: function (event, ui) {
            $(this).css('z-index', 100);
        },
        stop: function (event, ui) {
            $(this).css('z-index', '');
        }
    });

    // Make task lanes droppable
    $('#todo-cards, #in-progress-cards, #done-cards').droppable({
        accept: '.draggable',
        drop: handleDrop
    });
}

// Adds new task, provides a unique ID, reads current localStorage tasks, adds the new task on, and saves the entire set of tasks back into localStorage.
function handleAddTask(event){
    console.log('adding task');
// when 'add task' button is pushed, need to execute this.

// Create an object representing the new task
    const newTask = {
        id: generateTaskIdNumber(),
        title: taskTitleEl.val(),
        dueDate: taskDueDateEl.val(),
        description: taskDescriptionEl.val(),
        status: "todo"
    };
    console.log(newTask);
// Get existing tasks from localStorage and add  new task
    let tasks = getTasksFromStorage();
    tasks.push(newTask);

// Save the updated tasks list to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

// Clear the form inputs
    taskTitleEl.val('');
    taskDueDateEl.val('');
    taskDescriptionEl.val('');

// Optionally, close the modal (assuming a modal with id 'formModal')
    $('#formModal').modal('hide');

// Re-render the task list to include the new task
    renderTaskList();
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    const taskId = $(event.target).data('task-id');

    // Retrieve existing tasks and filter for task to delete
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(task => task.id !== taskId);

    // Save the updated tasks list to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Re-render the task list to update the UI
    renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});


