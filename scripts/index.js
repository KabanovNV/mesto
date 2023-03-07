let container = document.querySelector('.container');

let editButton = container.querySelector('.profile__edit-button');

let closeButton = container.querySelector('.popup__close-button');

let popup = container.querySelector('.popup')

let formElement = container.querySelector('.popup__container');

let nameInput = document.getElementById('name');

let jobInput = document.getElementById('about');

let nameProfile = container.querySelector('.profile__user-name');

let jobProfile = container.querySelector('.profile__user-caption');

function popupOpen() {

    popup.classList.add('popup_opened');

    nameInput.value = nameProfile.textContent;

    jobInput.value = jobProfile.textContent;

}

function popupClose() {

    popup.classList.remove('popup_opened');

}

function handleFormSubmit(evt) {
    
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;

    jobProfile.textContent = jobInput.value;

    popupClose()

}

formElement.addEventListener('submit', handleFormSubmit);

editButton.addEventListener('click', popupOpen);

closeButton.addEventListener('click', popupClose); 

