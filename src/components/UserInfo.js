export class UserInfo {
    constructor({ name, info }) {
        this._name = document.querySelector(name);
        this._info = document.querySelector(info);
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