const newTask = document.querySelector('#add-task');
const addButton = document.querySelector('#submit-button');
const unorderedList = document.querySelector('#unordered-list');

const addTask = () => {
    const errorMessage = document.querySelector('#error-message');
    const newListItem = document.createElement('li');

    if (newTask.value == '') {
        errorMessage.style.display = 'block';
    } else {
        newListItem.innerText = newTask.value;
        unorderedList.appendChild(newListItem);
        errorMessage.style.display = 'none'
    }
}

addButton.addEventListener('click', () => {
    addTask();
})