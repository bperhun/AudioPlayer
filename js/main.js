const audio = new Audio();

const playlist = [];

playlist.push({
    src: "audio/sound1.mp3"
}, {
        src: "audio/sound2.mp3"
    }, {
        src: "audio/sound3.mp3"
    }, {
        src: "audio/sound4.mp3"
    });


const playAudio = document.querySelector('.play'),
    pauseAudio = document.querySelector('.pause'),
    nextSong = document.querySelector('.fwd'),
    prevSong = document.querySelector('.rew'),
    volume = document.querySelector('#audioVolume'),
    songTime = document.querySelector('#songTime'),
    songRewind = document.querySelector('#songRewind'),
    songPlaylist = document.querySelector('#songPlaylist');

let currentSong = playlist[0].src;
audio.src = currentSong;
let arrayNumber = 0;

//Function for play button
playAudio.addEventListener('click', function () {
    audio.play();
});

//Function for pause button
pauseAudio.addEventListener('click', function () {
    audio.pause();
});

//Function for switching songs forward
nextSong.addEventListener('click', function () {
    if (arrayNumber <= playlist.length - 1) {
        arrayNumber++;
        audio.src = playlist[arrayNumber].src;
        audio.play();
    } else {
        arrayNumber = 0;
        audio.src = playlist[arrayNumber].src;
        audio.play();
        alert("Плейлист грає з початку");
    }

});

//Function to switch songs back
prevSong.addEventListener('click', function () {
    if (arrayNumber < playlist.length - 1 && arrayNumber > 0) {
        arrayNumber--;
        audio.src = playlist[arrayNumber].src;
        audio.play;
    } else {
        arrayNumber = playlist.length - 1;
        audio.src = playlist[arrayNumber].src;
        audio.play();
        alert('Це останній трек в цьому плеєрі');
    }
});

//Function for switching songs from the list
songPlaylist.addEventListener('click', function () {
    arrayNumber = this.value;
    audio.src = playlist[arrayNumber].src;
    audio.play();
});

//Function to change the volume
volume.addEventListener('change', function () {
    if (this.value == this.min) {
        audio.volume = 0;
    } else if (this.value == this.max) {
        audio.volume = 1;
    } else {
        audio.volume = volume.value;
    }

});

//Function for displaying song time
audio.addEventListener('timeupdate', function () {
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt((audio.currentTime / 60) % 60);
    s = (s >= 10) ? s : "0" + s;
    m = (m >= 10) ? m : "0" + m;
    songTime.innerHTML = m + ':' + s;
});

//Rewind function
songRewind.addEventListener('change', function () {
    audio.currentTime = songRewind.value;
});
























