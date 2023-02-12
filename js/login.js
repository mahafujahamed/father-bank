// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
//    step-1: get the email adress inside the email input field
// always remember to use .value to get text form an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
// step-3: get the password inside the password field
const passwordField = document.getElementById('user-password');
const password = passwordField.value;

// step-4: verify email and password
if (email === 'sontan@baap.com' && password === 'secret'){
    window.location.href = 'bank.html';
}
else {
    alert('do not match');
}

})