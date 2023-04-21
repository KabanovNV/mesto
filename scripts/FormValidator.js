class FormValidator {
    constructor (config, form) {
        this._form = form;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._saveButton = this._form.querySelector(this._submitButtonSelector);
    }
// Добавить ошибку
    _showInputError (inputElement, errorMessage) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);    
    }
// Снять ошибку
    _hideInputError (inputElement) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`); 
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };
//Валидация формы. Публичный метод.
    enableValidation () {
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }
// Слушатель инпутов
    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
            })
        })    
    }
// Переключение кнопки Submit
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._saveButton.disabled = true;
            this._saveButton.classList.add(this._inactiveButtonClass);
        } else {
            this._saveButton.disabled = false;
            this._saveButton.classList.remove(this._inactiveButtonClass);
        }   
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput () {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        })
    };
};

export { FormValidator };