let input = document.getElementById('input');
let button = document.getElementById('input-button');
let taskList = document.getElementById('task-list')

button.addEventListener('click', createList)
function createList(){
    let li = document.createElement('li');
    let del = document.createElement('button');

    
    li.textContent = input.value;
    del.textContent = 'Cancella';
    li.append(del);
    taskList.append(li);

    let buttonsDelete = document.querySelectorAll('#task-list button');

}
