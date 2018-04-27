/*
  audioseed.js

  Written by Peter Cunha
  petercunha.com

  Uses Web Audio API to generate a seed for Hopalong Fractal constants
  based on the current audio that is playing in the webpage.
*/



// Seeds for orbit parameters
var seedA = 0.5;
var seedB = 0.5;
var seedC = 0.5;
var seedD = 0.5;
var seedE = 0.5;

// Generate new orbit parameters based on seeds
function shuffleParams() {
  a = A_MIN + seedA * (A_MAX - A_MIN);
  b = B_MIN + seedB * (B_MAX - B_MIN);
  c = C_MIN + seedC * (C_MAX - C_MIN);
  d = D_MIN + seedD * (D_MAX - D_MIN);
  e = E_MIN + seedE * (E_MAX - E_MIN);
}

// Connect to audio source and innitialize Web Audio API
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var audioElement = document.getElementById('audioElement');
var audioSrc = audioCtx.createMediaElementSource(audioElement);
var analyser = audioCtx.createAnalyser();

// Bind our analyser to the media element source.
audioSrc.connect(analyser);
audioSrc.connect(audioCtx.destination);

// Set buffer length and frequency array
analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);

// Generates seeds for fractal by analyzing frequency of audio source.
function genSeeds() {
  analyser.getByteTimeDomainData(dataArray);
  sliceSize = Math.floor(bufferLength / 5);

  var sum = 0;
  var scaleFactor = 138.0;

  // Seed A
  for (var i = 0; i < sliceSize; i++) {
    var v = dataArray[i] / scaleFactor;
    if (v > 1) { v = 1 };
    sum += v;
  }
  seedA = sum / (bufferLength/5)
  sum = 0;

  // Seed B
  for (var i = sliceSize; i < 2*sliceSize; i++) {
    var v = dataArray[i] / scaleFactor;
    if (v > 1) { v = 1 };
    sum += v;
  }
  seedB = sum / sliceSize
  sum = 0;

  // Seed C
  for (var i = 2*sliceSize; i < 3*sliceSize; i++) {
    var v = dataArray[i] / scaleFactor;
    if (v > 1) { v = 1 };
    sum += v;
  }
  seedC = sum / sliceSize
  sum = 0;

  // Seed D
  for (var i = 3*sliceSize; i < 4*sliceSize; i++) {
    var v = dataArray[i] / scaleFactor;
    if (v > 1) { v = 1 };
    sum += v;
  }
  seedD = sum / sliceSize
  sum = 0;

  // Seed E
  for (var i = 4*sliceSize; i < 5*sliceSize; i++) {
    var v = dataArray[i] / scaleFactor;
    if (v > 1) { v = 1 };
    sum += v;
  }
  seedE = sum / sliceSize
  sum = 0;

  console.log(`A: ${seedA}, B: ${seedB}, C: ${seedC}, D: ${seedD}, E: ${seedE}`);
}
