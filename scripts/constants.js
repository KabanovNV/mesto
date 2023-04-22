export {
  initialCards,
  profileEditButton,
  profileAddButton,
  popupButtonEditClose,
  popupButtonAddClose,
  popupButtonImageClose,
  popupEdit,
  popupAdd,
  popupImage,
  formElementAdd,
  formElementEdit,
  cardsContainer,
  nameInput,
  nameProfile,
  jobInput,
  jobProfile,
  newPlace,
  newLink,
  ESC_CODE,
  validationConfig,
  popupOverlayList,
  popupImageAlt,
  popupImageSrc,
  popupImageTxtContent
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
const popupButtonEditClose = container.querySelector('.popup__close-button_edit');
const popupButtonAddClose = container.querySelector('.popup__close-button_add');
const popupButtonImageClose = container.querySelector('.popup__close-button_image');
const popupEdit = container.querySelector('.popup_edit');
const popupAdd = container.querySelector('.popup_add');
const popupImage = container.querySelector('.popup_image-section');
const formElementAdd = container.querySelector('.popup__form-add');
const formElementEdit = container.querySelector('.popup__form-edit');
const cardsContainer = document.querySelector('.elements');
const nameInput = container.querySelector('.popup__input-name');
const nameProfile = container.querySelector('.profile__user-name');
const jobInput = container.querySelector('.popup__input-about');
const jobProfile = container.querySelector('.profile__user-caption');
const newPlace = container.querySelector('.popup__input-new-mesto');
const newLink = container.querySelector('.popup__input-new-link');
const popupOverlayList = document.querySelectorAll('.popup');
const popupImageSrc = popupImage.querySelector('.popup__image').src;
const popupImageAlt = popupImage.querySelector('.popup__image').alt;
const popupImageTxtContent = popupImage.querySelector('.popup__image-caption').textContent;


const ESC_CODE = 27;

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
