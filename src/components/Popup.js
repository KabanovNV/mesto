import { ESC_CODE } from '../utils/constants.js'

export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close-button');
        this._buttonSubmit = this._popup.querySelector('.popup__submit-button');
    };

    /** Функция открытия popup */
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    };

    /** Функция закрытия popup */
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    };

    /** Функция закрытия popup по ESC */
    _handleEscClose = (evt) => {
        if (evt.key === ESC_CODE) {
            this.close();
        }
    };

    /** Функция закрытия popup при нажатии на Overlay */
    _handleOverlayClose = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
        };
    };

    /** Функция отображения Preloader */
    renderLoading(isLoading, displayText) {
        if (!this._buttonSubmit) return
        if (isLoading) {
            this.defaultText = this._buttonSubmit.textContent;
            this._buttonSubmit.textContent = displayText;
        } else {
            this._buttonSubmit.textContent = this.defaultText;
        }
    };

    /** Слушатели */
    setEventListeners() {
        this._buttonClose.addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('mousedown', this._handleOverlayClose.bind(this));
    };
}