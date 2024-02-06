let newTask = document.querySelector('#add-task');
const addButton = document.querySelector('#submit-button');
const unorderedList = document.querySelector('#unordered-list');
const taskArray = [];

const addTask = (newTask) => {
    const errorMessage = document.querySelector('#error-message');
    const newListItem = document.createElement('li');
    const listItemCheck = document.createElement('input');
    listItemCheck.type = 'checkbox';

    if (newTask == '') {
        errorMessage.style.display = 'block';
    } else {
        unorderedList.appendChild(newListItem);
        newListItem.appendChild(listItemCheck);
        newListItem.textContent = newTask;
    }
}

addButton.addEventListener('click', () => {
    addTask(newTask.value);
})