// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select important DOM elements
    const addButton = document.getElementById('add-task-btn'); // "Add Task" button
    const taskInput = document.getElementById('task-input');   // Input field for tasks
    const taskList = document.getElementById('task-list');     // UL element for task list

    // Function to add a new task
    function addTask() {
        // Get and trim user input
        const taskText = taskInput.value.trim();

        // If input is empty, show alert
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // ✅ Create a new list item and set its textContent
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // ✅ Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";

        // ✅ Add class name 'remove-btn' using classList.add
        removeButton.classList.add('remove-btn');

        // ✅ Assign an onclick event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // ✅ Append the remove button to the li element
        listItem.appendChild(removeButton);

        // ✅ Append the li element to the task list
        taskList.appendChild(listItem);

        // ✅ Clear the input field
        taskInput.value = "";
    }

    // ✅ Add event listener for "Add Task" button
    addButton.addEventListener('click', addTask);

    // ✅ Add event listener for Enter key inside the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

