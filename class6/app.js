'use strict'

let yourname = prompt('Hi, what is your name?');
console.log('Welcome, ' + yourname);

let faveanimal = prompt ('What is your favorite animal?');
console.log(faveanimal + '... cool.');

let age = prompt('How old are you?');
let message;

if(age <= 12){
    message = "It's sweet being a kid! Enjoy learning about animals.";
} else if (age <= 18){
    message = "Cherish your teen years!";
} else if(age <= 21){
    message = "Can I see your ID? ;P";
} else {
    message = "Being an adult isn't all it's cracked up to be, huh? Enjoy reading about some animals.";
}

document.write('Hello ' + yourname + '! ' + message);