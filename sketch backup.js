function setup() {
  createCanvas(640, 480);
  
  background(100, 149, 237);
  
  //cabello
  
   fill(207,185,151)
  strokeWeight(4);
  rect(150,165,120,20);
  rect(150,85,20,80);
  
   stroke('black');
  
  strokeWeight(4);

  line(170,185,170,168);
  line(190,185,190,168);
  line(210,185,210,168);
  line(230,185,230,168);
  line(150,146,170,146);
  line(150,126,170,126);
  line(150,106,170, 106);
  //cabeza
  
  fill(0, 0, 0);
  
  circle(320,240,200)
  
  //ojo izquierdo
  
fill (204, 160, 29)  
   arc(290, 220, 70, 70, 0,PI, TWO_PI + QUARTER_PI, CHORD);
   fill("black")
  ellipse(300,225,10,30)
  
  //ojo derecho
  
  fill (204, 160, 29)  
   arc(360, 220, 70, 70, 0, PI, TWO_PI + QUARTER_PI, CHORD);
   fill("black")
  ellipse(370,225,10,30)
  
  //Boca
  fill ("white")  
   arc(325, 280, 120, 90, 0, PI, TWO_PI + QUARTER_PI, CHORD);
  stroke('black');
  
  strokeWeight(5);

  line(360,280,360, 325);
   line(335,280,335, 325);
   line(310,280,310, 325);
   line(285,280,285, 325)

  //fuego
  
  strokeWeight(4);
  
   fill(255, 128, 0);

  triangle(140, 55, 160, 81, 180, 55);
  
   fill(255, 223, 0);

  triangle(151, 81, 160, 55, 169, 81);
  
  
  describe('A black circle with a black outline on a gray canvas.');
}

function draw() {
}