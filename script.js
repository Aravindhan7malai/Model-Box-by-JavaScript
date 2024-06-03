const button = document.getElementsByClassName('btn')[0];
const model = document.getElementsByClassName('model_box')[0];
const button_2 = document.getElementsByClassName('btn_2')[0];
button.addEventListener('click', function () {
    model.classList.remove('hide');

})
button_2.addEventListener('click', function (e) {
    model.classList.add('hide');
    if(e.key==8){
        model.classList.remove('hide');
    }
})
