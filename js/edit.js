let container = document.querySelector('.container');

let editButton = container.querySelector('.profile__edit-button');

let closeButton = container.querySelector('.popup__close-icon')

let formElement = container.querySelector('.popup');

let nameInput = document.getElementById('name');

let jobInput = document.getElementById('about');


function popupOpen() {

    formElement.classList.add('popup__opened');

    nameInput.value = container.querySelector('.profile__user-name').textContent;

    jobInput.value = container.querySelector('.profile__user-caption').textContent;

}

function handleFormSubmit(evt) {
    
    evt.preventDefault();

    container.querySelector('.profile__user-name').textContent = nameInput.value;

    container.querySelector('.profile__user-caption').textContent = jobInput.value;

    popupClose()

}

formElement.addEventListener('submit', handleFormSubmit);

editButton.addEventListener('click', popupOpen);

closeButton.addEventListener('click', function(){

    formElement.classList.remove('popup__opened'); 

});
