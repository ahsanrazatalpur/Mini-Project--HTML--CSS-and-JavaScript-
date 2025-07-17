const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remove';
  deleteBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteAll() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    taskList.innerHTML = '';
  }
}
