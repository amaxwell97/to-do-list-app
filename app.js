let newTask = document.querySelector('#add-task');
const addButton = document.querySelector('#submit-button');
const unorderedList = document.querySelector('#unordered-list');
const taskArray = [];

const addTask = (newTask) => {
    const errorMessage = document.querySelector('#error-message');
    const newListItem = document.createElement('li');
    const newListItemCheck = document.createElement('img');
    const newListItemPara = document.createElement('p');
    
    newListItemCheck.src = 'to-do-list-app-images/unchecked.png';

    if (newTask == '') {
        errorMessage.style.display = 'block';
    } else {
        unorderedList.appendChild(newListItem);
        newListItem.appendChild(newListItemCheck);
        newListItem.appendChild(newListItemPara)
        newListItemPara.textContent = newTask;
        taskArray.push({
            itemCheck: newListItemCheck.src,
            newTask: newTask,
        });
        console.log(taskArray);
    }
}

// const checkOffTask = () => {
//     taskArray.forEach((task) => {
//         task.addEventListener('click', () {
//             task.itemCheck.src
//         })
//     })
// }

addButton.addEventListener('click', () => {
    addTask(newTask.value);
})

// unorderedList.addEventListener = ('click', () => {
//     checkOffTask();
// })

