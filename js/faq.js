let myPara = document.querySelectorAll(".question .info");
let allSpans = document.querySelectorAll(".span");

allSpans.forEach((span) => {
  span.addEventListener("click", create);
});

function create() {
  if (
    this.classList.contains("rot") &&
    document.querySelector(this.dataset.val).classList.contains("disp")
  ) {
    this.classList.remove("rot");
    document.querySelector(this.dataset.val).classList.remove("disp");
  } else {
    this.classList.add("rot");
    document.querySelector(this.dataset.val).classList.add("disp");
  }
}

//*********************** */ start sethings ******************************
let spansColor = document.querySelectorAll(".change-color");
let myLinks = document.querySelectorAll(".navbar .container .collapse ul li a");
let myParemeter = document.querySelector(".seth");
let mySethingCont = document.querySelector(".sething");
let mySpans = document.querySelectorAll(".sething .text .color span");
let myBullet = document.querySelector(".carousel-indicators button.active");
let myBottons = document.querySelectorAll("#one");
let myNextBott = document.querySelector(".carousel-control-next");
let myPrevBott = document.querySelector("carousel-control-prev");

let a = document.querySelector("link[href*='theme']");
mySpans.forEach((span) => {
  span.addEventListener("click", check);
});

function check() {
  a.setAttribute("href", `${this.dataset.values}`);
}

// ***************************************************************
myLinks.forEach((ele) => {
  ele.addEventListener("click", remove);
});

function remove() {
  myLinks.forEach((ele) => {
    ele.classList.remove("active");
  });
  this.classList.add("active");
}

// *********** transition of SethingCont ***********
myParemeter.onclick = function () {
  if (myParemeter.classList.contains("done")) {
    mySethingCont.classList.remove("transform");
    myParemeter.classList.remove("done");
  } else {
    mySethingCont.classList.add("transform");
    myParemeter.classList.add("done");
  }
};

//*********************** */ end sethings ******************************
