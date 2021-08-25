var bg
var astronaut,sleep
var brush,gym,eat,drink,move,bath




function preload(){
bg= loadImage("iss.png")
sleep = loadAnimation("sleep.png")
brush = loadAnimation("brush.png")
eat = loadAnimation("eat1.png","eat2.png")
drink = loadAnimation("drink1.png","drink2.png")
move = loadImage("move.png",)
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
bath = loadAnimation("bath1.png","bath2.png")

}


function setup() {
  createCanvas(800,400)

  astronaut = createSprite(400,400)
  astronaut.addAnimation("sleep",sleep)
  astronaut.scale = 0.2
}

function draw() {
  background(bg);
  stroke("black")
  textSize(16)  
  text("Up Arrow = Brushing, Down Arrow = Gymming, Left Arrow = Eating , Right Arrow = Bathing ,m key = Moving", 15,60);
  

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brush",brush)
  astronaut.changeAnimation("brush")
  astronaut.y = 350
  astronaut.VelocityX = 0;
  astronaut.VelocityY = 0;
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gym",gym)
  astronaut.changeAnimation("gym")
  astronaut.y = 350
  astronaut.VelocityX = 0;
  astronaut.VelocityY = 0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eat",eat)
  astronaut.changeAnimation("eat")
  astronaut.y = 350
  astronaut.VelocityX = 0;
  astronaut.VelocityY = 0;
}

if(keyDown("Right_ARROW")){
  astronaut.addAnimation("bath",bath)
  astronaut.changeAnimation("bath")
  astronaut.y = 350
  astronaut.VelocityX = 0;
  astronaut.VelocityY = 0;
}

if(keyDown("m")){
  astronaut.addImage("move",move)
  astronaut.changeImage("move")
  astronaut.y = 350
  astronaut.VelocityX = 0;
  astronaut.VelocityY = 0;
}







  drawSprites();
}