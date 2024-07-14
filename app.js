 // As a user, I want to be able to select numbers so that I can perform operations with them.
 // As a user, I want to be able to add two numbers together.
 // As a user, I want to be able to subtract one number from another.
 // As a user, I want to be able to multiply two numbers together.
 // As a user, I want to be able to divide one number by another.
 // As a user, I want to be able to see the output of the mathematical operation.
 // As a user, I want to be able to clear all operations and start from 0.

// /*-------------------------------- Constants --------------------------------*/
// const calculator = document.querySelector('#calculator');
// const numberOne = document.querySelector('.one')
// const numberTwo = document.querySelector('.two')
// const numberThree = document.querySelector('.three')
// const numberFour = document.querySelector('.four')
// const numberFive = document.querySelector('.five')
// const numberSix = document.querySelector('.six')
// const numberSeven = document.querySelector('.seven')
// const numberEight = document.querySelector('.eight')
// const numberNine = document.querySelector('.nine')
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
//  /*-------------------------------- Variables --------------------------------*/

//  /*------------------------ Cached Element References ------------------------*/

//  /*----------------------------- Event Listeners -----------------------------*/

// // /*-------------------------------- Functions --------------------------------*/
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (button.classList.contains('number') || button.classList.contains('operator')) {
            if (buttonValue === 'C') {
                display.textContent = '';
            } else {
                display.textContent += buttonValue;
            }
        }

        if (button.classList.contains('equals')) {
            try {
                display.textContent = eval(display.textContent);
            } catch (e) {
                alert('Invalid expression');
                display.textContent = '';
            }
        }
    });
});
