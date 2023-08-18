const formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", loginForm);
let email = document.getElementById("email").value;

let password = document.getElementById("password").value;

function loginForm(element) {
  element.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (!passwordAndEmailisValid(email, password)) {
    alert("Email or password is invalid!");
  } else {
    window.location.href = "./mainWeb/index.html";
  }
}

const emailRegex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,}$/;
function passwordAndEmailisValid(email, password) {
  return (
    emailRegex.test(email) &&
    password.length > 6 &&
    password.toLowerCase() !== password
  );
}
