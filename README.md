# Musical Fractals
Generates 3D, animated fractals by analyzing the waveform of mp3 files. By utilizing the Web Audio API, I was able to generate fractals based off of browser audio, completely client side in the browser!

## About

The fractals are generated using Hopalong Orbits.
These orbits are generated iterating this simple formula:

`(x, y) -> (y - sign(x)*sqrt(abs(b*x - c)), a -x )`

Where a, b, c are parameters seeded by analyzing the waveform of the browser's audio. This equation is known as the 'Hopalong Attractor'.

3D rendering is done using WebGL and three.js

## Credit

The graphical portion of this project was created by [Iacopo Sassarini](https://plus.google.com/+IacopoSassarini). In his implementation, he used random seeds to generate and render random Hapolong Orbital fractals. I modified his code to use the waveform of browser audio as a seed to generate fractals. 
