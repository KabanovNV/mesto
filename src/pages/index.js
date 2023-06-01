import './index.css'
import {
  profileEditButton,
  profileAddButton,
  profileEditAvatar,
  formElementAdd,
  formElementEdit,
  formElementEditAvatar,
  nameInput,
  aboutInput,
  validationConfig as config,
  apiConfig,
} from '../utils/constants.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Api } from '../components/Api.js';
import { PopupWithConfirmation } from '../components/PoupWithConfirmation.js';

const validationFormProfile = new FormValidator(config, formElementEdit);
const validationFormAdd = new FormValidator(config, formElementAdd);
const validationFormAvatar = new FormValidator(config, formElementEditAvatar);
let userId;

/** ---- Api ---- */
const api = new Api(apiConfig);

Promise.all([api.getInitialCards(), api.getUserInfoApi()])
  .then(([resCard, resUser]) => {
    userId = resUser._id;
    cardsSection.renderItems(resCard);
    userInfo.setUserInfo(resUser);
    userInfo.setUserAvatar(resUser);
  })
  .catch(err => alert(err))

/** ---- Создание карточек на странице ---- */
/** Создание Popup  с изображением */
const cardImagePopup = new PopupWithImage('.popup_image-section');

/**  Создание карточки */
const createCard = (cardData) => {
  const card = new Card({
    cardData: cardData,
    myID: userId,
    templateSelector: '.mesto-template',
    handleLikeClick: (cardData) => {
      if (card.likedCard()) {
        api.deleteLike(cardData._id)
          .then(res => {
            card.updateData(res);
            card.updateLikes();
          })
          .catch(err => alert(err));
      } else {
        api.addLike(cardData._id)
          .then(res => {
            card.updateData(res);
            card.updateLikes();
          })
          .catch(err => alert(err));
      }
    },
    handleFormConfirm: (cardData, cardElement) => {
      popupDelCardConfirm.open(cardData, cardElement);
    },
    handleCardClick: () => {
      cardImagePopup.open(cardData);
    }
  });
  return card.generateCard();
};

const cardsSection = new Section({
  renderer: (card) => {
    cardsSection.addItem(createCard(card))
  }
}, '.elements');

/** ---- Popup редактирования профиля и добавления карточки ---- */
/** Получение формы профиля */
const userInfo = new UserInfo({
  nameSelector: '.profile__user-name',
  infoSelector: '.profile__user-caption',
  avatarSelector: '.profile__image'
});

/** Создание popup редактирования профиля */
const popupProfile = new PopupWithForm('.popup_edit', {
  submitCallback: (data) => {
    popupProfile.renderLoading(true, "Сохранение...");
    api.setUserInfoApi(data)
      .then((data) => {
        userInfo.setUserInfo(data)
      })
      .then(() => {
        popupProfile.close()
      })
      .catch((err) => alert(err))
      .finally(() => {
        popupProfile.renderLoading(false)
      })
  }
});

/** Создание popup редактирования аватвр */
const popupAvatar = new PopupWithForm('.popup_avatar', {
  submitCallback: (data) => {
    popupAvatar.renderLoading(true, "Сохранение...");
    api.setUserAvatar(data)
      .then((res) => {
        userInfo.setUserAvatar(res);
      })
      .then(() => {
        popupAvatar.close()
      })
      .catch((err) => alert(err))
      .finally(() => {
        popupAvatar.renderLoading(false)
      })
  }
});

/** Создание popup добавления карточки */
const popupAddCard = new PopupWithForm('.popup_add', {
  submitCallback: (data) => {
    popupAddCard.renderLoading(true, "Сохранение...");
    api.addNewCard(data)
      .then((res) => {
        cardsSection.addItem(createCard(res));
      })
      .then(() => {
        popupAddCard.close();
      })
      .catch((err) => alert(err))
      .finally(() => {
        popupAddCard.renderLoading(false);
      })
  }
});

/** Создание попап подтверждения удаления карточки */
const popupDelCardConfirm = new PopupWithConfirmation('.popup_confirmation', {
  handleConfirmDelete: (cardId, cardElement) => {
    popupDelCardConfirm.renderLoading(true, "Удаление...");
    api.deleteCard(cardId)
      .then(() => {
        cardElement.deleteCard();
      })
      .then(() => {
        popupDelCardConfirm.close();
      })
      .finally(() => {
        popupDelCardConfirm.renderLoading(false);
      })
  }
});

/** Функция открытия popup редактирования профиля */
const openEdit = () => {
  const { name, about } = userInfo.getUserInfo();
  nameInput.value = name;
  aboutInput.value = about;
  validationFormProfile.resetValidation();
  popupProfile.open();
};

/** Функция открытия popup редактирования аватар */
const openAvatarEdit = () => {
  validationFormAvatar.resetValidation();
  popupAvatar.open();
};

/** Открытие popup редактирования аватар */
profileEditAvatar.addEventListener('click', openAvatarEdit);

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
popupAvatar.setEventListeners();
popupDelCardConfirm.setEventListeners();

/** ---- Валидация ---- */
validationFormProfile.enableValidation();
validationFormAdd.enableValidation();
validationFormAvatar.enableValidation();


