class Menu {
    constructor() {
        //this.startBtnEl = document.getElementById('startBtn');
        this.pauseBtnEl = document.getElementById('pauseBtn');
    }

    /**
     * Метод назначает переданные функции в качестве обработчиков
     * событий клика на кнопку "Пауза".
     * @param {Function} pauseBtnClickHandler 
     */
    addButtonsClickListeners(pauseBtnClickHandler) {
        //this.startBtnEl.addEventListener('click', startBtnClickHandler);
        this.pauseBtnEl.addEventListener('click', pauseBtnClickHandler);
    }
}