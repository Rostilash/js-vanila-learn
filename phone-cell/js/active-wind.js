"use strict";
// Модельне вікно з оновленям фотографії.
// const btn = document.querySelector(".btn");
// const modelWindow = document.querySelector(".modal");
// const modalClose = document.querySelectorAll(".modal__close");
// const randomModel = document.querySelector(".modal__btn-random");
// const img = document.querySelector(".img");

// btn.addEventListener("click", () => {
	// modelWindow.classList.remove("hidden");
	// btn.style.display = "none";
// });
// function CloseAll(){
	// modelWindow.classList.add("hidden");
	// btn.style.display = "block";
// }
// modalClose.forEach((val) => {
	 // val.addEventListener("click",() => {
		// CloseAll();
	 // });
// })
// function randomNumber(){
	// const num = Math.trunc(Math.random() * (700 - 650 + 1)) + 650;
		// console.log(num);
	// img.setAttribute('src', `https://picsum.photos/700/${num}`);
// }
// randomModel.addEventListener("click", randomNumber );



//Масив для нашого сайту
const showButton = document.querySelector(".show");
const btnCloseButton = document.querySelector(".close");
const wrapper = document.querySelector(".wrapper");
const cardsContainer = document.querySelector(".cards");
const input = document.getElementById("searchInput");

const phones = [
{
	model: "iPhone 13",
	price: 1000,
	description: "Apple iPhone 13 - покоління смартфонів від компанії Apple 2021 року. Тонкий корпус з повністю переробленого алюмінію, доповнена унікальними кольорами, яким зрадіє власник і доповнять його стиль.",
	discount: 50,
	imagePath: "img/iphone_13.jpg",
	reviews: 132
},
{
	model: "Samsung Galaxy S21",
	price: 1200,
	description: "Samsung Galaxy S21 - новий флагман компанії, представлений на початку 2021 року. Дизайн пристрою дещо змінився в порівнянні з попередником, тому легко впізнається з першого погляду",
	discount: 80,
	imagePath: "img/Samsung_Galaxy_S21.jpg",
	reviews: 2372
},
{
	model: "Google Pixel 6",
	price: 800,
	description: "Google Pixel 6 Pro – довгоочікувана флагманська новинка у лінійці смартфонів компанії за 2021 рік. Він отримав неймовірно ефектний дизайн,",
	discount: 50,
	imagePath: "img/Google_Pixel_6.jpg",
	reviews: 887
},
{
	model: "OnePlus 9 Pro",
	price: 1100,
	description: "Apple iPhone 13 - покоління смартфонів від компанії Apple 2021 року. Тонкий корпус з повністю переробленого алюмінію, доповнена унікальними кольорами, яким зрадіє власник і доповнять його стиль.",
	discount: 90,
	imagePath: "img/OnePlus_9_Pro.jpg",
	reviews: 1421,
},
{
	model: "Xiaomi Mi 11",
	price: 950,
	description: "Надміцне, ультратонке та абсолютно прозоре захисне скло забезпечить збереження екрану вашого планшета. ",
	discount: 70,
	imagePath: "img/Xiaomi_Mi_11.jpg",
	reviews: 14521
},
{	
	model: "Huawei P50",
	price: 1050,
	description: "Qualcomm Snapdragon 888, ОС: EMUI 12, аккумулятор: 4000 мАч (несъемная), камера: 40 (f/1.8, широкоугольная) Мп",
	discount: 85,
	imagePath: "img/Huawei_P50.jpg",
	reviews: 423
},
{	
	model: "Sony Xperia 5 III",
	price: 1250,
	description: "Экран:6.1 2520х1080 (21:9), 120 Гц, 449 ppi, Память:256 ГБ, ОЗУ 8 ГБ, Процессор:8 ядер(а), 2.84 ГГц, Камера:3 модуля, Видео:fullHD 60 к/с, ultraHD 4K.",
	discount: 95,
	imagePath: "img/Sony_Xperia_5_III.jpg",
	reviews: 14,
},	
{	
	model: "LG VELVET 5G",
	price: 900,
	description: "	Быстрая зарядка 25 Вт. Быстрая беспроводная зарядка 9 Вт. Quick Charge 4.0+. USB Power Delivery 3.0",
	discount: 60,
	imagePath: "img/LG_VELVET_5G.jpg",
	reviews: 3877,
},
{	
	model: "Samsung Galaxy S22 Ultra",
	price: 2800,
	description: "Gorilla Glass Victus+. Гироскоп, Барометр, Датчик освещения, Датчик приближения, Сканер отпечатка пальцев, Ввыдерживает погружение в воду на глубину до 1.5 м в течение 30 минут.",
	discount: 78,
	imagePath: "img/Samsung_Galaxy_S22_Ultra.jpg",
	reviews: 1999,
},
{	
	model: "Asus ROG Phone 5",
	price: 1300,
	description: "Экран 6.78 (2400 х 1080) 144 Hz, AMOLED, Corning Gorilla Glass Victus / Процессор 8 Ядер, Qualcomm SM8350 Snapdragon 888 5G (5 nm) (1х2.84 ГГц, 3х 2.42 ГГц, 4х 1.8 ГГц) Adreno 660.",
	discount: 75,
	imagePath: "img/Asus_ROG_Phone_5.jpg",
	reviews: 881,
},
{	
	model: "iPhone 15",
	price: 3250,
	description: "Міцний та легкий дизайн з новими контурними краями, нова кнопка дії, потужні оновлення камери та A17 Pro для продуктивності нового рівня та мобільних ігор.",
	discount: 99,
	imagePath: "img/iPhone_15.jpg",
	reviews: 14555,
},
{	
	model: "Nokia 9 PureView",
	price: 850,
	description: "Екран (5.99, P-OLED, 2880x1440) / Qualcomm Snapdragon 845 (2.8 ГГц + 1.8 ГГц) / п'ятірна основна камера: 5 x 12 Мп, фронтальна камера: 20 Мп / RAM 6 ГБ / 128 ГБ вбудованої пам'яті .",
	discount: 55,
	imagePath: "img/Nokia_9_PureView.jpg",
	reviews: 6555,
},
{	
	model: "iPhone 10",
	price: 700,
	description: "Apple iPhone 13 - покоління смартфонів від компанії Apple 2021 року. Тонкий корпус з повністю переробленого алюмінію, доповнена унікальними кольорами, яким зрадіє власник і доповнять його стиль.",
	discount: 40,
	imagePath: "img/iPhone_10.jpg",
	reviews: 1423,
},
{	
	model: "iPhone 12",
	price: 900,
	description: "Екран 6,1 дюйма, 90,2 см2 (1170 x 2532 пікселів, співвідношення 19,5:9), Super Retina XDR OLED (стійке до подряпин керамічне скло); процесор Apple A14 Bionic (5 нм).",
	discount: 85,
	imagePath: "img/iPhone_12.jpg",
	reviews: 3241,
},
{	
	model: "iPhone 14",
	price: "1100",
	description: "Екран (6.1, OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / подвійна основна камера: 12 Мп 12 Мп.",
	discount: 80,
	imagePath: "img/iPhone_14.jpg",
	reviews: 500,
},
];

