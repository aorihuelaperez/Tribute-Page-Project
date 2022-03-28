/* 
NAME: ALI
DATE: 03.25.22
NOTE: ANIMATION PRACTICE WITH JQUERY
*/

// THIS IS HOW TO SETUP A FUNCTION
//OLD STYLE - THIS WAY IS USED AUTOMATICALLY
// function() {

// }

// OR - THIS WAY SO YOU CAN USE IT WHEN YOU NEED IT
var color = 'blue';

function myFunction() {
    var color2 = 'green';

    alert("I am an alert box!");
}

function titlecolor() {
    var colorChange = Math.floor(Math.random() * 10000); // will give us 4 random numbers

    $('.gangBlock').css('color', '#' + colorChange + 'ed');

    $('.fireworks').css('visibility', 'visible');
}

// TO USE THIS FUNCTION YOU CAN CALL IT BY DOING THIS:
//myFunctionName();

// OR NEW STYLE - THIS IS USED AUTOMATICALLY 
// () => {

// }

// SELECTING A HTML ELEMENT/TAG TO MANIPULATE
// JS OG VERSION
// document.querySelector('.cat-list').fadeIn(function() {
//     return null;
// })

// JQUERY LIBRARY VERSION
// $('.cat-list').fadeIn(function() {
//     return null;
// })