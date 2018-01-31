// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
// gloabal variables which we need to define
var k=3, time = 0;
// slider object definition
var slider = document.getElementById("sliderval");

function init() {
  for(var i = 0;i<6;i++){
    volLevels[i]="vl"+ i;
  }

  // if we wanna see the output we can log the data
  // console.log(volLevels);
  // following loop initializes the volume level

  for (var i = 0;i<3; i++) {
    document.getElementById(volLevels[i]).style.backgroundColor="#9f5cc4";
  }
    document.getElementById("time-elapsed").innerHTML = secondsToMs(time);
};

function volUp() {
  k+=1;
  // we add an if condition to account for boundary cases
  if(k>6){k=6;}
  for (var i = 0;i<k; i++){
    document.getElementById(volLevels[i]).style.backgroundColor="#9f5cc4";
  }
}

function volDown() {
  k-=1;
  // if condition to account for boundary cases
  if(k<0){k=0;}
  for (var i = volLevels.length-1;i>=k; i--) {
    document.getElementById(volLevels[i]).style.backgroundColor="transparent";
  }
}

function switchPlay() {
  if(document.getElementById("playpause").innerHTML=="pause"){
    document.getElementById("playpause").innerHTML="play_arrow";
  }
  else{
    document.getElementById("playpause").innerHTML="pause";
  }
}

function nextSong() {
  // local variables
  var num,i;
  // we set the time to -1, this makes sure the timer starts from zero when the song changes(accounting for the delays), a condition is added below to make the timer still display 0:00
  time = -1;
  for (i = 0; i < tracklist.length; i++) {
    if(tracklist[i]==document.getElementById("songname").innerHTML){
      num = (i+1)%(tracklist.length);
      }
    }
  document.getElementById("songname").innerHTML = tracklist[num];
}

function prevSong() {
	// Your code goes here
  var num,i;
  // same as above, we set the time to -1
  time = -1;
  for (i = 0; i < tracklist.length; i++) {
    if(tracklist[i]==document.getElementById("songname").innerHTML){
      num = (tracklist.length+i-1)%(tracklist.length);
      }}
      document.getElementById("songname").innerHTML = tracklist[num];
      
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

function set() {
  // updates the value of the variable "time"
  time = event.target.value;
}

function timeup(){
  if(time >= 180){
    nextSong();
  }
  // increment the time only if the play button is pressed
    if(document.getElementById("playpause").innerHTML=="pause"){
    time++;
  }
  // we ad the if condition to ignore negative value of time, refer line 54
  if(time>=0){
    document.getElementById("time-elapsed").innerHTML = secondsToMs(time);
    slider.value = time;
  }
}

init();
// calling timup() every 1s
setInterval(timeup,1000);
// adding th elistener to slider change
sliderval.addEventListener("input",set);
