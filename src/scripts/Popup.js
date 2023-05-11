import { ESC_CODE } from './constants.js'

export default class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close-button');
    };

    // функция открытия popup
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    };

    // функция закрытия popup 
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    };

    // функция закрытия popup по ESC
    _handleEscClose = (evt) => {
        if (evt.key === ESC_CODE) {
            this.close();
        }
    };

    // функция закрытия popup при нажатии на Overlay
    _handleOverlayClose = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
        };
    };

    // слушатели
    setEventListeners() {
        this._buttonClose.addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('mousedown', this._handleOverlayClose.bind(this));
    };
}