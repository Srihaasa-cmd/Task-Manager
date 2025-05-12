function addTask() {
    const title = document.getElementById('taskTitle').value;
    const desc = document.getElementById('taskDesc').value;

    if (title && desc) {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        
        taskItem.innerHTML = `${title}: ${desc} <button onclick="deleteTask(this)">Delete</button>`;
        
        taskList.appendChild(taskItem);
        
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDesc').value = '';
    } else {
        alert('Please enter both task title and description');
    }
}

function deleteTask(task) {
    task.parentElement.remove();
}
