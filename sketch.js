
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivaltime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(30,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1 
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  ground.visible=false
  

  
}


function draw() {
background("green");
  if(keyDown("space")){
    monkey.velocityY=-10
  }
  monkey.velocityY=monkey.velocityY+0.7
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  monkey.collide(ground)
  spawnFood();
  spawnObstacles();
  drawSprites();
  
  stroke("white")
  textSize(20)
  fill("white")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
}
function spawnFood ()
{  
  if(frameCount%80===0){
    banana=createSprite(400,Math.round(random(120,200)),10,20)
    banana.velocityX=-5
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.lifetime=80
  }
}

function spawnObstacles ()
{
  if(frameCount%300===0){
    obstacle=createSprite(400,320,10,20)
    obstacle.velocityX=-5
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    banana.lifetime=80  
  }
}





