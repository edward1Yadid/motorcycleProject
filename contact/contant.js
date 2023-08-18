const formContact = document.getElementById("formContact");

formContact.addEventListener("submit", validation);

const regexName = /^[A-Za-z]+$/;

function validation(event) {
  let fisrtName = document.getElementById("fisrtName");
  let lastName = document.getElementById("lastName");
  let phoneNumber = document.getElementById("PhoneNumber");
  event.preventDefault();
  if (!userFullname(fisrtName, lastName)) {
    alert("firstName is valid");
    fisrtName.classList.add("error");
    lastName.classList.add("error");
  } else if (!numberPhone(phoneNumber)) {
    phoneNumber.classList.add("error");
    alert("phone-number is valid");
  } else {
    document.body.innerHTML =
      "your reservation for driving test has been submitted!";
    document.body.style = `
      display: flex;
    flex-direction: column;
    align-items: center;

    font-size:50px;
    border:1px solid black;
    width:100vw;
    height:100vh;
     background-image: url(${photoProduct.src});
      background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color:black`;

    document.querySelector(".orderPhoto").style.display = "none";
  }
}

function userFullname() {
  let lastName = document.getElementById("fisrtName").value;
  const fisrtName = document.getElementById("lastName").value;
  const regexName = /^[A-Za-z]+$/;
  return regexName.test(fisrtName) && regexName.test(lastName);
}
let phonenumber = document.getElementById("PhoneNumber").value;
function numberPhone(phonenumber) {
  const regexnPhone = /^(?:[0-9]{3}-[0-9]{7})$/;
  return regexnPhone.test(phonenumber.value);
}

const listProduct = document.getElementById("listProduct").childNodes;
let photoProduct = document.getElementById("photoProduct");
listProduct.forEach((options) => {
  options.addEventListener("click", function () {
    document.querySelector(".orderPhoto").style.display = "";

    photoProduct.src = `../products/images/${options.value}.jpg`;
    console.log(options.value);
  });
});
let photoDriver = document.getElementById("photoDriver");
const listDrivers = document.getElementById("Driver").childNodes;

listDrivers.forEach((options) => {
  options.addEventListener("click", function () {
    document.querySelector(".orderPhoto").style.display = "";

    photoDriver.src = `../products/images/${options.value}.jpg`;
  });
});

const placeRiding = document.getElementById("placeRiding").childNodes;
placeRiding.forEach((options) => {
  options.addEventListener("click", function () {
    let placeVideo = document.getElementById("placeVideo");
    placeVideo.src = `./videos/${options.value}.mp4`;
    console.log(options.value);
  });
});

const reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  document.querySelector(".orderPhoto").style.display = "none";
});
