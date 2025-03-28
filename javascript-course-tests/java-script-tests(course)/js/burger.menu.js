"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function(){
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

//два методи як можна звернутися до посилання.
// document.querySelectorAll(".nav-link").forEach((el) => {
	// el.addEventListener("click", () => {
		// hamburger.classList.remove("active");
		// navMenu.classList.remove("active");
	// })
// });
	
navMenu.addEventListener("click", function(event){
	if(event.target.classList.contains("nav-link")){
			hamburger.classList.remove("active");
			navMenu.classList.remove("active");			
		}
	});
	//За допомогою делегування
document.querySelector(".nav-menu").addEventListener("click", function(event){
	event.preventDefault();
	if(event.target.classList.contains("nav-link")){
		document.querySelector(event.target.getAttribute("href")).scrollIntoView({behavior: "smooth"});
	}
})	
	//forOff
// const navLinksHeader = document.querySelectorAll(".nav-link");
	// for(let link of navLinksHeader){
		// link.addEventListener("click", function(e){
	 		// e.preventDefault();
			// const href = this.getAttribute("href");
			// document.querySelector(href).scrollIntoView({
				// behavior: "smooth"
			// });
		// });
	// }
	//forEach
// navLinksHeader.forEach((el) => {
	// el.addEventListener("click", function(e){
		// e.preventDefault();
		// const href = this.getAttribute("href");
		// document.querySelector(href).scrollIntoView({behavior: "smooth"});
	// });
// });

document.getElementById("top").addEventListener("click", function(e){
	e.preventDefault();
	document.querySelector(".header").scrollIntoView({behavior: "smooth"});
})
	
// 130 Відео пропрацьовуємо з логікою блюру	
const imgAll =  document.querySelectorAll("img[data-img]");
	
const imgHandler = function (entries, obs){
	const entry = entries[0];
	const img = entry.target;
	
	if(entry.isIntersecting){
		img.src = img.dataset.img;
		img.addEventListener("load", function () {
			img.classList.remove("blur");
		});
	}else{
		img.classList.add("blur");
	}
	// obs.unobserve(entry.target);
};
	
	const imgObserver = new IntersectionObserver(imgHandler, {
		root: null,
		threshold: 0.5
	});
	
	imgAll.forEach((el) => imgObserver.observe(el));
	
	
// 133 Відображення картинок та пагінація

const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = [...slider.querySelectorAll("img")];
const slideCount = slides.length;

let slideIndex = 0; // Індекс теперішнього слайду

// Функція для оновлення слайдера 	
	const updateSlider = () => {
		//перебираємо всі слайди і відображаємо поточні.
		slides.forEach((slide, index) => {
			slide.style.display = index === slideIndex ? "block" : "none"
		});
	};
	
	//функція для показу наступного слайду.
	const showNextSlide = () => {
		slideIndex = (slideIndex + 1) % slideCount;
		updateSliderDots();//обновлюємо слайдер з крапками
	};
	//функція для показу попереднього слайду.
	const showPreviousSlide = () => {
		slideIndex = (slideIndex - 1) % slideCount;
		if(slideIndex < 0){
			slideIndex = slideCount - 1;	
		};	
	updateSliderDots();//обновлюємо слайдер з крапками
	};	
	
	updateSlider();
	// Додаємо обробку подій для кнопок
	nextButton.addEventListener("click", showNextSlide);
	prevButton.addEventListener("click", showPreviousSlide);
	
	// Обробка подій нажимання кнопок для слайду
	
	document.addEventListener("keydown", (event) => {
		if(event.key === "ArrowLeft"){
			showPreviousSlide();
		}else if (event.key === "ArrowRight"){
			showNextSlide();
		}
	});
	
	//Створити точки для слайдеру
	const sliderDots = document.querySelector(".slider-dots");
	
	slides.forEach(() => {
		const dot = document.createElement("span");
		dot.classList.add("slider-dot");
		sliderDots.append(dot);
	});
	
	const dots = [...sliderDots.querySelectorAll(".slider-dot")];
	// якщо крапка рівна 0 то відображаємо склас актів для крапки
	dots[0].classList.add("active");
	//Функція для оновлення слайдеру з урахуванням точок
	
	const updateSliderDots = () => {
		updateSlider(); // Оновлюємо слайдер
		
		// підсвічуваня поточної точки.
		dots.forEach((dot, index) => {
		dot.classList.toggle("active", index === slideIndex);
		});
	}
	
	// Добавимо обробку для точок слайдеру.
	dots.forEach((dot, index) => {
		dot.addEventListener("click", () => {
			slideIndex = index;
			updateSliderDots();
		});
	});
	
	// Рейтинг 
	
	const starsOld = document.querySelectorAll(".starsBlock i");
	const textRate = document.querySelector(".rateText");

	starsOld.forEach((item, index) => {
		item.addEventListener("click",() => {
			textRate.textContent = index + 1;
			starsOld.forEach((item,index2) => {
				index >= index2 
				? item.classList.add("rateActive") 
				: item.classList.remove("rateActive") 
			});
		});
	});
	
	
	
	// Scale discount
	
