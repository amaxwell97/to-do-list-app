let newTask = document.querySelector('#add-task');
const addButton = document.querySelector('#submit-button');
const unorderedList = document.querySelector('#unordered-list');
const taskArray = [];

const addTask = (newTask) => {
    const errorMessage = document.querySelector('#error-message');
    const newListItem = document.createElement('li');

    if (newTask == '') {
        errorMessage.style.display = 'block';
    } else {
        newListItem.textContent = newTask;
        console.log(newListItem);
        unorderedList.appendChild(newListItem);
    }
}

addButton.addEventListener('click', () => {
    addTask(newTask.value);
})