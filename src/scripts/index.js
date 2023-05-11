import {
  initialCards,
  profileEditButton,
  profileAddButton,
  formElementAdd,
  formElementEdit,
  nameInput,
  aboutInput,
  validationConfig as config,
} from './constants.js';

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { UserInfo } from './UserInfo.js';
import { PopupWithForm } from './PopupWithForm.js';
import { PopupWithImage } from './PopupWithImage.js';

// ---- Создание карточек на странице ----
// Создание Popup  с изображением
const cardImagePopup = new PopupWithImage ('.popup_image-section');

// Создание карточки
const createCard = (cardData) => {
  const card = new Card (cardData, '.mesto-template', () => {
    cardImagePopup.open(cardData);
  });

  return card.generateCard();
};

const renderCard = new Section ({ 
  renderer: (card) => { 
    renderCard.addItem(createCard(card)) } 
  }, '.elements');

// Отображение карточки 
renderCard.renderItems(initialCards)

// ---- Popup редактирования профиля и добавления карточки ----
// Получение формы профиля
const userInfo = new UserInfo ({
  nameSelector: '.profile__user-name', 
  infoSelector: '.profile__user-caption'
});

// Создание popup редактирования профиля
const popupProfile = new PopupWithForm ('.popup_edit', {
  submitCallback: (data) => {
    userInfo.setUserInfo(data);
   }
});

// Создание popup добавления карточки
const popupAddCard = new PopupWithForm ('.popup_add', {
  submitCallback: ({ name, link }) => {
    renderCard.addItem(createCard({
      name: name,
      link: link,
      alt: name
    }))
  }
});

// Открытие Popup редактирования профиля
profileEditButton.addEventListener('click', () => {
  const {name, about} = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = about;
  validationFormProfile.resetValidation();
  popupProfile.open();
});

// Открытие popup добавления карточки
profileAddButton.addEventListener('click', () => {
  validationFormAdd.resetValidation();
  popupAddCard.open();
})

// Слушатели

popupProfile.setEventListeners();
popupAddCard.setEventListeners();
cardImagePopup.setEventListeners();


// ---- Валидация ----

const validationFormProfile = new FormValidator(config, formElementEdit);
const validationFormAdd = new FormValidator(config, formElementAdd);

validationFormProfile.enableValidation();
validationFormAdd.enableValidation();


