// Selecting elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');
    listItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Mark task as completed on click
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // Delete task on clicking the delete button
    const deleteBtn = listItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent marking as completed when deleting
        taskList.removeChild(listItem);
    });

    // Append the new task to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}

// Add event listener for the 'Add Task' button
addTaskBtn.addEventListener('click', addTask);

// Optionally, add task when 'Enter' key is pressed
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
