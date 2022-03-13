let inputNumber = document.querySelector('.input-number')
let displayInputNumbers = document.querySelectorAll('.display-number')

inputNumber.addEventListener('keyup', showInput)

function showInput() {
    console.log(inputNumber.value)


    for (var i = 0; i < displayInputNumbers.length; i++) {
        displayInputNumbers[i].textContent = inputNumber.value
      }
}

