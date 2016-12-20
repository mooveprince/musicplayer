window.addEventListener ('keydown', playMusic);

const keys = document.querySelectorAll ('.keys');
keys.forEach (key => key.addEventListener ('transitionend', removeTransistion) );

function playMusic (e) {
    var keyCode = e.keyCode;

    var audio = document.querySelector (`audio[data-key="${keyCode}"]`);
    var key = document.querySelector (`div[data-key="${keyCode}"]`);

    key.classList.add ('playing');

    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
}

function removeTransistion (e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}