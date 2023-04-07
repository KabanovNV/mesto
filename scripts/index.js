import {
  initialCards,
  profileEditButton,
  profileAddButon,
  popupButtonEditClose,
  popupButtonAddClose,
  popupButtonImageClose,
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
  validationConfig as config,
  popupOverlay
} from './constants.js';

const openPopup = popup => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOnEsc);
}

const closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEsc);
}

const openEdit = () => {
  resetValidationStyle(popupEdit);
  openPopup(popupEdit);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}


const openAdd = () => {
  resetValidationStyle(popupAdd);
  openPopup(popupAdd);
}


const openImage = (name, link) => {
  popupImage.querySelector('.popup__image').src = link;
  popupImage.querySelector('.popup__image').alt = name;
  popupImage.querySelector('.popup__image-caption').textContent = name;
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
    name: newMesto.value,
    link: newLink.value},
    elementsList);
  closeAdd();
}

const initDelMesto = (mestoDeleteButton) => {
  mestoDeleteButton.addEventListener('click', event => {
    event.target.closest('.mesto').remove();
  });
}

const initLikeMesto = (mestoLikeButton) => {
  mestoLikeButton.addEventListener('click', event => {
    event.target.classList.toggle('mesto__like_liked');
  });
}

const initOpenPopupImg = (mestoImg, name, link) => {
  mestoImg.addEventListener('click', event => {
    event.preventDefault();
    openImage(name, link);
  });
}

const createCard = (tamplate) => {
  const mestoElement = mestoTemplate.cloneNode(true);
  const mestoLike = mestoElement.querySelector('.mesto__like');
  const mestoDelete = mestoElement.querySelector('.mesto__delete');
  const mestoImage = mestoElement.querySelector('.mesto__image');
  const mestoTitle = mestoElement.querySelector('.mesto__title');

  mestoImage.src = tamplate.link;
  mestoImage.alt = tamplate.name;
  mestoTitle.textContent = tamplate.name;

  // Like
  initLikeMesto(mestoLike);

  // Удаление элемента
  initDelMesto(mestoDelete);

  // popup картинки
  initOpenPopupImg(mestoImage, tamplate.name, tamplate.link);

  return mestoElement;
}

const renderCard = (card, container) => {
  container.prepend(createCard(card));
}

const disableSubmitInput = (popupForm) => {
  const inputList = popupForm.querySelectorAll(config.inputSelector);
  inputList.forEach(input => {
    input.classList.remove(config.inputErrorClass);
    input.nextElementSibling.textContent = '';
  });
}

const disableSubmitButton = (popupForm) => {
  const buttonSubmint = popupForm.querySelectorAll(config.submitButtonSelector);
  buttonSubmint.forEach((button) => {
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute('disabled', '');
  });
}

const resetValidationStyle = (popupForm) => {
  disableSubmitInput(popupForm);
  disableSubmitButton(popupForm);
};

// Закрытие при нажатии на ESC
const closeOnEsc = (evt) => {
  if (evt.keyCode === ESC_CODE) {
    const popupClose = document.querySelector('.popup_opened');
    closePopup(popupClose);
  };
}

// Закрытие при нажатии на Overlay
popupOverlay.forEach(item => {
  item.addEventListener('mousedown', evt => {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target.closest('.popup'));
    };
  });
})

initialCards.forEach(card => {
  renderCard(card, elementsList);
})

popupEdit.addEventListener('keydown', closeOnEsc);
formElementEdit.addEventListener('submit', handleSubmitEdit);
formElementAdd.addEventListener('submit', handleSubmitAdd);
profileEditButton.addEventListener('click', openEdit);
profileAddButon.addEventListener('click', openAdd)
popupButtonEditClose.addEventListener('click', closeEdit);
popupButtonAddClose.addEventListener('click', closeAdd);
popupButtonImageClose.addEventListener('click', closeImage);


