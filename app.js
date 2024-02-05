const addButton = document.querySelector('#add-button');

const addTask = () => {
    let newTask = document.querySelector('#add-task');
    const errorMessage = document.querySelector('#error-message');

    if (newTask == '') {
        errorMessage.style.display = 'block';
        return;
    }
}

addButton.addEventListener('click', () => {
    
})