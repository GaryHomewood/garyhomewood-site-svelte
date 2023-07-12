/* eslint-disable no-new */
new p5(( p5 ) => {

  class Particle {
    constructor() {
      this.margin = 32;
      this.x = p5.random(this.margin, p5.width - this.margin);
      this.y = p5.random(this.margin, p5.height - this.margin);
      this.r = p5.random(1,8);

      this.xSpeed = p5.random(-2,2);
      this.ySpeed = p5.random(-2,3);

      this.xSpeed = p5.random(-0.75, 0.75);
      this.ySpeed = p5.random(-0.75, 1);
    }

    drawParticle() {
      p5.noFill()
      p5.noStroke()
      p5.circle(this.x,this.y,p5.random(1,8));
    }

    moveParticle() {
      // Reverse direction at edges
      if (this.x < this.margin || this.x > p5.width - this.margin) this.xSpeed *= -1;
      if (this.y < this.margin || this.y > p5.height - this.margin) this.ySpeed *= -1;

      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }

    // Create and draw the connections(lines) between particles
    // which are less than a certain distance apart
    joinParticles(particles) {
      particles.forEach(element =>{
        const dx = this.x - element.x
        const dy = this.y - element.y
        const distance = Math.sqrt(dx*dx + dy*dy);

        if (distance < 100) {
          const lineColor = p5.color('#fffff0')
          const alpha = p5.map(distance, 0, 100, 200, 0)
          lineColor.setAlpha(alpha)
          p5.strokeWeight(p5.random(2))
          p5.stroke(lineColor)
          p5.line(this.x, this.y, element.x, element.y);
        }
      });
    }
  }

  let bg
  let palette
  const particles = [];
  let canvasW
  let canvasH
  p5.setup = () => {
    palette = p5.random(window.P5.palettes)
    canvasW = (p5.windowWidth > 480) ? 480 : p5.windowWidth;
    canvasH = (p5.windowHeight > 800) ? 800 : p5.windowHeight;
    p5.createCanvas(canvasW, 800);

    for (let i = 0; i < p5.width/10; i += 1){
      particles.push(new Particle());
    }

    p5.pixelDensity(1)
    bg = p5.random(palette)
    p5.background(bg);
  };

  p5.draw = () => {
    p5.noStroke()
    p5.fill(bg)
    p5.rect(0, 0, canvasW, 32)
    p5.rect(0, canvasH - 32, canvasW, 32)
    p5.noFill()

    for (let i = 0; i < particles.length; i += 1) {
      particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i));
      particles[i].drawParticle();
    }

    if (p5.frameCount > 200) p5.noLoop()
  };
}, 'sketch-canvas');
