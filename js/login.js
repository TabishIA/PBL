var signup = ()=>{
    window.location.assign("./login.html");
}

const Email = document.getElementById("email");
const Password = document.getElementById("password");
const Message = document.getElementById("message");

const login = () => {
    if (Email.value === "") {
        Message.innerHTML = "Email address is required!";
        Message.style.color = "red";
    } else if (Password.value === "") {
        Message.innerHTML = "Password is required!";
        Message.style.color = "red";
    } else {
        const userData = {
            Email: Email.value,
            Password: Password.value
        };
        console.log(userData);
    }
};

document.getElementById("loginButton").addEventListener("click", login);
var signup = ()=>{
    window.location.assign("./login.html");
}

const Email = document.getElementById("email");
const Password = document.getElementById("password");
const Message = document.getElementById("message");

const login = () => {
    if (Email.value === "") {
        Message.innerHTML = "Email address is required!";
        Message.style.color = "red";
    } else if (Password.value === "") {
        Message.innerHTML = "Password is required!";
        Message.style.color = "red";
    } else {
        const userData = {
            Email: Email.value,
            Password: Password.value
        };
        console.log(userData);
    }
};

document.getElementById("loginButton").addEventListener("click", login);