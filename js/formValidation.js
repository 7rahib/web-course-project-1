function registerFormValidation() {
    const regPass = /.*[0-9].*/g;
    const regaxName = /[a-zA-z._]/g;
    const regaxNumber = /(\+88)?-?01[3-9][0-9]{8}/g;
    const regEmail = /(cse|eee|cee|law|eng|arch)_\d{10}@lus\.ac\.bd/g;

    const email = document.getElementById('email').value
    if (email.match(regEmail)?.join('') != email) {
        alert('Only LU email allowed')
    }
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const fullName = firstName + lastName;
    if (fullName.match(regaxName).join('') != fullName) {
        alert("Give Right Name")
    }
    const number = document.getElementById('mobile').value;
    if (number.match(regaxNumber)?.join('') != number) {
        alert('Only BD number allowed')
    }
    const pass = document.getElementById('pass').value;
    const pass1 = document.getElementById('pass').value;
    if (pass == pass1) {
        if (pass.match(regPass).join('') != pass) {
            alert('Give right password')
        }
    }
}
function loginFormValidation() {
    const regEmail = /(cse|eee|cee|law|eng|arch)_\d{10}@lus\.ac\.bd/g;
    const regPass = /.*[0-9].*/g;

    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value;
    if (email.match(regEmail)?.join('') != email) {
        alert('Only LU email allowed')
    }
    else if (pass.match(regPass).join('') != pass) {
        alert('Give right password')
    }
}

