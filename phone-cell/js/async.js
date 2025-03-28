"use strict";
//async

// const cards = document.querySelector(".asyncMethod");

// async function fn1(){
	// try {
		// const res = await fetch('https://jsonplaceholder.typicode.com/photos');
		// if(!res.ok){
			// throw new Error(`Помилка HTTP: ${res.status}`);
		// }
		// const date = await res.json();
		// console.log(date);
		//2 спосіб
		// date.slice(0, 10).forEach(({id, title, url}) => {
			// cards.insertAdjacentHTML("beforeend",
			// `
			// <div>
				// <h1>Hello ${id} ${title}</h1>
			    // <img src="${url}" alt=""/>
			// </div>
			// `
			// );
		// });
		// 1 cпосіб
		// for (let i = 0; i < 10; i++){
		// const {id, url} = date[i];
		// cards.insertAdjacentHTML("beforeend", 
		// `
		// <div>
			// <p>${id}}</p>
			// <img src="${url}" alt="">
		// </div>
 		// `);
		// }
		
	// } catch (error) {
		// console.error(`Помилка, ${error.message}`);
	// }
// }

// fn1();
//155
// const cards = document.querySelector(".asyncMethod");
// async function fetchDate(url){
	// const response = await fetch(url);
	// if(!response.ok) {
		// throw new Error(`Error ${response.status}`);
	// }
	// return response.json();
// }

// async function renderCards(data){
	// try{
		// data.slice(0, 25).forEach(({id, url, title}) => {
			// cards.insertAdjacentHTML("beforeend",
			// `
			// <div>
				// <p>${id} ${title}</p>
				// <img src="${url}" alt="">
			// </div>			
			// `
			// );
		// });
	// }catch(error){
		// console.error(`Помилка ${error}`);
	// }
// }

// async function fetchAndRender(){
	// const url = "https:/ /jsonplaceholder.typicode.com/photos";
	// try{
		// const responseDate = await fetchDate(url);
		// await renderCards(responseDate);
	// }catch(err){
		// console.error(err);
	// }
// }
// fetchAndRender();


// async function fn1(){
	// try{
	// const response = await fetch("https://restcountries.com/v3.1/all");
	// console.log(response);
	// if(!response.ok){
		// throw new Error(`False get ${response.status}`);
	// }
	// const res2 = await response.json();
	// console.log(res2);
	
	// res2.forEach(({flags: {png}, name: {official}, capital, region}) => {
		// cards.insertAdjacentHTML("beforeend", 
		// `
			// <div class="flag">
				// <p>Країна: ${official}</p>
				// <p>Cтолиця:${capital}</p>
				// <p>Регіон: ${region} </p>
				// <img src="${png}" alt="">
			// </div>
		// `
		// );
	// });
	
	// }catch(err){
		// console.error(`${err}`);
	// }
// }
	// fn1();
	
// const url = "https://x-colors.yurace.pro/api/random";
// const body = document.querySelector("body");
// const btn = document.querySelector(".btr");

// async function randomColor(){
	// try{
		// const res = await fetch(url);
		// if(!res.ok){throw new Error(res.status);}
		
		// const colorDate = await res.json();
		// console.log(colorDate);
		// body.style.background = colorDate.hsl
	// }catch(err){
		// console.error(err);
	// }
// }
	
	// btn.addEventListener("click", randomColor);
	// Запис через проміс
	
	// function randomColor(){
		// fetch(url)
		// .then(res => {
			// if(!res.ok){throw new Error(res.status);}
			// return res.json();
		// }).then((colorDate) => {
			// console.log(colorDate);
			// body.style.background = colorDate.rgb;
		// }).catch((err) => {
			// console.error(err);
		// }).finally(() => {
			// console.log("All Done");
		// });
	// }
	// btn.addEventListener("click", randomColor);
	
	
	// 157 пропрацювання питання з Promise;
	
	// let myPromise = new Promise((resolve, reject) => {
		// let random = Math.trunc(Math.random() *20);
		// if(random > 8) resolve (`The number is more than 8 ${random}`);
		// else reject(`The number is less than 8 ${random}`);
	// });
	
	// myPromise.then((res) => console.log(`Congratulation: ${res}`))
	// .catch((err) => console.error(`Fale to get number: ${err}`));
	
	// const myPromise1 = new Promise((resolve, rej) => {
		// rej("Hello");
	// });
	
	// console.log(myPromise1);
	
	
	// const contactForm = document.querySelector(".contact");
	// const modal = document.querySelector(".modal");
	// const closeButton = document.querySelector(".close");
	// const url = "https://jsonplaceholder.typicode.com/posts";
	// contactForm.addEventListener("submit", async (event) => {
		// event.preventDefault();
		
		// const formData = new FormData(contactForm);
		// const data = Object.formEntries(formData.entries());
		// try{
			// const res = await fetch(url, {
				// method:"POST",
				// headers: {
					// "Content-type":"application/json"
				// },
				// body: JSON.stringify(data)
			// });
			// if(!res.ok){throw new Error(`Error for throwing this ${res.status}`);}
			// const result = await res.json();
			// console.log(`This massage went succesfuly`);
		
			// showModal();
		// }catch(err){
			// console.error(`False to send it, ${err}`);
		// }
	// });
	//modal
	// function showModal(){
		// modal.style.display = "block";
	// }
	
	// closeButton.addEventListener("click", {
		// modal.style.display = "none";
	// });
	
	// window.addEventListener("click", (e) => {
		// if(e.target === modal){
		// modal.style.display = "none";
		// }	
	// });
	
	const btn = document.querySelector(".btn");
	const card = document.querySelector(".catsBlock");
	
	function fetchData(){
		fetch("https://api.thecatapi.com/v1/images/search?limit=10")
		.then((res) => {
			if(!res.ok)throw new Error(`Miss ${res.status}`);
		return res.json();})
		.then((data) => {
			data.forEach(({url}) => {
			card.insertAdjacentHTML("beforeend", 
				`
				<div class="cats">
					<img src="${url}" alt="">
				</div>
				`
				);
			});
			console.log(data);
		});
	}

	
	btn.addEventListener("click", fetchData);
	
	
	
	
	
	
	
	
	
	
	
	