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
// let myParemeter = document.querySelector(".seth");
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
//*********************** */ start our template ******************************
let myTemplate = document.querySelector(".navbar");
let myContainer = document.querySelector(".container .row .spacial");

window.addEventListener("scroll", function () {
  if (window.scrollY >= myTemplate.offsetTop + 50) {
    myContainer.classList.add("skew-cont");
  } else {
    myContainer.classList.remove("skew-cont");
  }
});
//*********************** */ end our template ******************************

// *************************************************************************************************************************************

// // //**************** */ start our features *************************

let myourFeatures = document.querySelector(".our-features");
let myBoxes = document.querySelectorAll(".our-features .row .box");

window.addEventListener("scroll", function () {
  if (window.scrollY > myContainer.offsetTop) {
    myBoxes.forEach((box) => {
      box.classList.add("animate");
    });
  } else {
    myBoxes.forEach((box) => {
      box.classList.remove("animate");
    });
  }
});

// // //**************** */ end our features *************************

// // //**************** */ start container *************************
let myCont = document.querySelector(".our-clients .container");
window.addEventListener("scroll", function () {
  if (window.scrollY >= myourFeatures.offsetTop + 200) {
    myCont.classList.add("animation-cont");
  } else {
    myCont.classList.remove("animation-cont");
  }
});
// // //**************** */ end our services *************************

// // //**************** */ start our amazing *************************
let myAmazing = document.querySelector(".our-amazing");
let ourAmazingBox = document.querySelectorAll(".our-amazing .box");

window.addEventListener("scroll", function () {
  if (window.scrollY >= myAmazing.offsetTop - 100) {
    ourAmazingBox.forEach((box) => {
      box.classList.add("amazing-animated");
      box.classList.add("trans");
    });
  } else {
    ourAmazingBox.forEach((box) => {
      box.classList.remove("amazing-animated");
      box.classList.remove("trans");
    });
  }
});

// // //**************** */ end our amazing *************************

// // //**************** */ start Team *************************
let myTeam = document.querySelector(".team");
let myTeams = document.querySelectorAll(".team .box");
window.addEventListener("scroll", function () {
  if (window.scrollY >= myTeam.offsetTop - 50) {
    myTeams.forEach((ele) => {
      ele.classList.add("team-animation");
    });
  } else {
    myTeams.forEach((ele) => {
      ele.classList.remove("team-animation");
    });
  }
});
// // //**************** */ end team *************************
// // //**************** */ start touch *************************
let touch = document.querySelector(".touch");
let myTouchContainer = document.querySelector(".touch .container");
window.addEventListener("scroll", function () {
  if (window.scrollY >= touch.offsetTop - 500) {
    myTouchContainer.classList.add("touch-anime");
  } else {
    myTouchContainer.classList.remove("touch-anime");
  }
});
// // //**************** */ end stat *************************
// // //**************** */ start our skills *************************
let ourSkills = document.querySelector(".our-skills");

// // //**************** */ start contact *************************
let myContact = document.querySelector(".contact");
let myUsers = document.querySelectorAll(".contact .row .user");

window.addEventListener("scroll", function () {
  if (window.scrollY >= ourSkills.offsetTop + 300) {
    myUsers.forEach((user) => {
      user.classList.add("user-anime");
    });
  } else {
    myUsers.forEach((user) => {
      user.classList.remove("user-anime");
    });
  }
});

// // //**************** */ end our blog *************************
// // //**************** */  start our-clients *************************

let ourMarket = document.querySelector(".market");
let images = document.querySelectorAll(".market .marke");

window.addEventListener("scroll", function () {
  if (window.scrollY >= ourMarket.offsetTop - 400) {
    images.forEach((img) => {
      img.classList.add("img-animation");
    });
  } else {
    images.forEach((img) => {
      img.classList.remove("img-animation");
    });
  }
});

//*************** */ start loading-screen ***********************
let loading = document.querySelector(".loading-screen");
let balance = document.querySelector(".loading-screen .balance");
let myBalances = document.querySelectorAll(".loading-screen span");

window.addEventListener("load", function () {
  setTimeout(() => {
    loading.classList.add("disp-load");
    loading.style.cssText = "display: none";
  }, 2000);
});
//*************** */ end loading-screen ***********************
