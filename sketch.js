var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
// var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x = ground.width/2
  console.log(ground.x);

  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
  
  survivalTime = 0;
}


function draw() {
 stroke("white");
  textSize(20);
  fill("white");
  text("score:",+ score,500,50)
  
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
    
    monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(invisibleGround);
  
  spawnObstacles();
  spawnBananas();
  drawSprites();
}

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(180,343,10,40);
   obstacle.addImage(obstacleImage)
   obstacle.velocityX = -6;
   obstacle.scale = 0.1
 }
}
function spawnBananas(){
 if (frameCount % 60 === 0){
   var banana = createSprite(200,165,10,40);
   banana.addImage(bananaImage);
   banana.velocityX = -6;
   banana.scale = 0.1;
 }
}