class AddCard {
	addCard(index){
		const {imagePath,model, description, reviews, price, discount} = phones[index];
		return `
				<div class="card"> 
			<div class="card__images">
				<img src="${imagePath}" alt=""/>
			</div>
			<div class="card__hr"></div>
			<p class="card__tittle">${model}</p>
			<p class="card__descr">${description}</p>
			<div class="card__rating">
				<div class="rating__span">
					<span>${"&#9733".repeat(5)}</span>

				</div>
				<div class="card__comment">(${reviews})</div>
			</div>
			<div class="card__m">
				<div class="card__m-left">
					<div class="card__m-text">Price:</div>
					<div class="card__m-money">${price}$</div>
				</div>
				<div class="card__m-left">
					<div class="card__m-text">With descount:</div>
					<div class="card__m-money"><mark>${price - discount}$</mark><span>${discount}$</span></div>
				</div>
			</div>
			<img class="img-svg" src="img/0_2.jpg" alt=""/>
			<img class="img-b5" src="img/b5.jpg" alt=""/>
		</div>
		`;
		
	}
}

const a1 = new AddCard();

const btnHandler = () => {
	showButton.classList.toggle("dn");
	btnCloseButton.classList.toggle("dn");
}

showButton.addEventListener("click", () => {
    btnHandler();
	cardsContainer.innerHTML = "";
	phones.forEach((phone, index) => {
		cardsContainer.insertAdjacentHTML("beforeend", a1.addCard(index));
	});
});

btnCloseButton.addEventListener("click", () => {
	btnHandler();
	cardsContainer.innerHTML = "";	
});


// Сортування

input.addEventListener("input", function(e){
	const inputValue = e.target.value.trim();

	const filterPhones = phones.filter(phone => phone.model.toLowerCase().startsWith(inputValue.toLowerCase()));
	const filterPrice = phones.filter((phone) => phone.price.toString().startsWith(inputValue));
	console.log(filterPrice);
	cardsContainer.innerHTML = "";
	filterPhones.forEach((phone) => {
		const index = phones.indexOf(phone);
		cardsContainer.insertAdjacentHTML("beforeend", a1.addCard(index));
	});	
	filterPrice.forEach((phone) => {
		const index = phones.indexOf(phone);
		cardsContainer.insertAdjacentHTML("beforeend", a1.addCard(index));
	});	
});























