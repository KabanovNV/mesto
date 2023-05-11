export {
  initialCards,
  profileEditButton,
  profileAddButton,
  formElementAdd,
  formElementEdit,
  nameInput,
  aboutInput,
  ESC_CODE,
  validationConfig,
}

const initialCards = [
  {
    name: 'Алтай',
    link: './images/Altay.jpg'
  },
  {
    name: 'Байкал',
    link: './images/baikal.jpg'
  },
  {
    name: 'Карачаево-Черкесия',
    link: './images/karachaevo-cherkesya.jpg'
  },
  {
    name: 'Карелия',
    link: './images/Kareliya.jpg'
  },
  {
    name: 'Архыз',
    link: './images/Arkhyz.jpg'
  },
  {
    name: 'Камчатка',
    link: './images/Kamchatka.jpg'
  }
];

const container = document.querySelector('.container');
const profileEditButton = container.querySelector('.profile__edit-button');
const profileAddButton = container.querySelector('.profile__add-button');
const formElementAdd = container.querySelector('.popup__form-add');
const formElementEdit = container.querySelector('.popup__form-edit');
const nameInput = container.querySelector('.popup__input-name');
const aboutInput = container.querySelector('.popup__input-about');
const ESC_CODE = 'Escape';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
