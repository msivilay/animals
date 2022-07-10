'use strict'

let yourname = prompt('Hi, what is your name?');
console.log('Welcome, ' + yourname);

let faveanimal = prompt ("What is your favorite animal?");
console.log(faveanimal + "... cool.");

let age = prompt('How old are you?');
let message;

if(age <= 12){
    message = "It's sweet being a kid!";
} else if (age <= 18){
    message = "Cherish your teen years!";
} else if(age <= 21){
    message = "Sorry, I can't get you a beer ;P";
} else {
    message = "Being an adult isn't all it's cracked up to be, huh?";
}

document.write('Hello ' + yourname + '! ' + message);