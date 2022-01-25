var sea,ship;
var seaImg,shipImg;
var ship2,shipImg2;

function preload(){
  //uncomment the code to add animation to ship 

shipImg2 = loadAnimation("ship-2.png");

shipImg = loadAnimation("ship-1.png", "ship-2.png");

  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
 // shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
 ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
 ship.scale =0.25;
  
 // ship2 = createSprite(130,200,30,30);
 // ship2.addAnimation("movingShip",shipImg2);
 // ship2.scale =0.25;

}

function draw() {
  background(0);
  sea.velocityX = -3;

  //uncomment code to reset the background
  if(sea.x < 0){
    sea.x = 0;
    sea.x = sea.width;
    sea.x = sea.width/8;
  
  }
  
 //if (seaImg.x<0){
 ///   seaImg.x=sea.width/2;
 // }
 
  drawSprites();
}