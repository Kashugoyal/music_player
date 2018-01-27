// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = ["vl0","vl1","vl2","vl3","vl4","vl5"];
var k=3, time = 0, timer=0;
var slider = document.getElementById("sliderval");


function init() {
	// Your code goes here #9f5cc4
  for (var i = 0;i<3; i++) {
    document.getElementById(volLevels[i]).style.backgroundColor="#9f5cc4";
  }
    document.getElementById("time-elapsed").innerHTML = secondsToMs(time);
};

function volUp() {
	// Your code goes here
  k+=1;
  if(k>6){k=6;}
  for (var i = 0;i<k; i++) {
    document.getElementById(volLevels[i]).style.backgroundColor="#9f5cc4";
  }
}

function volDown() {
	// Your code goes here
  k-=1;
  if(k<0){k=0;}
  for (var i = volLevels.length-1;i>=k; i--) {
    document.getElementById(volLevels[i]).style.backgroundColor="transparent";
  }
}

function switchPlay() {
	// Your code goes here

  if(document.getElementById("playpause").innerHTML=="pause"){
    document.getElementById("playpause").innerHTML="play_arrow";
  }
  else{
    document.getElementById("playpause").innerHTML="pause";
  }
}

function nextSong() {
	// Your code goes here
  var num,i;
  for (i = 0; i < tracklist.length; i++) {
    if(tracklist[i]==document.getElementById("songname").innerHTML){
      num = (i+1)%(tracklist.length);
      }}
      document.getElementById("songname").innerHTML = tracklist[num];
      time = 0;

}

function prevSong() {
	// Your code goes here
  var num,i;
  for (i = 0; i < tracklist.length; i++) {
    if(tracklist[i]==document.getElementById("songname").innerHTML){
      num = (tracklist.length+i-1)%(tracklist.length);
      }}
      document.getElementById("songname").innerHTML = tracklist[num];
      time = 0;
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

function set() {
  // body...
  time = event.target.value;
}

function timeup(){
  if(time == 180){
    nextSong();
  }
  document.getElementById("time-elapsed").innerHTML = secondsToMs(time);
  slider.value = time;

  if(document.getElementById("playpause").innerHTML=="pause"){
    time++;
  }
}

init();
setInterval(timeup,1000);
sliderval.addEventListener("input",set);
