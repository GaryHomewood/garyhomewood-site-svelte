// eslint-disable-next-line no-new
new p5(( p5 ) => {

  const marginTopBottom = 64;
  const marginLeftRight = 32;
  let pointsDrawn = [];
  const spacing = 4;
  let palette;
  let bg;

  p5.setup = () => {
    palette = p5.random(window.P5.palettes)
    const canvasW = (p5.windowWidth > 480) ? 480 : p5.windowWidth;
    // const canvasH = (p5.windowHeight > 800) ? 800 : p5.windowHeight;
    p5.createCanvas(canvasW, 800);
    p5grain.setup({ instance: p5 });
    p5.background(p5.random(palette))
    const field = new FlowField(10, p5.width, p5.height);

    // Draw the flow lines
    for (let line = 0; line < 900; line++) {
      const x = p5.random(p5.width);
      const y = p5.random(p5.height);
      p5.flowLine(p5.width, p5.height, x, y, 6, 300, field);
    }

    p5.granulateSimple(7);
  };

  p5.flowLine = (w, h, x, y, stepLength, steps, flowField) => {
    p5.fill(`${p5.random(palette)}`);
    p5.strokeWeight(p5.random(1));
    p5.noStroke()

    for (var step = 0; step < steps; step++) {
      // Skip if already drawn at this point
      if (spacing > 0) {
        var pointDrawn = pointsDrawn.some(
          (o) => Math.abs(o.x - x) < spacing && Math.abs(o.y - y) < spacing
        );
        if (pointDrawn) break;
      }

      // Add margins if there are any
      if (x < marginLeftRight || x > w - marginLeftRight) return;
      if (y < marginTopBottom || y > h - marginTopBottom) return;

      const colIdx = Math.floor(x / flowField.resolution);
      const rowIdx = Math.floor(y / flowField.resolution);
      if (flowField.grid[colIdx] === undefined) {
        break;
      }

      pointsDrawn.push({
        x: Math.floor(x),
        y: Math.floor(y),
      });

      const angle = flowField.grid[colIdx][rowIdx];
      const xStep = stepLength * Math.cos(angle);
      const yStep = stepLength * Math.sin(angle);
      x += xStep;
      y += yStep;
      p5.circle(x, y, p5.random(2, stepLength))
    }
  }

  class FlowField {
    constructor(resolution, width, height) {
      this.resolution = resolution;
      let xLeft = 0;
      let xRight = width;
      let yTop = 0;
      let yBottom = height;
      this.cols = (xRight - xLeft) / resolution;
      this.rows = (yBottom - yTop) / resolution;
      this.grid = [];
      this.config = cubicNoiseConfig(Math.random(), 13, 13);
      this.init();
    }

    map(value, x1, y1, x2, y2) {
      return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
    }

    init() {
      for (var col = 0; col < this.cols; col++) {
        this.grid[col] = [];
        for (var row = 0; row < this.rows; row++) {
          // Larger multiplier makes it more noisy
          let xScaled = col * 0.065;
          let yScaled = row * 0.065;

          let noiseValue = cubicNoiseSample2(this.config, xScaled, yScaled);
          // translate the noise value to an angle (between 0 and 2 * PI)
          let angle = this.map(noiseValue, 0.0, 1.0, 0.0, Math.PI * 2.0);

          this.grid[col][row] = angle;

          let x1 = row * this.resolution;
          let y1 = col * this.resolution;
          let x2 = x1 + this.resolution * Math.cos(this.grid[col][row]);
          let y2 = y1 + this.resolution * Math.sin(this.grid[col][row]);
        }
      }
    }
  }

  function randomize(seed, x, y) {
    const RND_A = 134775813;
    const RND_B = 1103515245;

    return (
      (((((x ^ y) * RND_A) ^ (seed + x)) *
        (((RND_B * x) << 16) ^ (RND_B * y - RND_A))) >>>
        0) /
      4294967295
    );
  }

  function tile(coordinate, period) {
    if (coordinate < 0) while (coordinate < 0) coordinate += period;
    else return coordinate % period;
  }

  function interpolate(a, b, c, d, x) {
    const p = d - c - (a - b);

    return x * (x * (x * p + (a - b - p)) + (c - a)) + b;
  }

  /**
   * Config a cubic noise.
   * @param {Number} seed A seed in the range [0, 1].
   * @param {Number} [periodX] The number of units after which the x coordinate repeats.
   * @param {Number} [periodY] The number of units after which the y coordinate repeats.
   * @returns {Object} A configuration object used by noise functions.
   */
  function cubicNoiseConfig(
    seed,
    periodX = Number.MAX_SAFE_INTEGER,
    periodY = Number.MAX_SAFE_INTEGER
  ) {
    return {
      seed: Math.floor(seed * Number.MAX_SAFE_INTEGER),
      periodX: periodX,
      periodY: periodY,
    };
  }

  /**
   * Sample 1D cubic noise.
   * @param {Object} config A valid noise configuration.
   * @param {Number} x The X position to sample at.
   * @returns {Number} A noise value in the range [0, 1].
   */
  function cubicNoiseSample1(config, x) {
    const xi = Math.floor(x);
    const lerp = x - xi;

    return (
      interpolate(
        randomize(config.seed, tile(xi - 1, config.periodX), 0),
        randomize(config.seed, tile(xi, config.periodX), 0),
        randomize(config.seed, tile(xi + 1, config.periodX), 0),
        randomize(config.seed, tile(xi + 2, config.periodX), 0),
        lerp
      ) *
        0.666666 +
      0.166666
    );
  }

  /**
   * Sample 2D cubic noise.
   * @param {Object} config A valid noise configuration.
   * @param {Number} x The X position to sample at.
   * @param {Number} y The Y position to sample at.
   * @returns {Number} A noise value in the range [0, 1].
   */
  function cubicNoiseSample2(config, x, y) {
    const xi = Math.floor(x);
    const lerpX = x - xi;
    const yi = Math.floor(y);
    const lerpY = y - yi;
    const x0 = tile(xi - 1, config.periodX);
    const x1 = tile(xi, config.periodX);
    const x2 = tile(xi + 1, config.periodX);
    const x3 = tile(xi + 2, config.periodX);

    const xSamples = new Array(4);

    for (let i = 0; i < 4; ++i) {
      const y = tile(yi - 1 + i, config.periodY);

      xSamples[i] = interpolate(
        randomize(config.seed, x0, y),
        randomize(config.seed, x1, y),
        randomize(config.seed, x2, y),
        randomize(config.seed, x3, y),
        lerpX
      );
    }

    return (
      interpolate(xSamples[0], xSamples[1], xSamples[2], xSamples[3], lerpY) *
        0.5 +
      0.25
    );
  }
}, 'sketch-canvas');