const element = {
	sale: document.querySelector(".sale"),
	date: document.querySelector(".date"),
	spans: document.querySelectorAll("span"),
	paragraphs: document.querySelectorAll("p"),
}

document.querySelector(".close").addEventListener("click", () => {
	element.sale.classList.toggle("hidden");
});

const endDate = new Date();
endDate.setHours(endDate.getHours() + 0);
endDate.setMinutes(endDate.getMinutes() + 0);
endDate.setSeconds(endDate.getSeconds() + 10);

const updateCountDown = () => {
	const now = new Date();
	const distance = endDate - now;
	const {hours, minutes, seconds} = {
		hours: String(Math.floor(distance / (1000 * 60 * 60)))
		.padStart(2, "0"),
		minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
		.padStart(2, "0"),
		seconds: String(Math.floor((distance % (1000 * 60)) / 1000))
		.padStart(2, "0")
	};
element.date.textContent = `${hours}г ${minutes}хв ${seconds}сек`; 
	if(distance < 0){
		clearInterval(intervalVaild);
		element.sale.classList.toggle("hidden");
		element.spans.forEach((el) => el.classList.toggle("hidden"));
		element.paragraphs.forEach((item) => item.style.textDecoration = "none");
	}
};
updateCountDown();

const intervalVaild = setInterval(updateCountDown, 1000);


	// Перемикання на темну сторону.
// const btn = document.querySelector(".black-theme");
// const body = document.body;
// btn.addEventListener("click", () => {
	// const body = document.body;
	// body.classList.toggle("dark-theme");
	// btn.textContent = "Black theme";
	
	// });
// localStorage.clear();
const btn = document.querySelector(".black-theme");
const body = document.body;
const save = localStorage.getItem("theme");
if(save) body.classList.add(save);

btn.addEventListener("click", () => {
	const a1 = body.classList.contains("dark-theme") ? "black" : "dark-theme";
	const textTheme = body.classList.toggle("dark-theme");
	console.log(textTheme);
	if(textTheme === false){
		btn.textContent = "White mode";
	}else{
		btn.textContent = "Black mode";
	}
	localStorage.setItem("theme", a1)
});


// Local storage

// localStorage.setItem("username" , "costa");
// const myName = localStorage.getItem("username");
// console.log(myName);
 
// localStorage.removeItem("username");
// localStorage.clear();
// const user = {
	// name: "Costa",
	// email: "costa223.gmail.com",
	// color: "red", 
// }
// localStorage.setItem("user", JSON.stringify(user));
// console.log(localStorage.getItem("user")); 
// let saveUser = JSON.parse(localStorage.getItem("user"));
// console.log(saveUser );
	
	
// Коментарі  141

const stars = document.querySelectorAll(".ratingF i");
const spanNumberRating = document.querySelector(".spanNumberRating");
const btnCommentAdd = document.querySelector(".add-comment");
const form = document.querySelector(".form");
const btnCloseForm = document.querySelector(".closeC");
const btnSendForm = document.querySelector(".sendC");
const formInputName = document.querySelector(".form__input-name");
const formInputLastName = document.querySelector(".form__input-surname");
const wrapper = document.querySelector(".wrapper6");
const textArea = document.querySelector(".form__textarea");
const commentUser = document.querySelector(".block__comment-user");

// console.log(btnCloseForm);

stars.forEach((item, index) => {
	item.addEventListener("click", () => {
		spanNumberRating.textContent = index + 1;
		stars.forEach((item, index2) => {
			index >= index2 ? item.classList.add("active") : item.classList.remove("active");
		});
	});
});
function addCommentHandler(){
	form.classList.toggle("hidden");
	btnCommentAdd.classList.toggle("hidden");
}
btnCommentAdd.addEventListener("click", () => {
	addCommentHandler();
});
btnCloseForm.addEventListener("click", () => {
	addCommentHandler();
});		
btnSendForm.addEventListener("click", () => {
	if(formInputName.value.length >= 3 && formInputLastName.value.length >= 4){
		event.preventDefault();
		const ratingComment = +spanNumberRating.textContent;
		const arrStrt = [];
		for(let i = 0; i < ratingComment; i++){
			const a1 = document.createElement("span");
			a1.textContent = `&#9733;`;
			arrStrt.push(a1);
		}

		htmlContainer(arrStrt);
		textArea.value = formInputName.value = formInputLastName.value = "";
		addCommentHandler();
		showHiddenComment();
		
	} else{
		alert("Будь ласка введіть данні коректно");
	}
});	
	
