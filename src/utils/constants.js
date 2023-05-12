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

const altayImage = new URL ('../images/Altay.jpg', import.meta.url);
const baykalImage = new URL ('../images/baikal.jpg', import.meta.url);
const kchrImage = new URL ('../images/karachaevo-cherkesya.jpg', import.meta.url);
const kareliyaImage = new URL ('../images/Kareliya.jpg', import.meta.url);
const arkhyzImage = new URL ('../images/Arkhyz.jpg', import.meta.url);
const kamchatkaImage = new URL ('../images/Kamchatka.jpg', import.meta.url);

const initialCards = [
  {
    name: 'Алтай',
    link: altayImage
  },
  {
    name: 'Байкал',
    link: baykalImage
  },
  {
    name: 'Карачаево-Черкесия',
    link: kchrImage
  },
  {
    name: 'Карелия',
    link: kareliyaImage
  },
  {
    name: 'Архыз',
    link: arkhyzImage
  },
  {
    name: 'Камчатка',
    link: kamchatkaImage
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
