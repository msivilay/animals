'use strict'

function getAgeResponse(age){

    if(age <= 12){
    return "It's sweet being a kid! Enjoy learning about animals.";
    } else if (age <= 18){
    return "Cherish your teen years!";
    } else if(age < 21){
    return "Can I see your ID? ;P";
    } else if(age == 21){
    return "Cheers to you!";
    } else {
    return "Being an adult isn't all it's cracked up to be, huh? Enjoy reading about some animals.";
    }

}

function greet(){

let yourname = prompt('Hi, what is your name?');
console.log('Welcome, ' + yourname);

let faveanimal = prompt ('What is your favorite animal?');
console.log(faveanimal + '... cool.');

let age = prompt('How old are you?');
let message = getAgeResponse(age);

document.write('Hello ' + yourname + '! ' + message);
}

greet();

function getEmail(){
let emailReturn=prompt ('What is your email?');
console.log(emailReturn);
return emailReturn;
}    

function verifyemail(emailArg){
    if (emailArg.includes("@")){
        return true;
    }
    else {
        return false;
    }
}

let email = getEmail();

if (!verifyemail(email)){
    alert('Error: something wrong with your email address');

    email = getEmail();
}

alert('Email address now on file: ' + email);