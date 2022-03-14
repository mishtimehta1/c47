var gameState="start";
function preload(){
  bgImg=loadImage("greyImg.webp");
  playerImg=loadImage("girlImg.png");
  likeImg=loadImage("likeImg.png");
  dislikeImg=loadImage("dislikeImg.png");
}

function setup(){
  createCanvas(400,600)
 start=createButton("Start");
 start.position(175,520);
 start.class("startButton");
 //start=createSprite(200,550,50,50);
 
 bg=createSprite(200,300);
 bg.visible=false;
player=createSprite(200,520,50,50);
player.scale=0.5;
player.visible=false;
likeG=new Group();
dislikeG=new Group();
 
}

function draw(){
  background("white")
  start.mouseClicked(gamePlay);
  // if(mousePressedOver(start)){
  //   gamePlay();
  // }

 
if(gameState==="play"){
  //start.visible=false;
  bg.visible=true;
  player.visible=true;
  player.addImage(playerImg);
  bg.addImage(bgImg);
  blur.scale=0.5
  bg.velocityY=2;
 
  if(bg.y>500){
    console.log("resetting");
   bg.y=bg.height/2;
  }
  var r=Math.round(random(1,2));
if(r===1){
  spawnLikes();
}
else{
  spawnDislikes();
}
  
  
}
else{

}

drawSprites();
}
function gamePlay(){
  start.hide();
  
  gameState="play";
}
function spawnLikes(){
  if(frameCount%120===0){
    like=createSprite(random(10,390),0,20,20);
    like.scale=0.1;
    like.velocityY=2;
    like.addImage(likeImg);
    like.lifetime=300;
    likeG.add(like);
    
  }
  

}
function spawnDislikes(){
  if(frameCount%120===0){
    dislike=createSprite(random(10,390),0,20,20);
    dislike.scale=0.1;
    dislike.velocityY=2;
    dislike.addImage(dislikeImg);
    dislike.lifetime=300;
    dislikeG.add(dislike);
  }
}