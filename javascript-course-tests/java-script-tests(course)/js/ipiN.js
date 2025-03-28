"use strict";
// intersaction upserver ip ai
// const observer = new IntersectionObserver(function(){}, {})

// const d3 = document.querySelector(".d--3");
// function fn1(entries){
// entries.forEach((el) => {
// console.log(entries);
// });
// }
// const options = {
// threshold: 0.2// Якщо ми бачимо елемент на 20% то виконужмо функцію fn1 в даному випадку
// }
// const a1 = new IntersectionObserver(fn1, options);
// a1.observe(d3)

const d5 = document.querySelector(".d--3");
const header = document.querySelector("header");

const headerObserver = new IntersectionObserver(
  function (e) {
    e.forEach((el) => {
      if (el.isIntersecting) {
        header.classList.add("k2");
      } else {
        header.classList.remove("k2");
      }
    });
    const a1 = e[0];
    a1.isIntersecting
      ? header.classList.add("k2")
      : header.classList.remove("k2");
  },
  {
    threshold: 0.5,
  }
);

headerObserver.observe(d5);

const block = document.querySelectorAll(".block");

function fn2(entries, obs) {
  const sec = entries[0];

  if (sec.isIntersecting) {
    sec.target.classList.add("l8");
  }
  console.log(entries);
  obs.unobserve(sec.target);
}

const sectionObserver = new IntersectionObserver(fn2, { threshold: 0.5 });

block.forEach((el) => {
  sectionObserver.observe(el);
});
