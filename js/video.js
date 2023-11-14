var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
    console.log("autoplay is set to " + video.autoplay);
    console.log ("loop is set to " + video.loop);

//Play Button
var playButton = document.querySelector("#play");
playButton.addEventListener("click", function() {
video.play();
console.log("video playing ");});

//Pause Button

});



