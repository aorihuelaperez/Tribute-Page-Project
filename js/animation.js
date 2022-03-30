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


// OBJECTS AND ARRAYS

// THIS IS AN OBJECT
// You can store information to fetch later
var infoObj = {
    "email": "mystuff@gmail.com",
    "name": "David Land",
    "age": function() {
        // you can use functions to select info from the html file and store it for later.
        return $('div.gangBlock').val()
    }
}

// THIS IS AN ARRAY
// you can store things as a list for later
var myArry = ["cat", "dog", "dragon", "horse"]

var coolArry = [{
        "something": 12345
    },
    {
        other: 10
    }
]