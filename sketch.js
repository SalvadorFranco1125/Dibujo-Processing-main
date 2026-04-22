let bombs;
let video;
let faceMesh;
let detections = [];
let targetX = 200;
let targetY = 240;
let stampedBombs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  faceMesh = new FaceMesh({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    }
  });
  faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
  faceMesh.onResults(onResults);
  const camera = new Camera(video.elt, {
    onFrame: async () => {
      await faceMesh.send({image: video.elt});
    },
    width: 640,
    height: 480
  });
  camera.start();
  bombs = [
    new Bomba(targetX, targetY, 300),
    new Bomba(440, 240, 100)
  ];
}

function onResults(results) {
  detections = results.multiFaceLandmarks || [];
}

function draw() {
  background(100, 149, 237);

  push();
  scale(-1, 1);
  image(video, -width, 0, width, height);
  pop();

  if (detections.length > 0) {
    let face = detections[0];
    let nose = face[1];
    targetX = (1 - nose.x) * width;
    targetY = nose.y * height;
  }

  bombs[0].x = lerp(bombs[0].x, targetX, 0.1);
  bombs[0].y = lerp(bombs[0].y, targetY, 0.1);

  stampedBombs.forEach(b => b.show());
  bombs.forEach(b => b.show());
}

function mousePressed() {
  stampedBombs.push(new Bomba(targetX, targetY, 300));
}

function touchStarted() {
  stampedBombs.push(new Bomba(targetX, targetY, 300));
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Bomba {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size; // diámetro de la cabeza
  }

  show() {
    let scale = this.size / 200; // el dibujo original usa cabeza de 200

    fill(207, 185, 151);
    stroke('black');
    strokeWeight(4 * scale);
    rect(this.x - 170 * scale, this.y - 75 * scale, 120 * scale, 20 * scale);
    rect(this.x - 170 * scale, this.y - 155 * scale, 20 * scale, 80 * scale);

    line(this.x - 150 * scale, this.y - 55 * scale, this.x - 150 * scale, this.y - 72 * scale);
    line(this.x - 130 * scale, this.y - 55 * scale, this.x - 130 * scale, this.y - 72 * scale);
    line(this.x - 110 * scale, this.y - 55 * scale, this.x - 110 * scale, this.y - 72 * scale);
    line(this.x - 90 * scale, this.y - 55 * scale, this.x - 90 * scale, this.y - 72 * scale);
    line(this.x - 170 * scale, this.y - 94 * scale, this.x - 150 * scale, this.y - 94 * scale);
    line(this.x - 170 * scale, this.y - 114 * scale, this.x - 150 * scale, this.y - 114 * scale);
    line(this.x - 170 * scale, this.y - 134 * scale, this.x - 150 * scale, this.y - 134 * scale);

    fill(0, 0, 0);
    circle(this.x, this.y, this.size);

    fill(204, 160, 29);
    arc(this.x - 30 * scale, this.y - 20 * scale, 70 * scale, 70 * scale, 0, PI, TWO_PI + QUARTER_PI, CHORD);
    fill('black');
    ellipse(this.x - 20 * scale, this.y - 15 * scale, 10 * scale, 30 * scale);

    fill(204, 160, 29);
    arc(this.x + 40 * scale, this.y - 20 * scale, 70 * scale, 70 * scale, 0, PI, TWO_PI + QUARTER_PI, CHORD);
    fill('black');
    ellipse(this.x + 50 * scale, this.y - 15 * scale, 10 * scale, 30 * scale);

    fill('white');
    arc(this.x + 5 * scale, this.y + 40 * scale, 120 * scale, 90 * scale, 0, PI, TWO_PI + QUARTER_PI, CHORD);
    stroke('black');
    strokeWeight(5 * scale);

    line(this.x + 40 * scale, this.y + 40 * scale, this.x + 40 * scale, this.y + 85 * scale);
    line(this.x + 15 * scale, this.y + 40 * scale, this.x + 15 * scale, this.y + 85 * scale);
    line(this.x - 10 * scale, this.y + 40 * scale, this.x - 10 * scale, this.y + 85 * scale);
    line(this.x - 35 * scale, this.y + 40 * scale, this.x - 35 * scale, this.y + 85 * scale);

    strokeWeight(4 * scale);
    fill(255, 128, 0);
    triangle(this.x - 180 * scale, this.y - 185 * scale, this.x - 160 * scale, this.y - 159 * scale, this.x - 140 * scale, this.y - 185 * scale);
    fill(255, 223, 0);
    triangle(this.x - 169 * scale, this.y - 159 * scale, this.x - 160 * scale, this.y - 185 * scale, this.x - 151 * scale, this.y - 159 * scale);
  }
}
