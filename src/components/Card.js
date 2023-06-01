export class Card {
    constructor({ cardData, myID, templateSelector, handleLikeClick, handleFormConfirm, handleCardClick }) {
        this._cardData = cardData;
        this._myID = myID;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleFormConfirm = handleFormConfirm
    };

    /** Получаем шаблон */
    _getElement() {
        const card = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.mesto')
            .cloneNode(true);

        return card;
    };

    /** Генерим карточку */
    generateCard() {
        this._cardElement = this._getElement();
        this._cardElementLike = this._cardElement.querySelector('.mesto__like');
        this._cardElementDelete = this._cardElement.querySelector('.mesto__delete');
        this._cardElementImage = this._cardElement.querySelector('.mesto__image');
        this._cardElementTitle = this._cardElement.querySelector('.mesto__title');
        this._likeCounter = this._cardElement.querySelector('.mesto__like-counter');
        this._cardElementImage.alt = this._cardData.name;
        this._cardElementImage.src = this._cardData.link;
        this._cardElementTitle.textContent = this._cardData.name;

        // this._myLike = this.cardData.likes.some(like => like._id === this._myID)
        if (this.likedCard()) { this._cardElementLike.classList.add('mesto__like_liked') }

        this._likeCounter.textContent = this._cardData.likes.length;

        /** Проверка пользователя для отображения корзины */
        if (this._myID != this._cardData.owner._id) {
            this._cardElementDelete.remove()
        };

        this._setEventListeners();

        return this._cardElement;
    };

    /** Обновление данных карточки */
    updateData(newData) {
        this._cardData = newData;
    }

    /** Обновление информации по лайкам */
    updateLikes() {
        this._likeCounter.textContent = this._cardData.likes.length;
        if (!this.likedCard()) {
            this._cardElementLike.classList.remove('mesto__like_liked');
        } else {
            this._cardElementLike.classList.add('mesto__like_liked');
        }
    };

    /** Отслеживание моих лайков, в массиве лайков */
    likedCard() {
        return this._cardData.likes.some(like => like._id === this._myID)
    };

    /** Удаление карточки */
    deleteCard() {
        this._cardElement.remove();
        this._cardElement = null;
    };

    /** Слушатели */
    _setEventListeners() {
        this._cardElementLike.addEventListener('click', () => {
            this._handleLikeClick(this._cardData)
        });
        this._cardElementDelete.addEventListener('click', () => {
            this._handleFormConfirm(this._cardData, this)
        });
        this._cardElementImage.addEventListener('click', () => {
            this._handleCardClick(this._cardData.name, this._cardData.link)
        })

    };

}