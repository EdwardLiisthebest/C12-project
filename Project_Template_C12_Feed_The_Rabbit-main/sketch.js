var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaf,leafImage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImage = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.velocityX=-5;




  



}


function draw() {
  background(180);
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnleaves()
  spawnapples()
  drawSprites();
}
function spawnleaves(){
    if (frameCount%100===0){
      leaf = createSprite(200,100,20,20) 
      leaf.x=Math.round(random(10,300))
      leaf.velocityY = 3
      leaf.scale = 0.09
      leaf.addImage(leafImage)
  }
}

function spawnapples(){
      if (frameCount%100===0){
        apple = createSprite(100,100,40,40);
        apple.scale =0.09;
        apple.addImage(appleImg)
        apple.x=Math.round(random(10,400))
          apple.velocityY = 3
      }
}
