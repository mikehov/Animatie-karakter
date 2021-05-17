const buttonMooi = document.getElementById('button_mooi');
const buttonMatig = document.getElementById('button_matig');
const buttonSlecht = document.getElementById('button_slecht');
const preLoader = document.getElementById('preloader');
const video = document.getElementById('video');


buttonMooi.addEventListener('click', speelMooi);
buttonMatig.addEventListener('click', speelMatig);
buttonSlecht.addEventListener('click', speelSlecht);
preLoader.addEventListener('click', preLoader);

function speelMooi() {
    video.src = "./videos/dance.mp4";
    console.log('run mooi');
}

function speelMatig() {
    video.src = "./videos/gift.mp4";
    console.log('run matig');
}

function speelSlecht() {
    video.src = "./videos/fight.mp4";
    console.log('sup slecht');
}