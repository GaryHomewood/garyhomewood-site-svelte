/* eslint-disable no-new */
new p5(( p5 ) => {

  function drawBars(x, y, w, h, spacing) {
    for (let xLine = -w/2; xLine < w/2; xLine +=spacing) {
        p5.line(xLine, -h, xLine, h)
    }
  }

  p5.setup = () => {
    const canvasW = (p5.windowWidth > 480) ? 480 : p5.windowWidth;
    const canvasH = (p5.windowHeight > 800) ? 800 : p5.windowHeight;
    p5.createCanvas(canvasW, 800);
    p5grain.setup({ instance: p5 });

    const bg = '#fffff0' // ivory
    p5.background(bg);
    p5.stroke('black')
    p5.noFill();
    [...Array(30)].forEach(() => {
      p5.push()
      p5.translate(
        p5.random(p5.width * 0.25, p5.width * 0.75),
        p5.random(p5.height * 0.25, p5.height * 0.75)
      )
      p5.rotate(p5.radians(p5.random([0,90])))
      drawBars(0, 0, p5.random(100), p5.random(150), p5.random(2, 6))
      p5.pop()
    });

    p5.fill('#ff000066');
    p5.noStroke();
    [...Array(5)].forEach(() => {
      p5.push()
      p5.translate(
        p5.random(p5.width * 0.25, p5.width * 0.75),
        p5.random(p5.height * 0.25, p5.height * 0.75)
      )
      p5.circle(0, 0, p5.random(40, 90))
      p5.pop()
    });

    p5.stroke('black');
    [...Array(5)].forEach(() => {
      p5.push()
      p5.translate(
        p5.random(p5.width * 0.25, p5.width * 0.75),
        p5.random(p5.height * 0.25, p5.height * 0.75)
      )
      p5.rotate(p5.radians(p5.random([0,90])))
      let x = p5.random(100, 400)
      let y = 0
      p5.strokeCap(p5.SQUARE)
      p5.strokeWeight(p5.random(5, 10))
      p5.line(-x, -y, x, y)
      p5.pop()
    })

    p5.granulateSimple(8);
  };
}, 'sketch-canvas');
