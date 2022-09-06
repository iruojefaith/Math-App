// questions = [
//     {
//         numberOne: 3,
//         numberTwo: 56
//     },
//      {
//         numberOne: 73,
//         numberTwo: 5
//     },
//      {
//         numberOne: 23,
//         numberTwo: 6
//     },
//      {
//         numberOne: 30,
//         numberTwo: 64
//     }

// ]

//generate random numbers
let firstNumber = parseInt(Math.random()*10);
let secondNumber = parseInt(Math.random()*10);
let button  = document.getElementById('btn');


//get the total
let total = firstNumber + secondNumber;

//display numbers on the canvas
let primary = document.getElementById('primary-number');
    primary.innerHTML = `<p>${firstNumber}</p>`;

let secondary = document.getElementById('secondary-number');
    secondary.innerHTML = `<p>${secondNumber}</p>`


//get guess from user


button.addEventListener('click', function (){

let guess = document.getElementById('guess').value;
    guess = Number(guess);
//check answer
if (guess === total){
    document.querySelector(".display").innerHTML = ('Correct');
} else {
    document.querySelector(".display").innerHTML = ('Sorry. Incorrect. The correct answer was ' + total + '.');


}
    });

    function refreshPage(){
    window.location.reload();
}


