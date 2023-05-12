export class FormValidator {
    constructor(config, form) {
        this._form = form;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._saveButton = this._form.querySelector(this._submitButtonSelector);
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    enableValidation() {
        this._setEventListeners();
    }

    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            })
        })
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton()
        } else {
            this._activeteSubmitButton()
        }
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        })
    };

    _disableSubmitButton() {
        this._saveButton.classList.add(this._inactiveButtonClass);
        this._saveButton.disabled = '';
    };

    _activeteSubmitButton() {
        this._saveButton.classList.remove(this._inactiveButtonClass);
        this._saveButton.disabled = false;
    };

    _removeInputErrors() {
        this._inputList.forEach(input => {
            this._hideInputError(input);

        });
    };

    resetValidation() {
        this._removeInputErrors();
        this._disableSubmitButton();
    };
};