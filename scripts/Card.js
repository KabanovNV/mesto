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
        this._element = this._getElement();
        this._like = this._element.querySelector('.mesto__like');
        this._delete = this._element.querySelector('.mesto__delete');
        this._image = this._element.querySelector('.mesto__image');
        this._title = this._element.querySelector('.mesto__title');

        this._image.alt = this._name;
        this._image.src = this._link;
        this._title.textContent = this._name;

        this._setEventListeners();

        return this._element;
    }
    // Лайк/дизлайк
    _likeCard() {
        this._like.classList.toggle('mesto__like_liked');
    }
    // Удаление карточки
    _deleteCard() {
        this._element.remove();
        this._element = null;
    }
    // Слушатели
    _setEventListeners() {
        this._like.addEventListener('click', () => {
            this._likeCard();
        })
        this._delete.addEventListener('click', () => {
            this._deleteCard();
        })
        this._image.addEventListener('click', () => {
            this._handleImageClick(this._name, this._link)
        })

    }

}

export { Card };