import './index.css'
import {
  initialCards,
  profileEditButton,
  profileAddButton,
  formElementAdd,
  formElementEdit,
  nameInput,
  aboutInput,
  validationConfig as config,
} from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';

const validationFormProfile = new FormValidator(config, formElementEdit);
const validationFormAdd = new FormValidator(config, formElementAdd);

/** ---- Создание карточек на странице ---- */
/** Создание Popup  с изображением */
const cardImagePopup = new PopupWithImage ('.popup_image-section');

/**  Создание карточки */
const createCard = (cardData) => {
  const card = new Card (cardData, '.mesto-template', () => {
    cardImagePopup.open(cardData);
  });

  return card.generateCard();
};

const cardsSection = new Section ({ 
  renderer: (card) => { 
    cardsSection.addItem(createCard(card)) } 
  }, '.elements');

/** Отображение карточки */
cardsSection.renderItems(initialCards)

/** ---- Popup редактирования профиля и добавления карточки ---- */
/** Получение формы профиля */
const userInfo = new UserInfo ({
  name: '.profile__user-name', 
  info: '.profile__user-caption'
});

/** Создание popup редактирования профиля */
const popupProfile = new PopupWithForm ('.popup_edit', {
  submitCallback: (data) => {
    userInfo.setUserInfo(data);
   }
});

/** Создание popup добавления карточки */
const popupAddCard = new PopupWithForm ('.popup_add', {
  submitCallback: ({ name, link }) => {
    cardsSection.addItem(createCard({
      name: name,
      link: link
    }))
  }
});

/** Функция открытия popup редактирования профиля */
const openEdit = () => {
  const {name, about} = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = about;
  validationFormProfile.resetValidation();
  popupProfile.open();
};

/** Функция открытия popup добавления карточки */
const openAdd = () => {
  validationFormAdd.resetValidation();
  popupAddCard.open();
};

/** Открытие Popup редактирования профиля */
profileEditButton.addEventListener('click', openEdit);

/**  Открытие popup добавления карточки */
profileAddButton.addEventListener('click', openAdd);

/** Слушатели */
popupProfile.setEventListeners();
popupAddCard.setEventListeners();
cardImagePopup.setEventListeners();

/** ---- Валидация ---- */
validationFormProfile.enableValidation();
validationFormAdd.enableValidation();


