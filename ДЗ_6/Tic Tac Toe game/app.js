'use strict';

let ticTakToe = {
	gameTableElement: document.getElementById('game'),
	status: 'playing',
	mapValues: [
		['', '', ''],
		['', '', ''],
		['', '', ''],
	],
	phase: 'X',

	/**
	* Инициализация игры
	*/
	init() {
		//Выводим все ячейки
		this.renderMap();
		//Инициализируем обраточки событий
		this.initEventHandlers();
	},

	/**
	* Вывод ячеек на экран в HTML
	*/
	renderMap() {
		for (let row = 0; row < 3; row++) {
			const tr = document.createElement('tr');
			this.gameTableElement.appendChild(tr);
			for(let col = 0; col < 3; col++) {
				let td = document.createElement('td');
				td.dataset.row = row.toString();
				td.dataset.col = col.toString();
				tr.appendChild(td);
			}
		}
	},

	/**
	* Инициализация обработчиков событий
	*/
	initEventHandlers() {
		//Ставим обработчик, при клике на таблицу вызовется функция this.cellClickHandler
		this.gameTableElement.addEventListener('click', evt => this.cellClickHandler(evt));
	},

	/**
	* Обработчик события клика
	* @param {MouseEvent} event
	*/
	cellClickHandler(evt) {
		//Если клик не нужно обрабатывать, то выходим из функции
		if (!this.isCorrectClick(evt)) {
			return;
		}

		//Заполняем ячейку
		this.fillCell(evt);

		//Если кто-то выйграл, то заходим в if
		if (this.hasWon()) {
			//Ставим статус в остановлено
			this.setStatusStopped();
			//Сообщаем о победе пользователя
			this.sayWonPhase();
		}

		//Меняем фигуру (крестик или нолик)
		this.togglePhase();
	},

	/**
	* Проверка, был ли корректный клик, что описан в событии event
	* @param {Event} event
	* @return {Boolean} Вернет true в случае, если статус игры "играем",
	* клик что описан в объекте Event был по ячейке, и ячейка, куда был
	* произведен клик был по пустой ячейке.
	*/
	isCorrectClick(evt) {
		return this.isStatusPlaying() && this.isClickByCell(evt) && this.isCellEmpty(evt);
	},

	/**
	* Проверка что мы "играем", что игра не закончена
	* @return {Boolean} Вернет true, если статус игры "играем", иначе false
	*/
	isStatusPlaying() {
		return this.status === 'playing';
	},

	/**
	* Проверка что кликбыл по ячейки
	* @param {Event} event
	* @param {HTMLElement} event.target
	* @return {Boolean} Вернет true, если клик был по ячейке, иначе false
	*/
	isClickByCell(evt) {
		return evt.target.tagName === 'TD';
	},

	/**
	* Проверка что в ячейку не ставили значение (крестик или нолик)
	* @param {Event} event
	* @param {HTMLElement} event.target
	* @return {Boolean} Вернет true, если ячейка пустая, иначе false
	*/
	isCellEmpty(evt) {
		//Получаем строку и колонку, куда кликнули
		let row = +evt.target.dataset.row;
		let col = +evt.target.dataset.col;

		return this.mapValues[row][col] === '';
	},

	/**
	* Заполняет ячейку в которую кликнул пол-ть в событии event.
	* @param {Event} event
	* @param {HTMLElement} event.target
	*/
	fillCell(evt) {
		//Получаем строку и колонку, куда кликнулиэ=
		let row = +evt.target.dataset.row;
		let col = +evt.target.dataset.col;

		//Заполняем ячейку и ставим значение в массиве, в св-во mapValues
		this.mapValues[row][col] = this.phase;
		evt.target.textContent = this. phase;
	},

	/**
	* Проверка, есть ли выйграшная ситуация на карте
	* @return {boolean} Вернет true, если игра выйграна, иначе false
	*/
	hasWon() {
		return this.isLineWon({x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}) ||
			   this.isLineWon({x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}) ||
			   this.isLineWon({x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}) ||

			   this.isLineWon({x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}) ||
			   this.isLineWon({x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}) ||
			   this.isLineWon({x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}) ||

			   this.isLineWon({x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}) ||
			   this.isLineWon({x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0});
	},

	/**
	* Проверяем, есть ли выйграшная ситуация на линии.
	* @param {{x: int, y: int}} a - первая ячейка.
	* @param {{x: int, y: int}} b - вторая ячейка.
	* @param {{x: int, y: int}} c - третья ячейка.
	* @return {boolean} Вернет true, если линия выйграна, иначе false.
	*/
	isLineWon(a, b, c) {
		let value = this.mapValues[a.y][a.x] + this.mapValues[b.y][b.x] + this.mapValues[c.y][c.x];
		return value === 'XXX' || value ==='000';
	},

	/**
	* Ставит статус игры в "остановлена".
	*/
	setStatusStopped() {
		this.status = 'stopped';
	},

	/**
	* Сообщает о победе.
	*/
	sayWonPhase() {
		let figure = this.phase === 'X' ? 'Крестики' : 'Нолики';
		alert(`${figure} выйграли`);
	},

	/**
	* Меняем фигуру (крестик или нолик)
	*/
	togglePhase() {
		this.phase = this.phase === 'X' ? '0' : 'X';
	},
};

ticTakToe.init();