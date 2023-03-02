const firstName = document.getElementById("fname");
const userName = document.getElementById("username");
const eMail = document.getElementById("email");
const createPassword = document.getElementById("create-passwrd");
const confirmPassword = document.getElementById("confirm-passwrd");
const submitBtn = document.getElementById("submit-btn");

firstName.addEventListener('keyup', vaildFirstName);
userName.addEventListener('keyup', validUserName);
eMail.addEventListener('keyup', validEMail);
createPassword.addEventListener('keyup', validatePassword)
submitBtn.addEventListener('click', matchPassword);

function vaildFirstName() {
    const fName = firstName.value.length;

    if (fName > 1) {
        document.getElementById("check").style.visibility="visible";
        document.getElementById("not-valid").style.visibility="hidden";
        document.getElementById("fname-message").style.display="none";
        submitBtn.addEventListener('click', matchPassword);
    } else if (fName <= 1) {
        document.getElementById("check").style.visibility="hidden";
        document.getElementById("not-valid").style.visibility="visible";
        document.getElementById("fname-message").style.display="flex";
        submitBtn.removeEventListener('click', matchPassword);
    }
}

function validUserName() {
    const usersName = userName.value.length;

    if (usersName >= 3) {
        document.getElementById("check1").style.visibility="visible";
        document.getElementById("not-valid1").style.visibility="hidden";
        document.getElementById("username-message").style.display="none";
        submitBtn.addEventListener('click', matchPassword);
    } else if (usersName <= 2) {
        document.getElementById("check1").style.visibility="hidden";
        document.getElementById("not-valid1").style.visibility="visible";
        document.getElementById("username-message").style.display="flex";
        submitBtn.removeEventListener('click', matchPassword);
    }
}

function validEMail() {
    const regx =  new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}$/, "gm");
    const emailAddress = eMail.value;

   if (regx.test(emailAddress)) {
        document.getElementById("check2").style.visibility="visible";
        document.getElementById("not-valid2").style.visibility="hidden";
        document.getElementById("email-message").style.display="none";
        submitBtn.addEventListener('click', matchPassword);
   } else if (!regx.test(emailAddress)) {
        document.getElementById("check2").style.visibility="hidden";
        document.getElementById("not-valid2").style.visibility="visible";
        document.getElementById("email-message").style.display="flex";
        submitBtn.removeEventListener('click', matchPassword);
   }    
}

function validatePassword() {
    const regx = new RegExp(/^[A-Za-z_!@#$%&'*+\/=?`{|}~^.-]{8,20}$/);
    const password = createPassword.value;
    
    if (regx.test(password)) {
        document.getElementById("check3").style.visibility="visible";
        document.getElementById("not-valid3").style.visibility="hidden";
        submitBtn.addEventListener('click', matchPassword);
    } else if (!regx.test(password)) {
        submitBtn.removeEventListener('click', matchPassword);
        document.getElementById("check3").style.visibility="hidden";
        document.getElementById("not-valid3").style.visibility="visible";
    }
}

function matchPassword() {
    const password1 = createPassword.value;
    const password2 = confirmPassword.value;

    if (password2 === "") {
        alert("please confirm password");
        submitBtn.removeEventListener('click', matchPassword);
    } else if (password1 === password2) {
        alert("Account created");
        submitBtn.addEventListener('click', matchPassword);
    }
}
