let particles = [];
let temperature = 7.5;
let targetFPS = 30;
let colour1 = [0, 0, 255];
let colour2 = [0, 255, 0];
let probability = 0.25;
let lagThreshold = 0.25;
let numParticles = 50;
function setup() {
  createCanvas(800, 800);
  //console.log(height);
  for (let i = 0; i < numParticles + 1; i++) {
    if (random(1) < probability) {
      particles.push(new Particle(random(5, 10), colour1, temperature, true));
    } else {
      particles.push(new Particle(random(5, 10), colour2, temperature, false));
    }
  }
  frameRate(targetFPS);
}

function draw() {
  background(220);
  if(frameRate() < lagThreshold * targetFPS){
    particles = [];
    for (let i = 0; i < numParticles + 1; i++) {
    if (random(1) < probability) {
      particles.push(new Particle(random(5, 10), colour1, temperature, true));
    } else {
      particles.push(new Particle(random(5, 10), colour2, temperature, false));
    }
  }
  }
  for (let i = 0; i < particles.length - 1; i++) {
    particles[i].show();
    if (particles[i].move()) {
      //console.log("particle" + i + "hit a wall");
    }
    for (let j = 0; j < particles.length; j++) {
      if (particles[i].collide(particles[j])) {
        particles.push(new Particle(random(5, 10), colour1, temperature, true));
      }
    }
  }
}
