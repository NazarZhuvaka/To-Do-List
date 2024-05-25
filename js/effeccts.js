const searchTitle = document.querySelectorAll('.search__tool-block') 
console.log(searchTitle)

for (block of searchTitle) {
    block.style.transition = '0.4s'
    const blockElement = document.querySelector('.search__tool-block-element')
    block.addEventListener('mouseover', function () {
        this.style.background = 'red'
        blockElement.style.opacity = '0.7'
    })
    block.addEventListener('mouseout', function () {
        this.style.background = 'none'
        blockElement.style.opacity = '0'
    })
}