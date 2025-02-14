let mySound;
// function for preloading assets 
function preload() {
  soundFormats('mp3', 'ogg'); // format sounds support
  mySound = loadSound('01. Ground Theme.mp3'); // connect sound from directory
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}

// function listen when user pressed in canvas
function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}