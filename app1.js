// нужно создать ф-ю по получению  случайного числа в выбранном диапазоне и подставлять полученые значения в градиент - сделать рандомный градиент, который будет генерироваться а не выбираться случайно из массива
const board = document.querySelector('#board')
const background = 'linear-gradient(221.78deg, #00ffea 1%, #5305af 128%)'
const backgrounds= ["#bbbbbb", "#cccccc", "#dddddd"]
const SQUARES_NUMBER = 900

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setBackground(square))

    square.addEventListener('mouseleave', () => 
        removeBackground(square))
    

    board.append(square)
}

function setBackground(element) {
    const background = getRandomBackground()
    element.style.background = background
    element.style.boxShadow = `0 0 2px ${background}`
}

function removeBackground(element) {    
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomBackground() {
    const index = Math.floor(Math.random() * backgrounds.length)
    return backgrounds[index]
}