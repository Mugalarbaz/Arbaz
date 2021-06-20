let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let SignIn = document.querySelector(".signin");
let SignUp = document.querySelector(".signup");

btnLogin.onclick = function(){
    SignIn.classList.add("active");
    SignUp.classList.add("inActive");
}
btnSignUp.onclick = function(){
    SignIn.classList.remove("active");
    SignUp.classList.remove("inActive");
}   