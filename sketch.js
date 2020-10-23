function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  moverect = createSprite(600,200,50,50);
}

function draw() {
  background("pink");
  moverect.x = mouseX;
  moverect.y = mouseY;
  if(abs(fixrect.x-moverect.x) < fixrect.width/2 + moverect.width/2 && 
     abs(fixrect.y-moverect.y) < fixrect.height/2 + moverect.height/2) {
    moveresct.shapeColor = "red";
    fixrect.shapeColor = "red";
  }  else{
    moverect.shapeColor = "blue";
    fixrect.shapeColor = "blue";
  } 
  drawSprites();
}