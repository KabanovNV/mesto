import {initialCards,
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

function openEdit() {
    openPopup(popupEdit);
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}


function openAdd() {
    openPopup(popupAdd);
}


function openImage(name, link) {
    popupImage.querySelector('.popup__image').src = link;
    popupImage.querySelector('.popup__image').alt = name;
    popupImage.querySelector('.popup__image-caption').textContent = name;
    openPopup(popupImage);
}


function closeEdit() {
    closePopup(popupEdit);  
}


function closeAdd() {
    closePopup(popupAdd);  
    formElementAdd.reset();
}


function closeImage() {
    closePopup(popupImage);
}


function handleSubmitEdit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closeEdit();
}

function handleSubmitAdd(evt) {
  evt.preventDefault();
  renderCard(newMesto.value, newLink.value);
  closeAdd();
}

function initDelMesto(mestoDeleteButton){
    mestoDeleteButton.addEventListener('click', event => {
      event.target.closest('.mesto').remove();
  });
}

function initLikeMesto(mestoLikeButton){
  mestoLikeButton.addEventListener('click', event => {
    event.target.classList.toggle('mesto__like_liked');
  });  
}

function initOpenPopupImg(mestoImg, name, link){
  mestoImg.addEventListener('click', event => {
    event.preventDefault();
    openImage(name, link);
  });
}

function createCard(elem, name, link) {
  const mestoLike = elem.querySelector('.mesto__like');
  const mestoDelete = elem.querySelector('.mesto__delete');
  const mestoImage = elem.querySelector('.mesto__image');
  const mestoTitle = elem.querySelector('.mesto__title');

    mestoImage.src = link;
    mestoImage.alt = name;
    mestoTitle.textContent = name;

    // Like
    initLikeMesto(mestoLike);

    // Удаление элемента
    initDelMesto(mestoDelete);

    // popup картинки
    initOpenPopupImg(mestoImage, name, link);
}

function renderCard(name, link) {
  const mestoElement = mestoTemplate.cloneNode(true);
  createCard(mestoElement, name, link);
  elementsList.prepend(mestoElement); 
}

function closeOnEsc(evt) {
  if (evt.keyCode === ESC_CODE) {
    const popupClose = document.querySelector('.popup_opened');
    closePopup(popupClose);
  }
}

initialCards.forEach( item => {
    renderCard(item.name, item.link);
});

popupEdit.addEventListener('keydown', closeOnEsc);
formElementEdit.addEventListener('submit', handleSubmitEdit);
formElementAdd.addEventListener('submit', handleSubmitAdd);
editButton.addEventListener('click', openEdit);
addButton.addEventListener('click',openAdd)
closeButtonEdit.addEventListener('click', closeEdit); 
closeButtonAdd.addEventListener('click', closeAdd);
closeButtonImage.addEventListener('click', closeImage);

closePopupOverlay.forEach(item => {
  item.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target.closest('.popup'));
    }
  })
})
