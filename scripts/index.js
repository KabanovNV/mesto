import {initialCards} from './constants.js';

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


let nameInput = container.querySelector('.popup__input-name'); 
let jobInput = container.querySelector('.popup__input-about'); 
let nameProfile = container.querySelector('.profile__user-name');
let jobProfile = container.querySelector('.profile__user-caption');
let newMesto = container.querySelector('.popup__input-new-mesto'); 
let newLink = container.querySelector('.popup__input-new-link');


const openPopup = popupForm => {
  popupForm.classList.add('popup_opened');
}

const closePopup = popupForm => {
  popupForm.classList.remove('popup_opened');
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
  initCard(newMesto.value, newLink.value);
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

function initCard(name, link) {
  const mestoElement = mestoTemplate.cloneNode(true);
  createCard(mestoElement, name, link);
  elementsList.prepend(mestoElement); 
}


initialCards.forEach( item => {
    initCard(item.name, item.link);
});

formElementEdit.addEventListener('submit', handleSubmitEdit);
formElementAdd.addEventListener('submit', handleSubmitAdd);
editButton.addEventListener('click', openEdit);
addButton.addEventListener('click',openAdd)
closeButtonEdit.addEventListener('click', closeEdit); 
closeButtonAdd.addEventListener('click', closeAdd);
closeButtonImage.addEventListener('click', closeImage);
