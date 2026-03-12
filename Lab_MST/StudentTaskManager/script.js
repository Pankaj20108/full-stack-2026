let tasks = [];

document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const name = document.getElementById('taskName').value.trim();
  const priority = document.getElementById('priority').value;
  if (name === "") return;

  tasks.push({ name, priority, completed: false });
  document.getElementById('taskName').value = "";
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function filterTasks(type) {
  let filtered = tasks;
  if (type === 'completed') {
    filtered = tasks.filter(t => t.completed);
  } else if (type === 'pending') {
    filtered = tasks.filter(t => !t.completed);
  }
  renderTasks(filtered);
}

function renderTasks(list = tasks) {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = "";
  list.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = "task";
    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">
        ${task.name} (${task.priority})
      </span>
      <div>
        <button onclick="toggleTask(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}