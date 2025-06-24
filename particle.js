class Particle {
  constructor(size, colour, maxVel, canFormCrystals) {
    this.size = size;
    this.colour = colour;
    this.crystallized = false;
    this.canFormCrystals = canFormCrystals;
    //console.log(canvasH);
    this.maxVel = maxVel;
    this.velx = random(-maxVel, maxVel);
    this.vely = random(-maxVel, maxVel);
    this.x = random(this.size, width - this.size);
    this.y = random(this.size, height - this.size);
  }

  show() {
    fill(this.colour[0], this.colour[1], this.colour[2]);
    circle(this.x, this.y, this.size * 2);
    //this.move();
  }

  move() {
    if (!this.crystallized) {
      this.x += this.velx;
      this.y += this.vely;
      if (this.x < this.size) {
        this.x = width - this.size;
        return true;
      }
      if (this.x > width - this.size) {
        this.x = this.size;
        return true;
      }
      if (this.y < this.size) {
        this.y = height - this.size;
        return true;
      }
      if (this.y > height - this.size) {
        this.y = this.size;
        return true;
      }
      // if(this.x < 0 || this.x > width){
      //   this.x = width/2;
      // }
      // if(this.y < 0 || this.y > height){
      //   this.y = height/2;
      // }
      return false;
    }
  }

  collide(other) {
    if (!this.crystallized) {
      if (dist(this.x, this.y, other.x, other.y) < this.size + other.size) {
        if (this == other) {
          return false;
        }
        if (this.canFormCrystals && other.canFormCrystals) {
          this.crystallized = true;
        }
        this.velx = random(-this.maxVel, this.maxVel);
        this.vely = random(-this.maxVel, this.maxVel);
        return this.crystallized;
      }
    }
  }
}
