let liked = document.querySelectorAll('.elements__like')  

liked.forEach(function (elem){
    elem.addEventListener('click', function(){    
        elem.classList.add('elements__like_liked')
    });
});

// for (let i = 0; i < liked.length; i++){

//     liked[i].addEventListener('click', function(){
    
//         liked[i].classList.add('elements__like_liked')
//     }) 
// };