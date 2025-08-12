function isLeap(year) {
  year = Number(year);
  if (year % 4 !== 0) {
    return "Not leap year.";
  } else if (year % 100 !== 0) {
    return "Leap year.";
  } else if (year % 400 !== 0) {
    return "Not leap year.";
  } else {
    return "Leap year.";
  }
}

var form = document.getElementById("leapForm");
var yearInput = document.getElementById("year");
var resultEl = document.getElementById("result");
var cow = document.getElementById("cow");

resultEl.textContent = "";
resultEl.classList.remove("show");

cow.addEventListener("animationend", function () {
  cow.classList.remove("leap", "fail");
  resultEl.textContent = "";
  resultEl.classList.remove("show");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var year = yearInput.value.trim();
  var result = isLeap(year);

  resultEl.textContent = result;
  resultEl.classList.add("show");

  cow.classList.remove("leap", "fail");
  void cow.offsetWidth;

  if (result === "Leap year.") {
    cow.classList.add("leap");
  } else {
    cow.classList.add("fail");
  }

  yearInput.value = "";
  yearInput.focus();
});
