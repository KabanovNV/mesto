export {initialCards,
  editButton,
  addButton,
  closeButtonEdit,
  closeButtonAdd,
  closeButtonImage,
  popupEdit,
  popupAdd,
  popupImage,
  formElementAdd,
  formElementEdit,
  elementsList,
  mestoTemplate,
  nameInput,
  nameProfile,
  jobInput,
  jobProfile,
  newMesto,
  newLink,
  ESC_CODE,
  enableValidation,
  closePopupOverlay,
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
const editButton = container.querySelector('.profile__edit-button');
const addButton = container.querySelector('.profile__add-button');
const closeButtonEdit = container.querySelector('.popup__close-button_edit');
const closeButtonAdd = container.querySelector('.popup__close-button_add');
const closeButtonImage = container.querySelector('.popup__close-button_image');
const popupEdit = container.querySelector('.popup_edit');
const popupAdd = container.querySelector('.popup_add');
const popupImage = container.querySelector('.popup_image-section');
const formElementAdd = container.querySelector('.popup__form-add'); 
const formElementEdit = container.querySelector('.popup__form-edit'); 
const elementsList = document.querySelector('.elements');
const mestoTemplate = document.querySelector('.mesto-template').content;
const nameInput = container.querySelector('.popup__input-name');
const nameProfile = container.querySelector('.profile__user-name'); 
const jobInput = container.querySelector('.popup__input-about'); 
const jobProfile = container.querySelector('.profile__user-caption');
const newMesto = container.querySelector('.popup__input-new-mesto'); 
const newLink = container.querySelector('.popup__input-new-link');
const closePopupOverlay = document.querySelectorAll('.popup');

const ESC_CODE = 27;

const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
// formValidationConfig