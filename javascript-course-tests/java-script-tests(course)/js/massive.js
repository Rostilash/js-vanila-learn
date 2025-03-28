"use strict";

//popap button
// const btnModelOpen = document.querySelector(".btn");
// const modal = document.querySelector(".modal");
// const modalClose = document.querySelectorAll(".modal__close");
// const overlay = document.querySelector(".overlay");
// const img = document.querySelector(".img");
// const randomImageButton = document.querySelector(".modal__btn-random")

// function delTab(){
// const focus = document.querySelectorAll(
// "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1']) ");

// focus.forEach(element => {
// if(!modal.contains(element)){
// element.setAttribute('tabindex', "-1");
// }
// });
// }

// const modalOpen = () => {
// modal.classList.remove("hidden");
// overlay.classList.remove("hidden");
// delTab();
// }
// btnModelOpen.addEventListener("click", modalOpen);

// function CloseModal() {
// modal. classList.add("hidden");
// overlay.classList.add("hidden");
// }

// modalClose.forEach((val) => {
// val.addEventListener("click",() => {
// CloseModal();
// });
// })

// overlay.addEventListener("click",() => {
// CloseModal();
// });

// document.addEventListener("keydown", function(event){
// if(event.key  === "Escape"){
// CloseModal();
// }
// });
// Random images

// function randomNumber(){

// const num = Math.trunc(Math.random() * (700 - 650 + 1)) + 650;
// console.log(num);
// img.setAttribute('src', `https://picsum.photos/700/${num}`);
// }

// randomImageButton. addEventListener("click", randomNumber);

//Burger Menu

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay2");

console.log(burger);
burger.addEventListener("click", function () {
  console.log(nav);
  nav.classList.add("add");
  overlay.classList.remove("hidden");
});
close.addEventListener("click", function () {
  nav.classList.remove("add");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  nav.classList.remove("add");
  overlay.classList.add("hidden");
});
