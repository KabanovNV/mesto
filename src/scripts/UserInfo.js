export class UserInfo {
    constructor({ nameSelector, infoSelector }) {
        this._nameSelector = document.querySelector(nameSelector);
        this._infoSelector = document.querySelector(infoSelector);
    };

    // получение информации из профиля, со страницы
    getUserInfo () {
        return {
            name: this._nameSelector.textContent,
            about: this._infoSelector.textContent,
        };
    };

    // добавление информации в профиль
    setUserInfo (data) {
        this._nameSelector.textContent = data.name;
        this._infoSelector.textContent = data.about;
    }
}