	"use strict";
	//Можна спробувати обєднати масив через Reduce
	//Можна через .split(",") передати параметри в масив.
	//padStart(1, playerId)
	
	// Масив з ходами де гравець 1 записується в базу через літеру "а" а інший через "b"
	const playerMoves = ['a3','b2','a4','b6','a6','b1'];
	// З масиву playerMoves робить витяг ходу кожного гравця.
	const player1 = playerMoves.filter((move) => move.includes("a"));
    const player2 = playerMoves.filter((move) => move.includes("b"));
	// Відкидає всі значення з отриманого player1 і робить з строки в число, та додає всі ходи в одну змінну
	const numbs = player1.map(item => parseInt(item.replace(/\D/g, ""), 10));
	const allThrows = numbs.reduce((acc, num) => acc + num, 0);
	
	console.log("Ходи гравців: " + playerMoves);
	console.log("Перший гравець: " + player1);
	console.log("Другий гравець: " + player2);
	console.log(`Числа першого гравця ${numbs}`);
	console.log(`Кількість ходів:`, allThrows); 
	
	console.log("-------------------------------------");
	const gameMoves = [
	[1,2,3],
	[4,2,3],
	];
	console.log(gameMoves[1][2]);
	console.log("-------------------------------------");
	// Контейнери та кнопка

	const container = document.getElementById("container");
	const button1 = document.getElementById("button1");
	const button2 = document.getElementById("button2");
	const message = document.getElementById("message");
	const score1Display = document.getElementById("score1");
	const score2Display = document.getElementById("score2");

	const maxBlocks = 15;
	let totalScore1 = 0; // Загальна сума для Гравця 1
	let totalScore2 = 0; // Загальна сума для Гравця 2

	// Генеруємо квадрати
	for (let i = 1; i <= maxBlocks; i++) {
	  const square = document.createElement("div");
	  square.classList.add("square");
	  square.textContent = i; // Номер блока
	  square.dataset.number = i; // Зберігаємо номер блоку
	  container.appendChild(square);
	}

	// Функція для підсвічування блоку, що відповідає сумі
	function highlightTotalScore(player, newScore) {
	  // Знімаємо підсвічування з усіх квадратів для відповідного гравця
	  document.querySelectorAll(`.square.player${player}`).forEach(square => {
		square.classList.remove(`player${player}`);
	  });

	  // Підсвічуємо лише блок, який відповідає новій сумі
	  const targetSquare = document.querySelector(`.square[data-number='${newScore}']`);
	  console.log(targetSquare);
	  if (targetSquare) {
		targetSquare.classList.add(`player${player}`);

	  }
	  // Якщо два блоки сходятьсяв один
	  if (totalScore1 === totalScore2) {
		console.log('Hello');
		targetSquare.classList.add("balance");
	  }
	}

	const audioTrue = new Audio("win.mp3");
	const audioFalse = new Audio("fail.mp3");

	// Функція оновлення суми гравця
	function updateScore(player, randomNumber) {
	  if (player === 1) {
		totalScore1 += randomNumber;
		score1Display.textContent = totalScore1; // Оновлюємо відображення суми Гравця 1
		highlightTotalScore(1, totalScore1);
		if (totalScore1 >= maxBlocks) {
		  message.textContent = `Гравець 1 виграв!`;
		  audioTrue.play();
		  endGame();
		}
	  } else {
		totalScore2 += randomNumber;
		score2Display.textContent = totalScore2; // Оновлюємо відображення суми Гравця 2
		highlightTotalScore(2, totalScore2);
		if (totalScore2 >= maxBlocks) {
		  message.textContent = `Гравець 2 виграв!`;
		  audioFalse.play();
		  endGame();
		}
	  }
	}

	// Завершення гри
	function endGame() {
	  button1.disabled = true;
	  button2.disabled = true;
	  setTimeout(() => location.reload(), 3000); // Оновлення сторінки через 5 секунд
	}

	// Дії при натисканні кнопок
	button1.addEventListener("click", () => {
	  const randomNumber = Math.floor(Math.random() * 6) + 1; // Випадкове число від 1 до 6
	  updateScore(1, randomNumber);

	  // Ховаємо кнопку Гравця 1 та показуємо кнопку Гравця 2
	  button1.style.display = "none";
	  button2.style.display = "inline-block";
	});

	button2.addEventListener("click", () => {
	  const randomNumber = Math.floor(Math.random() * 6) + 1; // Випадкове число від 1 до 6
	  updateScore(2, randomNumber);

	  // Ховаємо кнопку Гравця 2 та показуємо кнопку Гравця 1
	  button2.style.display = "none";
	  button1.style.display = "inline-block";
	});

	

 	// function difNums(){
		// const arrDif = [];
		// let maxScore = 15;
		// const randMassage = setInterval( () => {
		// const randomNum = Math.floor(Math.random()* 6) + 1;
		// const message = `Рандомне число: ${randomNum}
		// ____________________________________________`;
		// arrDif.push(randomNum);

		// if(arrDif.length >= 0){
			// const result = arrDif.reduce((acc, val) => acc + val, 0);
			// console.log(`Наш масив: [${arrDif}]`);
			// console.log(`Загальна сума: ${result}`);
			// if(result >= maxScore){
				// clearInterval(randMassage);
				// console.log("Генерацію завершено.");
			// }
			
		// }	
		// console.log(message)}, 2000);	
	// }
		// difNums();