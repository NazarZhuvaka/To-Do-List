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


// const menuBtn = document.querySelector('.menu-icon')
// const menuText = document.querySelectorAll('.menu-icon__text')

// menuBtn.addEventListener('click' , function () {
//     for (item of menuText) {
//         item.classList.toggle('visibility')
//     }

// })



const headerBtn = document.querySelector('.header__menu') 
const aside = document.querySelector('.aside')

headerBtn.addEventListener('mouseover' , function (e) {
    aside.classList.add('visibility')
})

headerBtn.addEventListener('mouseout', () => {
    aside.classList.remove('visibility') // Повертаємо початковий колір фону
});


