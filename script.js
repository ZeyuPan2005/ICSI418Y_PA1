// Get references to the HTML elements
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");


// Store tasks while the page is open
const tasks = [];


// Respond when the form is submitted
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const taskName = taskInput.value;
    const taskPriority = priorityInput.value;


    // Do not create an empty task
    if (taskName === "") {
        return;
    }


    // Create a task object
    const task = {
        name: taskName,
        priority: taskPriority,
        completed: false
    };


    // Add the task to the array
    tasks.push(task);


    // Display the task
    displayTask(task);


    // Clear the text input
    taskInput.value = "";
});


// Create and display one task
function displayTask(task) {

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");


    const taskInfo = document.createElement("span");
    taskInfo.classList.add("task-info");


    const taskName = document.createElement("span");
    taskName.classList.add("task-name");
    taskName.textContent = task.name;


    const taskPriority = document.createElement("span");
    taskPriority.textContent = " - Priority: " + task.priority;
    taskPriority.classList.add(task.priority);


    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";


    completeButton.addEventListener("click", function () {

        task.completed = true;

        taskElement.classList.add("completed");
    });


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";


    deleteButton.addEventListener("click", function () {

        const index = tasks.indexOf(task);

        tasks.splice(index, 1);

        taskElement.remove();
    });


    taskInfo.appendChild(taskName);
    taskInfo.appendChild(taskPriority);

    taskElement.appendChild(taskInfo);
    taskElement.appendChild(completeButton);
    taskElement.appendChild(deleteButton);

    taskList.appendChild(taskElement);
}