var survivalTime = 0
var monkey , monkey_running
var ground ,groundimage
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
 
  
  monkey.scale = 0.1;
  ground = createSprite(1000,190,400,10);
  ground.x = ground.width /2;
 
   Foodgroup = createGroup();
   obstacleGroup = createGroup();
}


function draw() {
    background(200);
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time :"+ survivalTime ,100,50 )
 
    ground.velocityX = -4
  
  if (ground.x < 10){
      ground.x = ground.width/2;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
   monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
  fruits();
  rock();
  
 
    drawSprites();
}

function fruits(){
  if(World.frameCount%80 ===0 ) {
   banana = createSprite(400,Math.round(random(120,90)),20,20);
   banana.scale = 0.05;
   banana.addImage(bananaImage)
   banana.velocityX =-7
   banana.setLifetime = 100;
      
   Foodgroup.add(banana)
    
  }
   
}

function rock(){
  if(World.frameCount%300 ===0 ) {
    obstacle = createSprite(400,180,20,20);
    obstacle.velocityX = -8;
    obstacle.setLifetime = 100;
    obstacle.scale = 0.1
    obstacle.addImage(obstaceImage)
    obstacleGroup.add(obstacle)
  }
}


