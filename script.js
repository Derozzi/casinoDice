const body = document.querySelector('body')
const buttonRoll = document.querySelector('[botaoRoll]')
const resetButton = document.querySelector('[botaoReset]')
const dice = document.querySelector('[dice]')
const diceStatus = document.querySelector('[diceStatus]')

buttonRoll.addEventListener('click', e => {
    hideElements()
    setTimeout(() => dice.innerText = generateDiceNum(), 1500)
})

resetButton.addEventListener('click', reset)

function generateDiceNum () {
    const min = 1
    const max = 6
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return dice.innerText = randomNum
}

function reset () {
    dice.innerText = 0
}

function hideElements () {
    dice.classList.add('hidden')
    diceStatus.classList.remove('hidden')
    setTimeout(() => {
        dice.classList.remove('hidden')
        diceStatus.classList.add('hidden')
    }, 1500)
}