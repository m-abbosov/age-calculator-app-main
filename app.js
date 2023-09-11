// inputs
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

// Outputs
const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YYYY");

const form = document.querySelector("form");

const date = new Date();
let day = date.getDay();
let month = date.getMonth() + 1;
let year = date.getFullYear();
const inputs = document.querySelectorAll("input");

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
form.addEventListener("submit", handleSubmit);

function validate() {
  let val = true;

  inputs.forEach((i) => {
    const parent = i.parentElement;

    if (!i.value) {
      i.style.borderColor = "hsl(0, 100%, 67%)";
      parent.querySelector("i").innerHTML = "this field is required.";
      val = false;
    } else if (monthInp.value > 12) {
      monthInp.style.borderColor = "hsl(0, 100%, 67%)";
      monthInp.parentElement.querySelector("i").innerHTML =
        "must be a valid month.";
      val = false;
    } else if (dayInp.value > 31) {
      dayInp.style.borderColor = "hsl(0, 100%, 67%)";
      dayInp.parentElement.querySelector("i").innerHTML =
        "must be a valid day.";
      val = false;
    } else {
      i.style.borderColor = "hsl(0, 0%, 86%)";
      parent.querySelector("i").innerHTML = "";
      val = true;
    }
  });

  return val;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}