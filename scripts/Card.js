class Card {
    constructor(cardData, tamplateSelector, openImage){
        this._name = cardData.name;
        this._link = cardData.link;
        this._tamplateSelector = tamplateSelector;
        this._openImage = openImage;
    }
// Получаем шаблон
    _getElement() {
        const mestoElement = document
            .querySelector(this._tamplateSelector)
            .content
            .querySelector('.mesto')
            .cloneNode(true);

        return  mestoElement;
    }
   
// Генерим карточку
    generateCard() {
        this._mestoElement = this._getElement();
        this._mestoLike = this._mestoElement.querySelector('.mesto__like');
        this._mestoDelete = this._mestoElement.querySelector('.mesto__delete');
        this._mestoImage = this._mestoElement.querySelector('.mesto__image');
        this._mestoTitle = this._mestoElement.querySelector('.mesto__title');

        this._mestoImage.alt = this._name;
        this._mestoImage.src = this._link;
        this._mestoTitle.textContent = this._name;

        this._setEventListeners();

        return this._mestoElement;
    }
// Лайк/дизлайк
    _likeCard() {
        this._mestoLike.classList.toggle('mesto__like_liked');    
    }
// Удаление карточки
    _deleteCard() {
        this._mestoElement.remove();
        this._cardElement = null;
    }
// Слушатели
    _setEventListeners() {
        this._mestoLike.addEventListener('click', () => {
            this._likeCard();
        })    
        this._mestoDelete.addEventListener('click', () => {
            this._deleteCard();
        })
        this._mestoImage.addEventListener('click', () => {
            this._openImage(this._name,this._link)
        })
        
    }

}

export { Card };