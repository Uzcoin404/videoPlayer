const play = document.querySelectorAll('.play');
const video = document.querySelector('.video');
const videoSpendTime = document.querySelector('.video__spendTime');
const videoRemainingTime = document.querySelector('.video__remainingTime');
const videoRange = document.querySelector('.video__range');
const volume = document.querySelector('#volume__icon');
const videoVolume = document.querySelector('.volume');
const volumeValue = document.querySelector('.volume');
const videoStop = document.querySelector('.stop');
const screen = document.querySelector('.screen');
const minimize = document.querySelector('.minimize');
const videoSettings = document.querySelector('.videoSettings');
const videoBlog = document.querySelector('.video__blog');
const videoMain = document.querySelector('.video__main');
// Video play

play.forEach(ply => { 
    ply.addEventListener('click', function(){
        videoBlog.classList.toggle('active');
        if (videoBlog.classList.contains('active')) {
            video.play();
        }
        else{
            videoBlog.classList.remove('active');
            video.pause();
        }
    });
});
video.addEventListener('click', function(){
    if (videoBlog.classList.contains('active')) {
        video.pause();
        videoBlog.classList.remove('active');
    }
    else{
        video.play();
        videoBlog.classList.add('active');
    }
})
// video barTime
videoRange.value=video.currentTime;
video.addEventListener('timeupdate',function(){
    videoRange.value = (video.currentTime / video.duration) * 100;
    let videoMinutes = Math.floor(video.currentTime / 60);
    let videoSeconds = Math.floor(video.currentTime - videoMinutes * 60);
    videoSpendTime.innerHTML = `${videoMinutes < 10 ? "0" + videoMinutes : videoMinutes}:${videoSeconds < 10 ? "0" + videoSeconds : videoSeconds}`
    let videoDurationMin = Math.floor(video.duration / 60);
    let videoDurationSec = Math.floor(video.duration - videoDurationMin * 60);
    videoRemainingTime.innerHTML = `${videoDurationMin < 10 ? "0" + videoDurationMin : videoDurationMin}:${videoDurationSec < 10 ? "0" + videoDurationSec : videoDurationSec}`
});
videoRange.addEventListener('click', function(e){
    let videoProgressTime = (e.offsetX / this.offsetWidth) * video.duration;
    video.currentTime = videoProgressTime;
});
// Video Volume

let val=0;
video.volume = videoVolume.value;
videoVolume.addEventListener('change', function(){
    video.volume = this.value;
    if (this.value == 0) {
        volume.classList.add('active')
    }
    else{
        volume.classList.remove('active');
    }
});
volume.addEventListener('click', function(){
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
        val=video.volume;
        video.volume = 0;
        videoVolume.value = 0;
    }
    else{
        video.volume = val;
        videoVolume.value = val;
    }
});

// Video functions
screen.addEventListener('click', function(){
    video.requestFullscreen();
})
minimize.addEventListener('click', function(){
    videoMain.classList.toggle('minimize')
});
videoSettings.addEventListener('click', function(){
    
});
videoStop.addEventListener('click', function(){
    video.currentTime = 0;
    video.pause();
    videoBlog.classList.remove('active');
})
const shareBtn = document.querySelector('.share-btn');
const videoPlayAgain = document.querySelector('.video__playAgain');
const shareOptions = document.querySelector('.share-options');
const speedIndicator = document.querySelector('.speed__indicator');
const playbackSpeedIndicator = document.querySelector('.playbackSpeed__indicator');
const playbackSpeed  = document.querySelector('.playbackSpeed__text');
const playbackSpeedCustomer  = document.querySelector('.playbackSpeed__customer');
const playbackSpeedCustom = document.querySelector('.playbackSpeed__text input');
shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
    document.querySelector('.share').classList.toggle('active');
})
// Video speed 

playbackSpeed.addEventListener('click', function(){
    video.classList.toggle('speedUp');
    if (video.classList.contains('speedUp')) {
        video.playbackRate = 2;
        playbackSpeedIndicator.innerHTML = '2x'
        speedIndicator.innerHTML = '2x'
    }
    else{
        video.playbackRate = 1;
        playbackSpeedIndicator.innerHTML = '1x'
        speedIndicator.innerHTML = '1x'
    }
    
});
playbackSpeedCustom.addEventListener('click', function(){
    video.playbackRate = playbackSpeedCustom.value
    speedIndicator.innerHTML = playbackSpeedCustom.value + 'x'
});
function videoAgain(){
    video.classList.toggle('loop')
    videoPlayAgain.classList.toggle('active')
    if (video.classList.contains('loop')) {
        video.setAttribute('loop', '');
    }
    else{
        video.removeAttribute('loop')
    }
}