function htmlContainer(arr){
	const date = new Date().toLocaleString("default", {
	day: "2-digit",
	month: "long",
	year: "numeric",
	hour: "2-digit",
	minute: "2-digit"
	});
	
	wrapper.insertAdjacentHTML("afterbegin", 
`
	<div class="block6">
	  <h1 class="block__h1">${formInputName.value} ${formInputLastName.value}</h1>
	  
	  <p class="block__p">Оцінка: ${spanNumberRating.textContent}${arr.map(
	  (el) => `
	  <span class="spanstar">${el.textContent}</span>`
	  ).join("")} </p>
	  
	  <p class="block__comment">Коментар: ${textArea.value === "" ? "✘" : " &#x2713;" }</p>
	  
	  <p class="block__comment-user">${textArea.value === "" ? "Нема коментарів" : textArea.value} </p>
	  <div class="block__date">${date}</div>
	</div>
`);
}

	
	// функція яка скриває коментарів
	
	let buttonsAdded = false;
	let hideState = false;
	
function showHiddenComment(){
	const div = document.querySelectorAll(".block6"); 
	const arrayDiv = [...div];
	console.log(arrayDiv);
if(div.length > 2 && !buttonsAdded){		
wrapper.insertAdjacentHTML("beforeend",
			`
			<div class="buttons-block">
			<button class="btn1">Показати ще</button>
			<button class="btn2">Скрити.</button>
			</div>
			`
			);
			buttonsAdded = true;
			
			const showMoreBtn = document.querySelector(".btn1");
			showMoreBtn.addEventListener("click", function(){
			arrayDiv.forEach((el) => {
				el.classList.remove("hidden");
			});
			showMoreBtn.style.display = "none";
			hideState = false;
			
			});

			const hideBtn = document.querySelector(".btn2");
			hideBtn.addEventListener("click", function(){
				if(!hideState){
					arrayDiv.slice(1).forEach((el) => {
						el.classList.add("hidden");
					});
					hideState = true;
					showMoreBtn.style.display = "inline-block";
				}
			});
		}
	 
if(div.length > 2){
	arrayDiv.forEach((el, index) => {
		if(index > 1){
			el.classList.add("hidden");
		}
	});
}
}
	
	//OOП
	
	// function Test1(name, age, year){
		// this.name = name;
		// this.age = age;
		// this.year = year;

	// }
	// const person1 = new Test1("Costa",29,1994);
	// const person2 = new Test1("Bob",29,1994);
	// console.log(person1);
	// console.log(person2 );
	// Test1.prototype.great = function(){
		// console.log(`Hello ${this.name}`);
	// };
	// person1.great();
	// person2.great();
	
	// function Counter(){
		// let count = 0;
		// this.incriment = function(){
			// count++;
		// };
		// this.decrement = function(){
			// count--;
		// };
		// this.getCount = function(){
			// return count;
		// };
	// }
	
	// let a1 = new Counter();
	// a1.incriment();
	// a1.incriment();
	// a1.incriment();
	// a1.decrement();
	// console.log(a1.getCount());
	
	// function CreatePerson (name, age, surName){
		// let objA =  {
			// name,
			// age,
			// surName,
		// };
		
		// return {
			// getName: function (){
				// return objA.name;
			// },
			// getAge: function(){
				// return objA.age*2;
			// },
			// getSurName: function(){
				// return objA.surName + " Hello";
			// },
			// setAge: function(n){
				// objA.age = n;
			// },
		// };
	// }
	
	// let per1 = CreatePerson("Costa", 30, "Ebigel");
	// console.log(per1);
	// console.log(per1.getAge());
	// console.log(per1.getName());
	// console.log(per1.getSurName());
	
	// per1.setAge(45);
	// console.log(per1.getAge());
	
	
	// Поліморфізм
	// hasOwnProperty
// function Fn1(){}
// Fn1.prototype.myMethod = function(){
	// console.log("Function fn1");
// };
// function Fn2(){}	
// Fn2.prototype = Object.create(Fn1.prototype);
// Fn2.prototype.constructor = Fn2;

// Fn2.prototype.myMethod = function(){
	// console.log("Function fn2");
// };

