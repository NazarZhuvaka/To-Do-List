const addtaskBtn = document.querySelector('.btn-secondary')
const taskInput = document.querySelector('.task-input')

const taskGroup = document.querySelector('.list-group')


addtaskBtn.addEventListener('click' , function(){
    if (taskInput.value === '') {
        alert('You must write something!')
    } else {
        let newTask = document.createElement('li')
        newTask.className = 'list-group-item'
        newTask.innerHTML = taskInput.value;
        
        taskGroup.appendChild(newTask);

        let closeIcon = document.createElement('span')
        closeIcon.innerHTML = "\u00d7";
        closeIcon.className = 'task__hide'
        newTask.appendChild(closeIcon)

    }

    taskInput.value = "";

})

taskGroup.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        console.log(e.target)
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);


const headerBtn = document.querySelector('.header__menu');
const aside = document.querySelector('.aside');

function showAside() {
    aside.classList.add('visibility');
}

function hideAside() {
    aside.classList.remove('visibility');
}

headerBtn.addEventListener('mouseover', showAside);

headerBtn.addEventListener('mouseout', () => {
        if (!aside.matches(':hover') && !headerBtn.matches(':hover')) {
            hideAside();
        }
});

aside.addEventListener('mouseover', showAside);

aside.addEventListener('mouseout', () => {
        if (!aside.matches(':hover') && !headerBtn.matches(':hover')) {
            hideAside();
        }
});


//

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    const firstDiv = document.querySelector('.list-group-item');
    firstDiv.addEventListener('keydown', handleKeydown);

    function handleKeydown(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            createNewEditableDiv(this);
        }
    }

    function createNewEditableDiv(currentDiv) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('list-group-item');
        newDiv.setAttribute('contenteditable', 'true');
        newDiv.addEventListener('keydown', handleKeydown);

        container.insertBefore(newDiv, currentDiv.nextSibling);
        newDiv.focus();
    }
});

