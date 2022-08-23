const calculate = document.querySelector("#calculate");
const modal = document.querySelector(".modal");
const backBtn = document.querySelector(".back-btn");
const night = document.querySelector("#night");
const light = document.querySelector("#light");
const body = document.querySelector("body");
const txt = document.querySelector(".calculator-txt");
const image = document.querySelector(".fat-man img");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
let error = false;

calculate.addEventListener("click", function (e) {
  modal.style.display = "block";
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".bmi");
  if (
    (weight,
    height === 0 || height,
    weight == undefined ||
      isNaN(weight, height) ||
      weight <= 20 ||
      height <= 60)
  ) {
    result.innerHTML = "please enter valid number!";
  } else {
    result.innerHTML = "";
    error = true;
  }
  if (error) {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = "bro/sis please eat food! your bmi is: " + bmi;
      arrow1.style.display = "block";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = "wow! your weight is normal check your bmi:  " + bmi;
      arrow2.style.display = "block";
    } else {
      result.innerHTML =
        " diet, this world change your world... |  anyway! your bmi is : " +
        bmi;
      arrow3.style.display = "flex";
    }
  } else {
    alert("click on the back and enter a valid number");
  }
});

backBtn.addEventListener("click", function () {
  modal.style.display = "none";
  window.location = location;
});

night.addEventListener("click", function () {
  body.style.background = "gray";
  txt.style.color = "white";
  txt.style.background = "gray";
  image.style.display = "none";
});

light.addEventListener("click", function () {
  body.style.background = "white";
  txt.style.color = "black";
  image.style.display = "flex";
  txt.style.background = "none";
});
