document.addEventListener('DOMContentLoaded', () => {
    const taskGroup = document.querySelector('.list-group');

    taskGroup.addEventListener('click', function(e) {
        const target = e.target;
        if (target.tagName === 'DIV' && target.classList.contains('list-group-item')) {
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            
            if (x <= 20) {
                target.classList.toggle('checked');
            }
        }
    }, false);
});


//
const headerBtn = document.querySelector('.header__menu');
const aside = document.querySelector('.aside');

const headerMenuIcon = document.querySelector('.header__menu-icon')

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

headerBtn.addEventListener('mouseover' , function () {
    const headerIcon = document.querySelector('.header__menu-icon').style.display = 'none'
    const headerArrow = document.querySelector('.header-arrow').style.display = 'block'
    
    
})
headerBtn.addEventListener('mouseout' , function () {
    const headerIcon = document.querySelector('.header__menu-icon').style.display = 'block'
    const headerArrow = document.querySelector('.header-arrow').style.display = 'none'
    
})


const hoverItem = document.querySelectorAll('.hover-item')

for ( item of hoverItem) {
     item.style.padding = '2px 6px'

    item.addEventListener("mouseover",function() {
        this.style.background = 'rgba(255, 255, 255, 0.055)'
        this.style.borderRadius = '4px'
        this.style.transition = '0.3s'
        this.style.cursor = 'pointer'
    })

    item.addEventListener("mouseout",function() {
        this.style.background = 'none'
    })
}




document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    const listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach(item => {
        item.addEventListener('keydown', handleKeydown);
    });

    function handleKeydown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            createNewEditableDiv(this);
        } else if (event.key === 'Backspace' && this.textContent === '') {
            event.preventDefault();
            deleteCurrentDiv(this);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            moveToPreviousDiv(this);
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            moveToNextDiv(this);
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

    function deleteCurrentDiv(currentDiv) {
        const previousDiv = currentDiv.previousElementSibling;

        if (previousDiv) {
            currentDiv.remove();
            focusAtEnd(previousDiv);
        } else {
            currentDiv.textContent = '';
        }
    }

    function moveToPreviousDiv(currentDiv) {
        const previousDiv = currentDiv.previousElementSibling;
        if (previousDiv) {
            focusAtEnd(previousDiv);
        }
    }

    function moveToNextDiv(currentDiv) {
        const nextDiv = currentDiv.nextElementSibling;
        if (nextDiv) {
            focusAtEnd(nextDiv);
        }
    }

    function focusAtEnd(element) {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(element);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
        element.focus();
    }
});

const asideElement = document.querySelector('.aside').style.zIndex = '3'
const headerElement = document.querySelector('.header__menu').style.zIndex = '5'

const editBtn = document.querySelector('.header__buttons-text')


editBtn.addEventListener('mouseover', function() {
    const dropMenu = document.querySelector('.drop-menu')
    dropMenu.style.transition = '0.3s'
    dropMenu.style.opacity = '1'
})
editBtn.addEventListener('mouseout', function() {
    const dropMenu = document.querySelector('.drop-menu')
    dropMenu.style.opacity = '0'
})

const shareBtn = document.querySelector('.header__buttons-share')

shareBtn.addEventListener('mouseover' , function() {
    const dropMenu = document.querySelector('.drop-menu-share')
    dropMenu.style.transition = '0.3s'
    dropMenu.style.opacity = '1'
})
shareBtn.addEventListener('mouseout', function() {
    const dropMenu = document.querySelector('.drop-menu-share')
    dropMenu.style.opacity = '0'
})




const schIcon = document.querySelectorAll('.schedule-icon');
const menuOpacity = document.querySelectorAll('.header__drop-menu');

for (const item of menuOpacity) {
    item.style.display = 'none';
}

schIcon.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        const menuType = icon.dataset.menu;
        const menu = document.querySelector(`.drop-menu-${menuType}`);
        
        if (menu) {
            const dataRight = menu.dataset.right;
            const dataTop = menu.dataset.top;
        
            menu.style.right = `${dataRight}px`;
            menu.style.top = `${dataTop}px`;
            
            menu.style.position = 'absolute';
            menu.style.display = 'block';
        }
    });
    
    icon.addEventListener('mouseout', function() {
        const menuType = icon.dataset.menu;
        const menu = document.querySelector(`.drop-menu-${menuType}`);
        
        if (menu) {
            // menu.style.opacity = '0';
            menu.style.display = 'none';

        }
    });
});





const btnDropMenu = document.querySelectorAll('.drop-menu-hover')

for (const item of btnDropMenu) {
    item.addEventListener('mouseover', function () {
        const dropMenu = document.createElement('div')
        dropMenu.classList.add('drop-menu-chat')

        this.appendChild(dropMenu)

        this.style.position = 'relative'

        const dataRight = this.dataset.right
        const dataTop = this.dataset.top
        const dataMess = this.dataset.message

        dropMenu.style.right = `${dataRight}px`
        dropMenu.style.top = `${dataTop}px`
        dropMenu.innerText = dataMess
        dropMenu.style.opacity = '1'

    })

    item.addEventListener('mouseout', function () {
        const dropMenu = this.querySelector('.drop-menu-chat')
        if (dropMenu) {
            dropMenu.remove() 
        }
    })
}
    
const headerArrow = document.querySelector('.header-arrow')
const profArr = document.querySelector('.profille-arrow')
const asideSection = document.querySelector('.aside')

headerArrow.addEventListener('click' , function(){
    asideSection.style.transform = "translate(0,0)"
    asideSection.style.position = "unset"
    asideSection.style.height = "100vh"

    headerMenuIcon.classList.add("hide")
    profArr.style.display = 'block'
    const asideCon = document.querySelector('.aside__container').style.height = '100%'
    const wrapper = document.querySelector('.wrapper').style.display = "flex"
    
})

function closeMenu () {
    asideSection.style.transform = "translate(-120%,2%)"
    asideSection.style.position = "absolute"
    const asideCon = document.querySelector('.aside__container').style.height = ''
    headerMenuIcon.classList.remove("hide")

    profArr.style.display = 'none'


    return
}









