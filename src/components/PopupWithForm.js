import Popup from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(selectorPopup, { submitCallback }) {
        super(selectorPopup);
        this._submitCallback = submitCallback;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    };

    /** Входные значения input */
    _getInputValues() {
        this._inputsValues = {};

        this._inputList.forEach(input => {
            this._inputsValues[input.name] = input.value

        });
        return this._inputsValues;
    };

    /** Обработчик события */
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallback(this._getInputValues());
        })
    };

    /** Закрытие формы */
    close() {
        super.close();
        this._form.reset();
    };
};


