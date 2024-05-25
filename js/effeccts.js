const searchTitle = document.querySelectorAll('.search__tool-block') 

for (block of searchTitle) {
    block.addEventListener('mouseover', function () {
        for (block of searchTitle) {
            block.classList.remove('active')
        }
        this.classList.add('active')
    })
}

// for (block of searchTitle) {
//     block.style.transition = '0.4s'
//     const blockElement = document.querySelector('.search__tool-block-element')
//     block.addEventListener('mouseover', function () {
//         this.style.background = 'rgba(255, 255, 255, 0.13)'
//         this.classList.add('active')
//         blockElement.style.opacity = '0.7'
        
//     })
//     block.addEventListener('mouseout', function () {
//         this.style.background = 'none'
//         this.classList.remove('active')

//         blockElement.style.opacity = '0'
//     })
// }