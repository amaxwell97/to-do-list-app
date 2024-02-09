let newTask = document.querySelector('#add-task');
const addButton = document.querySelector('#submit-button');
const unorderedList = document.querySelector('#unordered-list');
const taskArray = [];

const addTask = (newTask) => {
    const errorMessage = document.querySelector('#error-message');
    const newListItem = document.createElement('li');
    const newListItemCheck = document.createElement('input');
    const newListItemPara = document.createElement('p');
    
    newListItemCheck.type = 'checkbox';

    if (newTask == '') {
        errorMessage.style.display = 'block';
    } else {
        unorderedList.appendChild(newListItem);
        newListItem.appendChild(newListItemCheck);
        newListItem.appendChild(newListItemPara)
        newListItemPara.textContent = newTask;
    }
}

addButton.addEventListener('click', () => {
    addTask(newTask.value);
})