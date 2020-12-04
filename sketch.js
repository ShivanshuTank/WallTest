var bullet
var wall
var speed 
var weight
var thikness
function setup() {
  createCanvas(800,400);
  thikness= random(22,83)
  bullet = createSprite(100,200,50,30);
  weight= random(30,52)
  speed=random(223,321)
  wall=createSprite(600,200,thikness,height/2)
  wall.shapeColor=(80,80,80)
  bullet.velocityX=speed
}

function draw() {
  background("black");  
  
  hascollided();

  drawSprites();
}

function hascollided(){
  if (wall.x-bullet.x < wall.width/2+bullet.width/2){
    bullet.velocityX=0
    var deformationOfwall = 0.5*weight*speed*speed/(thikness*thikness*thikness);
    if(deformationOfwall>10){
      wall.shapeColor=color(255,0,0);
    }
       
    if(deformationOfwall<10){
      wall.shapeColor=color(0,255,0)
    }
   }
}