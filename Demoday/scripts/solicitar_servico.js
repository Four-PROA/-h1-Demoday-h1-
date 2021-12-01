const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = [...document.querySelectorAll(".step p")];
const progressCheck = [...document.querySelectorAll(".step .check")];
const bullet = [...document.querySelectorAll(".step .bullet")];
const bug = document.querySelector(".bug")
const bug2 = document.querySelector(".bug2")
const bug3 = document.querySelector(".bug3")
let max = 4;
let current = 1;

nextBtnFirst.addEventListener("click", function(){
  bug.style.display="none"
  bug2.style.display="block"
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  bug2.style.display="none"
  bug3.style.display="block"
});
submitBtn.addEventListener("click", function(){
  bug3.style.display="none"
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  console.log("opa")

  setTimeout(function(){
    alert("Cadastro feito com sucesso");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(){
  bug2.style.display="none"
  bug.style.display="block"
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(){
  // slidePage.style.marginLeft = "-25%";
  // bullet[current - 2].classList.remove("active");
  // progressCheck[current - 2].classList.remove("active");
  // progressText[current - 2].classList.remove("active");
  // current -= 1;
});
