var movingRect,fixedRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(600, 100, 100, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = +3;

  movingRect = createSprite(600, 700, 100, 50);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -3;
  
  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(0);  

  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  

  drawSprites();
}