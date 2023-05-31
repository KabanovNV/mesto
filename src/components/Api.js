export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
        this._authorization = config.headers['authorization'];
    };

    /** Проверка на ошибки */
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Внимание! Ошибка: ${res.status}`);
    };

    /** Загрузка информации о пользователе с сервера */
    getUserInfoApi() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: {
                authorization: this._authorization
            }
        })
            .then(this._checkResponse);
    };

    /** Редактирование профиля */
    setUserInfoApi(data) {
        return fetch(`${this._url}${"/users/me"}`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            }),
        })
            .then(this._checkResponse);
    };

    /** Загрузка карточек с сервера */
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers,
        })
            .then(this._checkResponse);
    };

    /** Добавление новой карточки */
    addNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            }),
        })
            .then(this._checkResponse);
    };

    /** Удаление карточки */
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._authorization
            },
        })
            .then(this._checkResponse);
    };

    /** Постановка лайка */
    addLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers,
        })
            .then(res => this._checkResponse(res));
    };

    /** Снятие лайка */
    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(res => this._checkResponse(res));
    };

    /** Обновление аватара пользователя */
    setUserAvatar(data) {
        return fetch(`${this._url}${"/users/me/avatar"}`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            }),
        })
            .then((res) => this._checkResponse(res));
    };
}