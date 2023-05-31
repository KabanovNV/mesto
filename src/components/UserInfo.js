export class UserInfo {
    constructor({ nameSelector, infoSelector, avatarSelector }) {
        this._name = document.querySelector(nameSelector);
        this._info = document.querySelector(infoSelector);
        this._avatar = document.querySelector(avatarSelector);
    };

    /** Получение информации из профиля, со страницы */
    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._info.textContent,
        };
    };

    /** Добавление информации в профиль */
    setUserInfo(data) {
        this.myID = data._id
        this._name.textContent = data.name;
        this._info.textContent = data.about;
    };

    /** Добавление аватар пользователя */
    setUserAvatar(url) {
        this._avatar.src = url.avatar;
    };

    /** Идентификатор пользователя */
    getMyID() {
        return this.myID;
    }
}