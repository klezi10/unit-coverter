let inputNumber = document.querySelector('.input-number')
let displayInputNumbers = document.querySelectorAll('.display-number')
const displayFeet = document.getElementById('display-feet')
const displayMeters = document.getElementById('display-meters')
const displayGallons = document.getElementById('display-gallons')
const displayLiters = document.getElementById('display-liters')
const displayPounds = document.getElementById('display-pounds')
const displayKilos = document.getElementById('display-kilos')

inputNumber.addEventListener('keyup', showInput)

function showInput() {
    const number = inputNumber.value
    for (var i = 0; i < displayInputNumbers.length; i++) {
        displayInputNumbers[i].textContent = number
      }
    calculateValues(number)
}

function calculateValues(number) {
    displayFeet.textContent = (number * 3.2808).toFixed(3)
    displayMeters.textContent = (number * 0.3048).toFixed(3)
    displayGallons.textContent = (number * 0.2642).toFixed(3)
    displayLiters.textContent = (number * 3.78541).toFixed(3)
    displayPounds.textContent = (number * 2.20462).toFixed(3)
    displayKilos.textContent = (number * 0.453592).toFixed(3)
}