let passId = document.getElementById('password')
let passError = document.getElementById('errorForPassword')

function checkPassword() {
    if (passId.value.length > 0 && passId.value.length < 6) {
        passError.style.display = 'block';
    } else {
        passError.style.display = 'none';
    }
}


let textnumber = document.getElementById('numberpleace');
let numEror = document.getElementById('errorNumber');

function cheakNumber() {
    if (textnumber.value.length > 0 && textnumber.value.length < 11) {
        numEror.style.display = 'block';
    }
    else {
        numEror.style.display = 'none';
    }
}

let textEmail = document.getElementById('emailpleace');
let errorEmail = document.getElementById('erroremail');

function cheakEmail() {
    if (textEmail.value.includes('@gmail.com')) {
        errorEmail.style.display = 'none';
    }
    else {
        errorEmail.style.display = 'block';
    }
}