//Load Video
var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window.")
});

//Main
window.onload = function(){
var video = document.querySelector("#player1");
var currentVolume = 100;

//Play Button
var playButton = document.getElementById("play");
playButton.addEventListener("click",function(){
	video.play();
	volumeDisplay.innerHTML = currentVolume + "%";
	console.log("Play Video");
	console.log("The volume is "+ currentVolume +"%.")
	});


//Pause Button
var pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click",function(){
	video.pause();
	console.log("Pause Video");
	});

//Slow Down Button
var slowerButton = document.getElementById("slower");
var videoSpeed = 1;
slowerButton.addEventListener("click",function(){
	videoSpeed = videoSpeed * 0.9;
	videoSpeed = videoSpeed.toFixed(1);
	video.playbackRate = videoSpeed;
	console.log("The video speed is " + videoSpeed + "%");
});

//Faster Button
var fasterButton = document.getElementById("faster");
fasterButton.addEventListener("click", function(){
	videoSpeed = videoSpeed * 1.1;
	videoSpeed = videoSpeed.toFixed(1);
	video.playbackRate = videoSpeed;
	console.log("The video speed is " + videoSpeed + "%");
});

//Skip Button
var skipButton = document.getElementById("skip");
skipButton.addEventListener("click",function(){
	console.log("Current location " + video.currentTime);
	let skipTime = video.currentTime + 10;
    if (skipTime <= video.duration) {
        video.currentTime = skipTime;
        console.log("The video skipped ahead to " + skipTime + ".");
    } else {
        video.currentTime = 0;
        skipTime = 0;
        console.log("Restarting video");
    }
});

//Mute Button
var muteButton = document.getElementById("mute");
var muteButton = document.getElementById("mute");
var videoMute = document.getElementById("muteText");
var muteState = false;

muteButton.addEventListener("click", function () {
    muteState = !muteState;

    if (muteState) {
        video.muted = true;
        muteButton.innerHTML = "Unmute";
        console.log("The video is muted.");
    } else {
        video.muted = false;
        muteButton.innerHTML = "Mute";
        console.log("The video is unmuted.");
    }
});

//Volume Slider
var volumeSlider = document.getElementById("slider");
var volumeText = document.getElementById("volume");
var videoElement = document.getElementById('player1');
var storedVolume;

volumeSlider.addEventListener("input", function () {
    var volumeValue = volumeSlider.value;
    volumeText.innerHTML = volumeValue + "%";
    videoElement.volume = volumeValue / 100;
});

videoElement.addEventListener("pause", function () {
    storedVolume = videoElement.volume * 100;
});

videoElement.addEventListener("play", function () {
    if (typeof storedVolume !== 'undefined') {
        videoElement.volume = storedVolume / 100;
    }
});


//Old School Button
var oldSchoolButton = document.getElementById("vintage");
oldSchoolButton.addEventListener("click", function(){
	video.classList.add("oldSchool");
	console.log("The video style is old school")
})

//Original Button
var originalButton = document.getElementById("orig");
originalButton.addEventListener("click", function(){
	video.classList.remove("oldSchool");
	console.log("The video style is original")
})
}
