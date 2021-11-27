var player,playerImg,playerDead;
var fish1Img,fish1Group,score=0;
var fish2Img,fish2Group;
var bg, bgImg;
var sharkGroup, sharkImg;

function preload(){
  bgImg=loadImage("images/bg.jpg");
  playerImg= loadImage("images/player.png");
  fish1Img= loadImage("images/fish1.png");
  fish2Img= loadImage("images/fish2.png");
  sharkImg= loadImage("images/shark.png");
  playerDead= loadImage("images/playerDead.png")
}

function setup() {
  createCanvas(1350,650);
  bg= createSprite(700,400);
bg.addImage(bgImg);
bg.scale=3
  player=createSprite(700,150,10,10);
  player.addImage(playerImg);
  player.scale= 0.3
    

  fish1Group = new Group()
  fish2Group = new Group()
  sharkGroup = new Group()
}

function draw() {
  bg.velocityX = -5
if(bg.x<400){
    bg.x=1000
}

  if(keyDown("up")){
    player.y=player.y-3;
  }
  if(keyDown("down")){
    player.y=player.y+3;
  }
  if(keyDown("left")){
    player.x=player.x-3;
  }
  if(keyDown("right")){
    player.x=player.x+3;
  }
  

  generateFish1()
  for(var i=0;i<fish1Group.length;i++){
    var temp= fish1Group.get(i);
    if(temp.isTouching(player)){
      temp.destroy()
      temp=null;
      score++
    }
  }
  generateFish2()
  for(var i=0;i<fish2Group.length;i++){
    var temp= fish2Group.get(i);
    temp= null;
  }
  
  drawSprites()
  generateShark()
  for (var i=0;i<sharkGroup.length;i++){
    var tempshark= sharkGroup.get(i);
    if(tempshark.isTouching(player)){
      fill("red")
      textSize(100)
      text("Game over",440,350)
      player.addImage(playerDead)
      player.velocityY=8
    }
  }

  fill("red")
  textSize(20)  
  text("Fish Score: "+score,500,50)

}
function generateFish1(){
  if (frameCount%80===0){
    var fish1 = createSprite(1400,150,40,10)
    fish1.y= random(150,570)
    fish1.velocityX = -3
    fish1.addImage(fish1Img)
    fish1.scale=0.05
    fish1Group.add(fish1)
    fish1.lifetime= 600
  }
}
function generateFish2(){
  if (frameCount%120===0){
    var fish2 = createSprite(0,170,40,10)
    fish2.y= random(130,590)
    fish2.velocityX = 3
    fish2.addImage(fish2Img)
    fish2.scale=0.07
    fish2Group.add(fish2)
    fish2.lifetime= 600
  }
}
function generateShark(){
  if (frameCount%100===0){
    var shark = createSprite(0,500,10,10)
    shark.y=random(0,600)
    shark.velocityX= random(0,4)
    shark.velocityY = random(-5,5)
    shark.addImage(sharkImg)
    shark.scale=0.5
    sharkGroup.add(shark)
    shark.lifetime= 300
  }
}