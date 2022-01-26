var btn=document.querySelector('.btn');
var aleart=document.querySelector('.hidden');
var close=document.querySelector('.close-btn');

let timer;

btn.addEventListener('click',function(){
     showAlertBox();
});

close.addEventListener('click',function(){
    hideAlertBox()
})

function showAlertBox(){
    aleart.classList.remove('hide');
    aleart.classList.add('show');

    if(aleart.classList.contains('hidden')){
       aleart.classList.remove('hidden');
    }
    timer = setTimeout(function(){
        hideAlertBox()
    },5000)
}

function hideAlertBox(){
    aleart.classList.remove('hide');
}


function hideAlertBox(){
    aleart.classList.remove('show');
    aleart.classList.add('hide');
}