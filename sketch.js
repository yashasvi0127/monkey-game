
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage ;
var fruitGroup, obstaclesGroup ;
var score ;
var ground , groundImg , invisibleGround ;
var survivalTime = 0;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImg = loadImage("WhatsApp Image 2020-10-21 at 3.57.50 PM.jpeg");
 
}



function setup() {
  
  createCanvas(520,500);
  
 monkey = createSprite(80,420,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1;
  
 ground = createSprite(340,495,400,20);
 ground.addImage("ground",groundImg);
 ground.velocityX = -4;
 ground.x = ground.width/2 ;
    
 invisibleGround = createSprite(200,450,800,10);
  invisibleGround.visible = false ;

  fruitGroup =new Group();
  obstaclesGroup =new Group();
}


function draw() {
  
  background("skyblue");
  
  stroke("pink");
  textSize(20);
  fill("white");
  score = score + Math.round(getFrameRate()/60);
 text("Survival time: "+score,190, 30);
  
  
  
  
   
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
  
   monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(invisibleGround);
    
  food ();
  obstacles();

  drawSprites();
}

function food () {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(200,300 ));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 160;
    
    //adjust the depth
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    
    fruitGroup.add(banana);
    
  }
   
}


function obstacles(){
  if (frameCount%100  === 0){
    
    obstacle = createSprite(620,430,50,50);
    obstacle.addImage("rock", obstacleImage);
    
    obstacle.scale = 0.13 ;
    obstacle.velocityX = -4;
    obstacle.lifetime = 220;
    obstaclesGroup.add(obstacle);
    
  }
  
  
}





