// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Event listener for adding a task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim(); // Get the input value and trim whitespace
  if (taskText === '') return; // Prevent adding empty tasks

  // Create a new task item
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  // Append task content and delete button to the task item
  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteBtn);

  // Append the task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';

  // Add delete functionality
  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });
});
