var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 20, 50);
  bullet.velocityX=2;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapecolor=color(80,80,80);
  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321);
  deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function draw() {
  background(255,255,255); 

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapecolor=color(255,0,0);
    }
  }
  if(damage<10){
    wall.shapecolor=color(0,255,0);
   }
 
 hasCollided();
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
