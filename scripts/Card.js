class Card {
    constructor(cardData, templateSelector, handleImageClick) {
        this._name = cardData.name;
        this._link = cardData.link;
        this._templateSelector = templateSelector;
        this._handleImageClick = handleImageClick;
    }
    // Получаем шаблон
    _getElement() {
        const card = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.mesto')
            .cloneNode(true);

        return card;
    }

    // Генерим карточку
    generateCard() {
        this._cardElement = this._getElement();
        this._cardElementLike = this._cardElement.querySelector('.mesto__like');
        this._cardElementDelete = this._cardElement.querySelector('.mesto__delete');
        this._cardElementImage = this._cardElement.querySelector('.mesto__image');
        this._cardElementTitle = this._cardElement.querySelector('.mesto__title');

        this._cardElementImage.alt = this._name;
        this._cardElementImage.src = this._link;
        this._cardElementTitle.textContent = this._name;

        this._setEventListeners();

        return this._cardElement;
    }
    // Лайк/дизлайк
    _likeCard() {
        this._cardElementLike.classList.toggle('mesto__like_liked');
    }
    // Удаление карточки
    _deleteCard() {
        this._cardElement.remove();
        this._cardElement = null;
    }
    // Слушатели
    _setEventListeners() {
        this._cardElementLike.addEventListener('click', () => {
            this._likeCard();
        })
        this._cardElementDelete.addEventListener('click', () => {
            this._deleteCard();
        })
        this._cardElementImage.addEventListener('click', () => {
            this._handleImageClick(this._name, this._link)
        })

    }

}

export { Card };