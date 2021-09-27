const modal = document.querySelector(".modal");
const buttonFirst = document.querySelector(".book-one");
const buttonSecond = document.querySelector(".book-two");
const buttonThird = document.querySelector(".book-three");
const buttonFourth = document.querySelector(".book-four");
const buttonFifth = document.querySelector(".book-five");
const buttonSixth = document.querySelector(".book-six");
const imgShowFirst = document.querySelector(".image-one");
const imgShowSecond = document.querySelector(".image-two");
const imgShowThird = document.querySelector(".image-three");
const imgShowFourth = document.querySelector(".image-four");
const imgShowFifth = document.querySelector(".image-five");
const imgShowSixth = document.querySelector(".image-six");
const btnShowFirst = document.querySelector(".btn-one");
const btnShowSecond = document.querySelector(".btn-two");
const btnShowThird = document.querySelector(".btn-three");
const btnShowFourth = document.querySelector(".btn-four");
const btnShowFifth = document.querySelector(".btn-five");
const btnShowSixth = document.querySelector(".btn-six");

//modal of first image
btnShowFirst.addEventListener("click", () => {
  //   document.querySelector(".modal").style.display = "block";
  document.querySelector(".main-page").style.filter = "grayscale(1)";
  document.getElementsByClassName("modal-one")[0].classList.remove("hide");
  document.getElementsByClassName("modal-one")[0].classList.add("show");
});

buttonFirst.addEventListener("click", () => {
  //   document.querySelector(".modal").style.display = "none";
  document.querySelector(".main-page").style.filter = "none";
  document.getElementsByClassName("modal-one")[0].classList.add("hide");
  document.getElementsByClassName("modal-one")[0].classList.remove("show");
});

imgShowFirst.addEventListener("mouseover", () => {
  document.getElementsByClassName("btn-one")[0].classList.remove("hide");
});

imgShowFirst.addEventListener("mouseout", () => {
  document.getElementsByClassName("btn-one")[0].classList.add("hide");
});

//modal of second image

btnShowSecond.addEventListener("click", () => {
  // document.querySelector(".modal-two").style.display = "block";
  document.querySelector(".main-page").style.filter = "grayscale(1)";
  document.getElementsByClassName("modal-two")[0].classList.remove("hide");
  document.getElementsByClassName("modal-two")[0].classList.add("show");
});

buttonSecond.addEventListener("click", () => {
  // document.querySelector(".modal-two").style.display = "none";
  document.getElementsByClassName("modal-two")[0].classList.add("hide");
  document.getElementsByClassName("modal-two")[0].classList.remove("show");
  document.querySelector(".main-page").style.filter = "none";
});

imgShowSecond.addEventListener("mouseover", () => {
  document.getElementsByClassName("btn-two")[0].classList.remove("hide");
});

imgShowSecond.addEventListener("mouseout", () => {
  document.getElementsByClassName("btn-two")[0].classList.add("hide");
});
//modal of third image

btnShowThird.addEventListener("click", () => {
  // document.querySelector(".modal-three").style.display = "block";
  document.querySelector(".main-page").style.filter = "grayscale(1)";
  document.getElementsByClassName("modal-three")[0].classList.remove("hide");
  document.getElementsByClassName("modal-three")[0].classList.add("show");
});

buttonThird.addEventListener("click", () => {
  // document.querySelector(".modal-three").style.display = "none";
  document.querySelector(".main-page").style.filter = "none";
  document.getElementsByClassName("modal-three")[0].classList.add("hide");
  document.getElementsByClassName("modal-three")[0].classList.remove("show");
});

imgShowThird.addEventListener("mouseover", () => {
  document.getElementsByClassName("btn-three")[0].classList.remove("hide");
});

imgShowThird.addEventListener("mouseout", () => {
  document.getElementsByClassName("btn-three")[0].classList.add("hide");
});

//modal of fourth image

btnShowFourth.addEventListener("click", () => {
  // document.querySelector(".modal-four").style.display = "block";
  document.getElementsByClassName("modal-four")[0].classList.remove("hide");
  document.getElementsByClassName("modal-four")[0].classList.add("show");
  document.querySelector(".main-page").style.filter = "grayscale(1)";
});

buttonFourth.addEventListener("click", () => {
  // document.querySelector(".modal-four").style.display = "none";
  document.getElementsByClassName("modal-four")[0].classList.add("hide");
  document.getElementsByClassName("modal-four")[0].classList.remove("show");
  document.querySelector(".main-page").style.filter = "none";
});

imgShowFourth.addEventListener("mouseover", () => {
  document.getElementsByClassName("btn-four")[0].classList.remove("hide");
});

imgShowFourth.addEventListener("mouseout", () => {
  document.getElementsByClassName("btn-four")[0].classList.add("hide");
});
//modal of fifth image

btnShowFifth.addEventListener("click", () => {
  // document.querySelector(".modal-five").style.display = "block";
  document.getElementsByClassName("modal-five")[0].classList.remove("hide");
  document.getElementsByClassName("modal-five")[0].classList.add("show");
  document.querySelector(".main-page").style.filter = "grayscale(1)";
});

buttonFifth.addEventListener("click", () => {
  // document.querySelector(".modal-five").style.display = "none";
  document.getElementsByClassName("modal-five")[0].classList.add("hide");
  document.getElementsByClassName("modal-five")[0].classList.remove("show");
  document.querySelector(".main-page").style.filter = "none";
});

imgShowFifth.addEventListener("mouseover", () => {
  document.getElementsByClassName("btn-five")[0].classList.remove("hide");
});

imgShowFifth.addEventListener("mouseout", () => {
  document.getElementsByClassName("btn-five")[0].classList.add("hide");
});
//modal of sixth image

btnShowSixth.addEventListener("click", () => {
  // document.querySelector(".modal-six").style.display = "block";
  document.getElementsByClassName("modal-six")[0].classList.remove("hide");
  document.getElementsByClassName("modal-six")[0].classList.add("show");
  document.querySelector(".main-page").style.filter = "grayscale(1)";
});

buttonSixth.addEventListener("click", () => {
  // document.querySelector(".modal-six").style.display = "none";
  document.getElementsByClassName("modal-six")[0].classList.add("hide");
  document.getElementsByClassName("modal-six")[0].classList.remove("show");
  document.querySelector(".main-page").style.filter = "none";
});

imgShowSixth.addEventListener("mouseover", () => {
  document.getElementsByClassName("btn-six")[0].classList.remove("hide");
});

imgShowSixth.addEventListener("mouseout", () => {
  document.getElementsByClassName("btn-six")[0].classList.add("hide");
});
