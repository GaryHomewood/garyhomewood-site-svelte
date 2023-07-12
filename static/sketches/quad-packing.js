/* eslint-disable no-new */
new p5(( p5 ) => {
  let palette = p5.random(window.P5.palettes)
  let quads = []
  let minSize
  let maxSize
  let padding
  const totalQuads = 260
  const createQuadAttempts = 100

  p5.setup = () =>  {
    const canvasW = (p5.windowWidth > 480) ? 480 : p5.windowWidth;
    const canvasH = (p5.windowHeight > 800) ? 800 : p5.windowHeight;
    p5.createCanvas(canvasW, 800);
    p5grain.setup({ instance: p5 });
    p5.noFill()
    p5.noLoop()
    p5.rectMode(p5.CENTER)
    let bg = p5.random(palette)
    p5.background(bg);
    p5.stroke(p5.random(palette))
    p5.strokeWeight(0.9);
    p5.translate(p5.width/2, p5.height/2)

    // Pack quads in the container
    minSize = 8
    maxSize = 80
    padding = 4
    quads = p5.quadPack(320, 620)

    // Pack each of the quads with more quads
    quads.forEach((/** @type {{ w: number; x: any; y: any; h: number; }} */ quad) => {
      p5.push()
      if (quad.w > 20) {
        p5.translate(quad.x, quad.y)
        minSize = 5
        maxSize = 20
        padding = 2
        p5.quadPack(quad.w - 12, quad.h - 12)
      }
      p5.pop()
    })

    p5.granulateSimple(7);
  }

  p5.quadPack = (/** @type {number} */ containerW, /** @type {number} */ containerH, padding = 2) => {
    quads = []

    ;[...Array(totalQuads)].forEach(() => {
      const quad = p5.getQuad(containerW, containerH)
      if (quad != null) quads.push(quad)
    })

    quads.forEach((quad) => {
      // drawingContext.filter = "blur(" + int(random(1.5)) + "px)"
      p5.fill(p5.shadeColor(p5.random(palette), p5.random(30)))
      p5.stroke(p5.random(palette))

      if (quad.w < 10) {
        p5.circle(quad.x, quad.y, quad.w)
      } else {
        p5.rect(
          quad.x,
          quad.y,
          quad.w - padding,
          quad.h - padding,
            3
        )
      }
    })

    return quads
  }

  p5.getQuad = (containerW, containerH) => {
    let newQuad = {}
    let quadCanBeDrawn = false
    let aspectRatio = p5.random([1, 9/16, 16/9])

    // Attempt to draw the smallest size quad at a random point in the container
    for (let tries = 0; tries < createQuadAttempts; tries++) {
      let x = p5.random(-containerW/2, containerW/2)
      let y = p5.random(-containerH/2, containerH/2)

      newQuad = {
        x,
        y,
        size: minSize,
        w: minSize,
        h: minSize * aspectRatio
      }

      if (p5.quadOverlaps(newQuad)) {
        continue;
      } else {
        quadCanBeDrawn = true;
        break;
      }
    }

    if (!quadCanBeDrawn) return null;

    for (let size = minSize; size < maxSize; size++) {
      newQuad.w = size;
      newQuad.h = size * aspectRatio;

      if (p5.quadOverlaps(newQuad)){
        newQuad.w--;
        newQuad.h--
        break;
      }
    }

    return newQuad
  }

  p5.quadOverlaps = (newQuad) => {
    for(let i = 0; i < quads.length; i++) {
      let otherQuad = quads[i]
      if (p5.quadCanBeDrawn(
        newQuad.x,
        newQuad.y,
        newQuad.w,
        newQuad.h,
        otherQuad.x,
        otherQuad.y,
        otherQuad.w,
        otherQuad.h
      )) return true
    }
    return false
  }

  p5.quadCanBeDrawn = (r1x, r1y, r1w, r1h, r2x, r2y, r2w, r2h) => {
    // are the sides of one rectangle touching the other?
    let orig1X = r1x - r1w/2
    let orig1Y = r1y - r1h/2
    let orig2X = r2x - r2w/2
    let orig2Y = r2y - r2h/2

    if (orig1X + r1w >= orig2X &&    // r1 right edge past r2 left
        orig1X <= orig2X + r2w &&    // r1 left edge past r2 right
        orig1Y + r1h >= orig2Y &&    // r1 top edge past r2 bottom
        orig1Y <= orig2Y + r2h) {    // r1 bottom edge past r2 top
      return true;
    }

    return false;
  }

  p5.shadeColor = (color, percent) => {

      var R = parseInt(color.substring(1,3),16);
      var G = parseInt(color.substring(3,5),16);
      var B = parseInt(color.substring(5,7),16);

      R = parseInt(R * (100 + percent) / 100);
      G = parseInt(G * (100 + percent) / 100);
      B = parseInt(B * (100 + percent) / 100);

      R = (R<255)?R:255;
      G = (G<255)?G:255;
      B = (B<255)?B:255;

      var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
      var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
      var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

      return "#"+RR+GG+BB;
  }
}, 'sketch-canvas');
