'use strick';

let buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
	button.addEventListener('click', function(event) {
		handleClick(event);
	})
});

/**
* Функция обрабатывает клик по кнопке в карточке товара
* и попеременно вызывает функцию для показа или скрытия текста о товаре.
* @param {MouseEvent} clickedButtonEvent.
*/
function handleClick(clickedButtonEvent) {
	let cardNode = clickedButtonEvent.target.parentNode;

	let card = {
		wrap: cardNode,
		img: cardNode.querySelector('img'),
		productName: cardNode.querySelector('.productName'),
		button: cardNode.querySelector('button'),
	};

	let textOnButton = card.button.innerText;
	if (textOnButton === "Подробнее") {
		showMoreText(card);
	} else if (textOnButton === "Отмена") {
		hideMoreText(card);
	}
}

/**
* Функция показывает текст с описанием товара.
* @param {Object} card.
* @param {HTMLDivElement} card.wrap.
* @param {HTMLImageElement} card.img.
* @param {HTMLDivElement} card.productName.
* @param {HTMLButtonElement} card.button.
*/
function showMoreText(card) {
	card.img.style.display = 'none';
	let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sapiente doloribus debitis adipisci ratione dolorum exercitationem temporibus, eaque placeat voluptas. Sapiente officia aut tempore quo in neque nisi ex quaerat, repellat at quibusdam modi? Deleniti eveniet, necessitatibus modi ipsum architecto quia aspernatur neque ratione sunt eos odio doloremque nam qui nulla repellendus facere, animi ab. Voluptate, ex!'
	card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
	card.button.innerText = "Отмена";
}

/**
* Функция скрывает текст с описанием товара.
* @param {Object} card.
* @param {HTMLDivElement} card.wrap.
* @param {HTMLImageElement} card.img.
* @param {HTMLDivElement} card.productName.
* @param {HTMLButtonElement} card.button.
*/
function hideMoreText(card) {
	card.img.style.display = 'block';
	card.wrap.querySelector('.desc').remove();
	card.button.innerText = "Подробнее";
}