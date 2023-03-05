let container = document.querySelector('.container');

let editButton = container.querySelector('.profile__edit-button');

let closeButton = container.querySelector('.popup__close-icon')

let formElement = container.querySelector('.popup');

let nameInput = document.getElementById('name');

let jobInput = document.getElementById('about');

let liked = document.querySelectorAll('.elements__like');  



function popupOpen() {

    formElement.classList.add('popup_opened');

    nameInput.value = container.querySelector('.profile__user-name').textContent;

    jobInput.value = container.querySelector('.profile__user-caption').textContent;

}

function popupClose() {

    formElement.classList.remove('popup_opened');

}

function handleFormSubmit(evt) {
    
    evt.preventDefault();

    container.querySelector('.profile__user-name').textContent = nameInput.value;

    container.querySelector('.profile__user-caption').textContent = jobInput.value;

    popupClose()

}

liked.forEach(function (elem){
    elem.addEventListener('click', function(){    
        elem.classList.add('elements__like_liked');
    });
});

// for (let i = 0; i < liked.length; i++){

//     liked[i].addEventListener('click', function(){
    
//         liked[i].classList.add('elements__like_liked')
//     }) 
// };

formElement.addEventListener('submit', handleFormSubmit);

editButton.addEventListener('click', popupOpen);

closeButton.addEventListener('click', function(){

    formElement.classList.remove('popup_opened'); 

});
