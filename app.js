const addButton = document.querySelector('#submit-button');
const unorderedList = document.querySelector('.unordered-list');

const addTask = () => {
    const newTask = document.querySelector('#add-task');
    const errorMessage = document.querySelector('#error-message');
    const newListItem = document.createElement('li');
    const span = '\u2717';

    if (newTask.value == '') {
        errorMessage.style.display = 'block';
    } else {
        newListItem.innerText = `${newTask.value} ${span}`;
        unorderedList.appendChild(newListItem);
        errorMessage.style.display = 'none';
        newTask.value = '';
    }
}

addButton.addEventListener('click', () => {
    addTask();
})

const checkOffTask = (ev) => {
    ev.target.classList.toggle('completed-task');
}

unorderedList.addEventListener('click', (ev) => {
    checkOffTask(ev);
})