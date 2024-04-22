var a = 0; 
var b = 0; 

function pass() {
    if (a == 1) {
        document.getElementById('password').type = 'password';
        document.getElementById('pass-icon').src = '/images/hide.png';
        a = 0;
    } else {
        document.getElementById('password').type = 'text';
        document.getElementById('pass-icon').src = '/images/show.png';
        a = 1;
    }
}

function pass1() {
    if (b == 1) {
        document.getElementById('confirmPassword').type = 'password';
        document.getElementById('pass-icon-confirm').src = '/images/hide.png';
        b = 0;
    } else {
        document.getElementById('confirmPassword').type = 'text';
        document.getElementById('pass-icon-confirm').src = '/images/show.png';
        b = 1;
    }
}
function validateForm() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let message = document.getElementById("message");

    if (password !== confirmPassword) {
        message.textContent = "Warning: Passwords do not match. Please check again.";
        message.style.backgroundColor = "#ff4d4d";
        return false;
    } else if (!/^[0-9\+]{10,}$/.test(phoneNumber)) {
        message.textContent = "Please enter a 10-digit number with only integers and +.";
        message.style.backgroundColor = "#ff4d4d";
        return false;
    } else {
        // Clear the form
        document.getElementById("registrationForm").reset();

        // Show prompt message
        alert("Registration successful!");
        return true;
    }
}
function checkPhoneNumber() {
    let phoneNumberInput = document.getElementById("phoneNumber");
    let phoneNumber = phoneNumberInput.value;
    let message = document.getElementById("message");

    if (!/^[0-9\+]{10,}$/.test(phoneNumber)) {
        message.textContent = " Please enter a 10-digit number with only integers and +.";
        message.style.backgroundColor = "#ff4d4d";
        phoneNumberInput.setCustomValidity("Invalid phone number");
    } else {
        message.textContent = "";
        message.style.backgroundColor = "";
        phoneNumberInput.setCustomValidity(""); 
    }
}

