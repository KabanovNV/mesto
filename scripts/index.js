import {
  initialCards,
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
  closePopupOverlay
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
  resetValidationStyle(enableValidation);
  openPopup(popupEdit);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}


const openAdd = () => {
  resetValidationStyle(enableValidation);
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

const disableSubmitInput = (objValidaton) => {
  const inputList = document.querySelectorAll(objValidaton.inputSelector);
  inputList.forEach(input => {
    input.classList.remove(objValidaton.inputErrorClass);
    input.nextElementSibling.textContent = '';
  });
}

const disableSubmitButton = (objValidation) => {
  const buttonSubmint = document.querySelectorAll(objValidation.submitButtonSelector);
  buttonSubmint.forEach((button) => {
    button.classList.add(objValidation.inactiveButtonClass);
    button.setAttribute('disabled', '');
  });
}

const resetValidationStyle = (objValidation) => {
  disableSubmitInput(objValidation);
  disableSubmitButton(objValidation);
};

// Закрытие при нажатии на ESC
const closeOnEsc = (evt) => {
  if (evt.keyCode === ESC_CODE) {
    const popupClose = document.querySelector('.popup_opened');
    closePopup(popupClose);
  };
}

// Закрытие при нажатии на Overlay
closePopupOverlay.forEach(item => {
  item.addEventListener('click', evt => {
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
editButton.addEventListener('click', openEdit);
addButton.addEventListener('click', openAdd)
closeButtonEdit.addEventListener('click', closeEdit);
closeButtonAdd.addEventListener('click', closeAdd);
closeButtonImage.addEventListener('click', closeImage);


