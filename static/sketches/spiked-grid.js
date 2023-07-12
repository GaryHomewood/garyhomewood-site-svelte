/* eslint-disable no-new */
new p5(( p5 ) => {

  let palette;

  p5.setup = () => {
    palette = p5.random(window.P5.palettes)
    const canvasW = (p5.windowWidth > 480) ? 480 : p5.windowWidth;
    const canvasH = (p5.windowHeight > 800) ? 800 : p5.windowHeight;
    p5.createCanvas(canvasW, 800);
    p5grain.setup({ instance: p5 });

    p5.background(p5.random(palette))
    p5.stroke(p5.random(palette))
    p5.strokeWeight(0.8)

    let cellX
    let cellY
    const rows = 20
    const cols = 8
    const cellSizeW = 34
    let cellSizeH = p5.random(cellSizeW)
    const margin = 4
    const gridWidth = (cols * cellSizeW) + (2 * cols * margin)
    const gridHeight = (rows * cellSizeH) + (2 * rows * margin)
    const xOffset = (cellSizeW/2 + margin) +  (p5.width - gridWidth) / 2
    const yOffset =  (cellSizeH/2 + margin) + (p5.height - gridHeight) / 2

    p5.translate(xOffset, yOffset);

    [...Array(rows)].forEach((_, row) => {
      cellY = (cellSizeH + (margin * 2)) * row;
      [...Array(cols)].forEach((__, col) => {
        cellX = (cellSizeW+ (margin * 2)) * col + p5.random(8, 10)
        p5.noFill()

        if (p5.random() > 0.2) {
          cellSizeH = p5.random(10, cellSizeW)
          p5.fill(p5.random(palette))
          p5.rect(
            cellX - cellSizeW/2 + margin/2,
            cellY - cellSizeH/2 + margin/2,
            cellSizeW/2 - margin,
            cellSizeH - margin
            )
          p5.circle(cellX, cellY, 4)
          p5.fill(p5.random(palette))
          p5.rect(
            cellX - margin/2,
            cellY - cellSizeH/2 + margin/2,
            cellSizeW/2 - margin,
            cellSizeH - margin
           )
        }

        p5.stroke(p5.random(palette))
        p5.strokeWeight(0.3)
        p5.strokeWeight(p5.random())
        p5.push()
        p5.translate(cellX, cellY)
        p5.rotate(p5.radians(p5.random([0, 90])))
        p5.line(
          -cellSizeW/2 + margin/2 + p5.random(-200, 200),
          1,
          cellSizeW/2 - margin/2+ p5.random(-200, 200),
          0
        )
        p5.pop()
      })
      cellX = 0
      p5.translate(0, 0)
    })

    p5.granulateSimple(7);
  }
}, 'sketch-canvas');
