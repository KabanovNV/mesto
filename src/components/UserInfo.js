export class UserInfo {
    constructor({ nameSelector, infoSelector }) {
        this._name = document.querySelector(nameSelector);
        this._info = document.querySelector(infoSelector);
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
        this._name.textContent = data.name;
        this._info.textContent = data.about;
    }
}