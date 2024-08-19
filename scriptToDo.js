function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value;

    if (taskText === '') return;

    let li = document.createElement('li');
    li.innerHTML = taskText + ' <span class="remove" onclick="removeTask(this)">x</span>';

    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}

function removeTask(element) {
    element.parentElement.remove();
}
