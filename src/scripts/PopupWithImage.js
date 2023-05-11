import Popup from '../scripts/Popup.js'

export class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super (popupSelector);
        this._imageCard = this._popup.querySelector('.popup__image');
        this._nameCard = this._popup.querySelector('.popup__image-caption');
    }

    // открытие popup с картинкой
    open(image) {
        super.open();
        this._imageCard.src = image.link;
        this._imageCard.alt = image.name;
        this._nameCard.textContent = image.name; 
    }    
};