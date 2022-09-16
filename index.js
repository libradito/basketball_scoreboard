const homeScore = document.getElementById("score_home");
const guestScore = document.getElementById("score_guest");

const guestButtons = document.getElementsByClassName("guest");
const homeButtons = document.getElementsByClassName("home");

let homeCounter = 0;
let guestCounter = 0;

for (var i = 0; i < homeButtons.length; i++) {
  homeButtons[i].addEventListener("click", increase, false);
  guestButtons[i].addEventListener("click", increase, false);
}

function incValue(counter, value) {
  if (counter == "home") {
    homeCounter += value;
    homeScore.innerText = homeCounter;
  } else if (counter == "guest") {
    guestCounter += value;
    guestScore.innerText = guestCounter;
  }

  if (guestCounter < homeCounter) {
    homeScore.style.color = "#FBBF24";
    homeScore.parentElement.style.border = "2px solid #adee88";
    homeScore.parentElement.style.transitionDuration = "0.5s";

    guestScore.style.color = "#f94f6d";
    guestScore.parentElement.style.border = "2px solid gray";
    guestScore.parentElement.style.transitionDuration = "0.5s";
  } else {
    guestScore.style.color = "#FBBF24";
    guestScore.parentElement.style.border = "2px solid #adee88";
    guestScore.parentElement.style.transitionDuration = "0.5s";

    homeScore.style.color = "#f94f6d";
    homeScore.parentElement.style.border = "2px solid gray";
    homeScore.parentElement.style.transitionDuration = "0.5s";
  }
}

function increase(event) {
  let mainTarget = "";

  if (event.target.className == "home") {
    mainTarget = "home";
  } else {
    mainTarget = "guest";
  }
  if (event.target.innerHTML == "+1") {
    incValue(mainTarget, 1);
  } else if (event.target.innerHTML == "+2") {
    incValue(mainTarget, 2);
  } else {
    incValue(mainTarget, 3);
  }
}

function newGame() {
  console.log("click");
  homeCounter = 0;
  guestCounter = 0;
  guestScore.innerText = guestCounter;
  homeScore.innerText = homeCounter;
  homeScore.style.color = "#f94f6d";
  homeScore.parentElement.style.border = "2px solid gray";
  guestScore.style.color = "#f94f6d";
  guestScore.parentElement.style.border = "2px solid gray";
}
