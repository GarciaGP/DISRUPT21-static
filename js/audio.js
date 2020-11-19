const controlePlay = document.getElementById('audioSrc');
function enablePreload() { 
    controlePlay.preload = "auto";
    playEqualizer();
}

//AUDIO CONTROL
const btnEqualizer = document.querySelector('#btnEqualizer');

btnEqualizer.addEventListener('click', function (event) {

    event.preventDefault();

    var audioClass = document.querySelectorAll('.unmuted');

    if (audioClass.length === 1) {
        controlePlay.classList.remove('unmuted');
        controlePlay.classList.add('muted');
        muteAudio();
    } else {
        controlePlay.classList.remove('muted');
        controlePlay.classList.add('unmuted');
        unmuteAudio();
    }

    function muteAudio() {
        controlePlay.muted = true;
        pauseEqualizer();
    }

    function unmuteAudio() {
        controlePlay.muted = false;
        playEqualizer();
    }

});

// EQUALIZER
var bars = [].slice.call(document.querySelectorAll('.equalizer-bar'))
var anime;

function frame() {
    bars.forEach(function (bar, index) {
        bar.style.transform = 'scaleY(' + Math.random() + ')';
    })
}

function playEqualizer() {
    anime = setInterval(frame, 100);
}

function pauseEqualizer() {
    clearInterval(anime);
}

enablePreload();