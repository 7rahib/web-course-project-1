const registerFormValidation = () => {
    const nameReg = /^[A-Za-z]+$/;
    const mobileReg = /+?(88)?0?1[56789][0-9]{8}\b/;
    const passReg = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let email = document.getElementById("email").value;
    let fname = document.getElementById("fname").value;
    let mobile = document.getElementById("mobile").value;
    let pass = document.getElementById("pass").value;
    let confirmPass = document.getElementById("confirm-pass").value;
    if (!email.match(emailReg)) {
        alert('Enter valid email');
    }
    else if (!fname.match(nameReg)) {
        alert('Your first name should not contain any digits');
    }
    else if (!mobile.match(mobileReg)) {
        alert('Only Bangladeshi operator is acceptable');
    }
    else if (!pass.match(passReg)) {
        alert('Your password must contain a digit and it should be 10 character long');
    }
    else if (pass !== confirmPass) {
        alert('Please confirm your password');
    }
    else {
        alert('New Account Created');
    }
}

const loginFormValidation = () => {
    const passReg = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    if (!email.match(emailReg)) {
        alert('Enter valid email');
    }
    else if (!pass.match(passReg)) {
        alert('Your password must contain a digit and it should be 10 character long');
    }
    else {
        alert('Logged in');
    }
}
