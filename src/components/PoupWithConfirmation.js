import Popup from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(selectorPopup, { handleConfirmDelete }) {
        super(selectorPopup);
        this._handleConfirmDelete = handleConfirmDelete;
        this._confirmButton = this._popup.querySelector('.popup__submit-button')
    };

    /** Отрытие popup  и получение данных карточки */
    open(cardData, cardElement) {
        super.open();
        this._card = cardData;
        this._cardElement = cardElement;

     };

    /** Слушатели */
    setEventListeners() {
        super.setEventListeners();
        this._confirmButton.addEventListener('click', () => {
            this._handleConfirmDelete(this._card._id, this._cardElement)
        })
    }
}