const addButton = document.querySelector('#submit-button');
const unorderedList = document.querySelector('.unordered-list');

const addTask = () => {
    const newTask = document.querySelector('#add-task');
    const errorMessage = document.querySelector('#error-message');
    const newListItem = document.createElement('li');
    const span = document.createElement('span');

    if (newTask.value == '') {
        errorMessage.style.display = 'block';
    } else {
        newListItem.innerText = `${newTask.value}`;
        span.innerText = `\u2717`;
        unorderedList.appendChild(newListItem);
        newListItem.appendChild(span);
        errorMessage.style.display = 'none';
    }
    newTask.value = '';
    saveTask();
}

console.log(unorderedList);

addButton.addEventListener('click', () => {
    addTask();
})

const checkOffTask = (ev) => {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('completed-task');
        saveTask();
    } else if (ev.target.tagName === 'SPAN') {
        ev.target.parentElement.remove();
        saveTask();
    }
}

unorderedList.addEventListener('click', function(ev) {
    checkOffTask(ev);
}, false)

function saveTask() {
    localStorage.setItem('task', unorderedList.innerHTML);
}

function showTask() {
    unorderedList.innerHTML = localStorage.getItem('task');
}

showTask();