import {
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
  validationConfig as config,
  popupOverlayList,
  elementImage,
  elementImageCaption,
} from './constants.js';

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const validationFormProfile = new FormValidator(config, formElementEdit);
const validationFormAdd = new FormValidator(config, formElementAdd);

const openPopup = popup => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOnEsc);
}

const closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEsc);
}

const openEdit = () => {
  validationFormProfile.resetValidation();
  openPopup(popupEdit);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}


const openAdd = () => {
  validationFormAdd.resetValidation();
  openPopup(popupAdd);
}


const openImage = (name, link) => {
  elementImage.src = link;
  elementImage.alt = name;
  elementImageCaption.textContent = name;
  openPopup(popupImage);
}


const closeEdit = () => {
  closePopup(popupEdit);
}


const closeAdd = () => {
  closePopup(popupAdd);
  formElementAdd.reset();
}


const closeImage = () => {
  closePopup(popupImage);
}


const handleSubmitEdit = (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEdit);
}

const handleSubmitAdd = (evt) => {
  evt.preventDefault();
  renderCard({
    name: newPlace.value,
    link: newLink.value
  },
    cardsContainer);
  closeAdd();
}

const createCard = (cardData) => {
  const card = new Card(cardData, '.mesto-template', openImage);
  return card.generateCard();
}

const renderCard = (card, container) => {
  container.prepend(createCard(card));
}

// Закрытие при нажатии на ESC
const closeOnEsc = (evt) => {
  if (evt.key === ESC_CODE) {
    const popupClose = document.querySelector('.popup_opened');
    closePopup(popupClose);
  };
}

// Закрытие при нажатии на Overlay
popupOverlayList.forEach(item => {
  item.addEventListener('mousedown', evt => {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target.closest('.popup'));
    };
  });
})

initialCards.forEach(card => {
  renderCard(card, cardsContainer);
})

formElementEdit.addEventListener('submit', handleSubmitEdit);
formElementAdd.addEventListener('submit', handleSubmitAdd);
profileEditButton.addEventListener('click', openEdit);
profileAddButton.addEventListener('click', openAdd)
popupButtonEditClose.addEventListener('click', closeEdit);
popupButtonAddClose.addEventListener('click', closeAdd);
popupButtonImageClose.addEventListener('click', closeImage);

// Валидация форм
validationFormProfile.enableValidation();
validationFormAdd.enableValidation();

