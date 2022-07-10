'use strict'

let yourname = prompt('Hi, what is your name?');
console.log('Hello, ' + yourname);

let age = prompt('How old are you?');
let message;

if(age <= 12){
    message = 'Hey there, kiddo!';
} else if (age <= 18){
    message = 'Hey there, teen!';
} else if(age <= 21){
    message = "Sorry, I can't get you a beer ;P";
} else {
    message = "Being an adult isn't all it's cracked up to be, huh?";
}

document.write('Hello ' + yourname + '! ' + message);