// function Fn3(){}
// Fn3.prototype = Object.create(Fn1.prototype);
// Fn3.prototype.constructor = Fn3;

// Fn3.prototype.myMethod = function(){
	// console.log("Function fn3");
// };

// let fn1 = new Fn1();
// let fn2 = new Fn2();
// let fn3 = new Fn3();

// fn1.myMethod();
// fn2.myMethod();
// fn3.myMethod();

// 147 class

// class Person {
	// constructor(name, age){
	// this.name = name;
	// this.age = age;
	// }
	// sayHello(){
		// console.log(`Hello ${this.name} your age is ${this.age}?`)
	// }
// }

// const person1 = new Person("Costa", 45);
// console.log(person1);
// console.log(person1.name);
// console.log(person1.age);
// person1.sayHello();

//148 get set 

// class Person{
	// constructor(name, age, work, result){
		// this._name = name;
		// this._age = age;
		// this._work = work;
		// this._result = result;
	// }
	
	// get nameDADADA(){
		// return this._name;
	// }
	// get nameWork(){
		// return this._work;
	// }
	// set age1(newAge){
		// if(newAge > 0 && newAge < 90){
			// this._age = newAge;
		// }else {
			// console.log("Age is fail");
		// }
	// }
	// set nameWorking(newWork){
		// if(newWork.length > 3){
			// console.log("More than 3")
			// this._work = newWork;
		// }else {console.log("lower than 3");}
	// }
	// set resultNew(ourResult){
		// if(ourResult){
			// this._result = ourResult;
			// console.log("сума ваших років не більше 30");
		// }else {
			// console.log(" ");
		// }
	// }
// }

// const person = new Person("Jhob", 15, "JavaArray", 10);
// console.log(person.nameDADADA);
// person.age1 = 60;
// person.nameWorking = "React Native";
// person.resultNew = 14;
// console.log(person.nameWork);
// console.log(person.nameWorking);
// console.log(person._work);
// console.log(person._age);
// console.log(person._result);
// console.log(person.resultNew);

//Приватне поле 149
// class  Counter{
	// #count;
	// constructor (a1 = 0){
		// this .#count = a1;
	// }
	// inscrement() {
		// this.#count++;
	// }
	// decrement(){
		// this.#count--;
	// }
	// getCount(){
		// return this.#count;
	// }
// }
 
// const counter = new Counter();

// counter.inscrement();
// counter.inscrement();
// counter.inscrement();
// counter.inscrement();
// console.log(counter.getCount());



// class User{
	// #name;
	// #age;
	// constructor(name, age) {
		// this.#name = name;
		// this.#age = age;
	// }
	// getName(){
		// return this.#name;
	// }
	// getAge(){
		// return this.#age;
	// }
	// setName(n){
		// this.#name = n;
	// }
	// setAge(n){
		// this.#age = n;
	// }
// }
// const user = new User("Costa", 25);

// console.log(`Імя ${user.getName()},Роки ${user.getAge()}`);

// user.setName("Bob");
// user.setAge(30);
// console.log(`Імя ${user.getName()},Роки ${user.getAge()}`);



//Extend

// class User1{
	// constructor(name){
		// this.name = name;
	// }
	
	// speak(){
		// console.log(`${this.name} Добрий день`);
	// }
// }

// const a1 = new User1("Anita", 20);
// a1.speak();
// class TestClass extends User1 {
	// constructor(name, age){
		// super(name);
		// this.age = age;
	// }
	// hide(){
		// console.log(`${this.name} Hello ${this.age}`);
	// }
// }

// const r1 = new TestClass("Costa", 10);
// r1.speak();
// r1.hide(); 



// function User2(name){
	// this.name = name;
// }
// User2.prototype.hide = function (){
	// console.log(`${this.name} Хелоу`);
// };
// const resulic = new User2("Magaliga");
// resulic.hide();
// console.log(User2.prototype.hide);
// function TestClass2(name, age){
	// User2.call(this, name);
	// this.age = age;
// }
// TestClass2.prototype = Object.create(User2.prototype);
// TestClass2.prototype.constructor = TestClass2;
// TestClass2.prototype.speak = function (){
	// console.log(`${this.name} Dratute`);
// };
// const r2 = new TestClass2("Bob", 30);
// console.log('----------------- ');
// r2.speak();
// r2.hide();


// class UserTest{
	// speak(){
		// console.log(`Hello`);
	// }
// }

// class MyTest extends UserTest{
	// speak(){
		// console.log(`Hello my friend`);
	// }
// }

// const a1 = new MyTest();
// a1.speak();























 
 
 
 
 
 
 