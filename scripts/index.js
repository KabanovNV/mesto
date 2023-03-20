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

let container = document.querySelector('.container');
let editButton = container.querySelector('.profile__edit-button');
let addButton = container.querySelector('.profile__add-button');
let closeButtonEdit = container.querySelector('.popup__close-button_edit');
let closeButtonAdd = container.querySelector('.popup__close-button_add');
let closeButtonImage = container.querySelector('.popup__close-button_image');
let popupEdit = container.querySelector('.popup_edit');
let popupAdd = container.querySelector('.popup_add');
let popupImage = container.querySelector('.popup_image-section');
let formElementAdd = document.getElementById('popupFormAdd');
let formElementEdit = document.getElementById('popupFormEdit');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('about');
let nameProfile = container.querySelector('.profile__user-name');
let jobProfile = container.querySelector('.profile__user-caption');
let newMesto = document.getElementById('new-mesto');
let newLink = document.getElementById('new-link');

const elementsList = document.querySelector('.elements');
const mestoTemplate = document.querySelector('.mesto-template').content;


function popupOpenEdit() {
    popupEdit.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}


function popupOpenAdd() {
    popupAdd.classList.add('popup_opened');
    newMesto.textContent = "Название";
    newLink.textContent = "Ссылка на картинку";
}


function popupOpenImage(name, link) {
    popupImage.querySelector('.popup__image').src = link;
    popupImage.querySelector('.popup__image-caption').textContent = name;
    popupImage.classList.add('popup_opacity_dark', 'popup_opened');
}


function popupCloseEdit() {
    popupEdit.classList.remove('popup_opened');
}


function popupCloseAdd() {
    popupAdd.classList.remove('popup_opened');
}


function popupCloseImage() {
    popupImage.classList.remove('popup_opened');
}


function handleSubmitEdit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popupCloseEdit();
}

function handleSubmitAdd(evt) {
  evt.preventDefault();
  initCards(newMesto.value, newLink.value);
  popupCloseAdd();


}

function delMesto(mesto){
    mesto.addEventListener('click', event => {
      event.target.closest('.mesto').remove();
  });
}


function likeMesto(mesto){
  mesto.addEventListener('click', event => {
    event.target.classList.toggle('mesto__like_liked');
  });  
}


function popupImg(mesto, name, link){
  mesto.addEventListener('click', event => {
    event.preventDefault();
    popupOpenImage(name, link);
  });
}


function initCards(name, link) {

  const mestoElement = mestoTemplate.cloneNode(true);
  const mestoLike = mestoElement.querySelector('.mesto__like');
  const mestoDelete = mestoElement.querySelector('.mesto__delete');
  const mestoImage = mestoElement.querySelector('.mesto__image');
  const mestoTitle = mestoElement.querySelector('.mesto__title');

    mestoImage.src = link;
    mestoImage.alt = name;
    mestoTitle.textContent = name;

    // Like
    likeMesto(mestoLike);

    // Удаление элемента
    delMesto(mestoDelete);

    // popup картинки
    popupImg(mestoImage, name, link);

    elementsList.prepend(mestoElement); 
}


initialCards.forEach( item => {
    initCards(item.name, item.link);
});

// formElement.forEach( elem => {
//   elem.addEventListener('submit', handleFormSubmit);
// })

formElementEdit.addEventListener('submit', handleSubmitEdit);
formElementAdd.addEventListener('submit', handleSubmitAdd);
editButton.addEventListener('click', popupOpenEdit);
addButton.addEventListener('click',popupOpenAdd)
closeButtonEdit.addEventListener('click', popupCloseEdit); 
closeButtonAdd.addEventListener('click', popupCloseAdd);
closeButtonImage.addEventListener('click', popupCloseImage);





