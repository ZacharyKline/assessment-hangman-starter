const wordToGuessElement = document.querySelector('#word-to-guess')
const letterInputElement = document.querySelector('#letter-input')
const letterSubmitButton = document.querySelector('#letter-submit-button')
const strikeZone = document.querySelector('#strikeZone')
const vicordefeat = document.querySelector('#vicordefeat')
const lettersAttemptedElement = document.querySelector('#letters-attempted')
const currentWord = wordToGuessElement.innerText
// victory or defeat conditional variables
let strikes = 0
let correct = 0
let youWin = false

// Fun optional victory and defeat stuff
let victory = new Image()
victory.src = "https://media1.giphy.com/media/l522kgooW2Qo9xtK5Z/200.gif";
let defeat = new Image()
defeat.src ='https://gifimage.net/wp-content/uploads/2018/11/you-monster-gif-4.gif'

letterSubmitButton.addEventListener('click', function clicky() {
    
    if (currentWord.includes(letterInputElement.value)) {
        
    } else {
        if (lettersAttemptedElement.innerText.includes(letterInputElement.value)) {
            alert('You tried that already, try another letter')
        } else {
            strikeZone.innerText += 'X'
            lettersAttemptedElement.innerText += letterInputElement.value
            strikes += 1

        }
    }
    // if (youWin = true) {
    // letterSubmitButton.removeEventListener("click", clicky);
    // vicordefeat.appendChild(victory);

    // }
    if (strikes === 5) {
        letterSubmitButton.removeEventListener('click', clicky)
        strikeZone.innerHTML = 'He is dead, his blood is on your hands now.'
        vicordefeat.appendChild(defeat)
    }
})