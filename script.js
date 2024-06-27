// document.addEventListener('DOMContentLoaded', function() {
//     const button = document.querySelector('.btn');
//     const modelBox = document.querySelector('.model_box');
//     const buttonClose = document.querySelector('.btn_2');

//     button.addEventListener('click', function() {
//         modelBox.classList.remove('hide');
//     });

//     buttonClose.addEventListener('click', function() {
//         modelBox.classList.add('hide');
//     });

//     document.addEventListener('keydown', function(event) {
//         if (event.key === 'Escape') {
//             modelBox.classList.add('hide');
//         }
//     });
// });





const button = document.getElementsByClassName('btn')[0];
const model = document.getElementsByClassName('model_box')[0];
const button_2 = document.getElementsByClassName('btn_2')[0];
button.addEventListener('click', function () {
    model.classList.remove('hide');

})
button_2.addEventListener('click', function () {
    model.classList.add('hide');
})
document.addEventListener('keydown', function(event){
    if(event.key === 13){
          model.classList.remove('hide');
    }
})


// document.addEventListener('DOMContentLoaded', function() {
//     const button = document.querySelector('.btn');
//     const model = document.querySelector('.model_box');
//     const buttonClose = document.querySelector('.btn_2');

//     button.addEventListener('click', function () {
//         model.classList.remove('hide');
//     });

//     buttonClose.addEventListener('click', function () {
//         model.classList.add('hide');
//     });

//     document.addEventListener('keydown', function(event) {
//         if (event.key === 'Escape') {
//             model.classList.add('hide');
//         }
//     });
});

