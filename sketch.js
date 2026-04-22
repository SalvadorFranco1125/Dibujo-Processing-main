let bombs;

function setup() {
  createCanvas(640, 480);
  bombs = [
    new Bomba(200, 240, 300),
    new Bomba(440, 240, 100)
  ];
}

function draw() {
  background(100, 149, 237);
  bombs.forEach(b => b.show());
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