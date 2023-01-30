const createPassword = document.getElementById("create-passwrd");
const confirmPassword = document.getElementById("confirm-passwrd");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("sign-up");

submitBtn.addEventListener('click', validatePassword);

function validatePassword() {
    password1 = createPassword.value;
    password2 = confirmPassword.value;

    if (password1 == "") {
        document.getElementById('create-passwrd').setAttribute('title', 'create password');
    }
}

