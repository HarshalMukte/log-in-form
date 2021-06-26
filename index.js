const password = document.getElementById("password");

const check = document.getElementById("check").addEventListener('click', () => {
    if(password.type === 'password'){
        password.type = "text";
    }else {
        password.type = "password";
    }
});



