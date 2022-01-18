var roadImg,road;
var venom,venomImg;
var b1Img,b1,b1Obsgroup;
var energydrinkImg,energydrink,energydrinkgroup
var soundenergy,end
var restartImg
var gameState = "play"
var score = 0

function preload(){
roadImg = loadImage("road.png");
venomImg = loadImage("venom.png");
b1Img = loadImage("b1.png");
wavesound = loadSound("wave.wav");
energydrinkImg= loadImage("energydrink.jpg");
soundenergy=loadSound("soundenergy.wav");
end=loadSound("end.wav")
restartImg = loadImage("restart.png")

}

function setup() {
 createCanvas(600,600);
wavesound.loop()
road = createSprite(300,300);
road.addImage("road",roadImg );
road.velocityY = 1.5;

b1Obsgroup = new Group();
energydrinkgroup = new Group();

venom = createSprite(200,200,50,50);
  venom.scale = 0.3;
  venom.addImage("venom", venomImg);
}

function draw() {

    background(255);
   textSize(25);
   text("Score : "+ score,250,50);
 
  
    if (gamestate = "play") 
    {
  
        if(keyDown("Left")){
            venom.x = venom.x - 3;
        }
        if(keyDown("Right")){
      
            venom.x = venom.x + 3;
        }
        if(road.y > 400 ) {
            road.y = 300
          } 
        }
    

        if(b1Obsgroup.isTouching(venom)){
            venom.velocityY = 0;
            gameState="end"


            if (gameState === "end"){
                stroke("yellow");
                fill("yellow");
                textSize(30);
                text("Game Over", 230,250)
                end.playSound()       
              }
              if(mousePressedOver(restart)) {
                reset();
              }
           spawnb1();
           spawnenergydrink();

              drawSprites();

             
              
        }
              function reset(){
                gameState =PLAY
                gameOver.visible=false
                restart.visible=false
              
                b1Group.destroyEach()
                energydrinkGroup.destroyEach()
                
               score=0
              
              }
             
              function spawnb1()
              {

              
            
                if (frameCount % 240 === 0) {
                  var b1 = createSprite(200, -50);
                
                  b1.x=Math.round(random(120,400))

                 b1.addImage(b1Img);
                  
                  b1.velocityY = 1;
              
              venom.depth = b1.depth;
                  venom.depth =1;
                  
                  
              b1.lifetime = 800;
              
                  b1Group.add(b1);
                }
              
                  function spawnenergydrink()
                  {
                  
                    if (frameCount % 250 === 0) {
                        var energydrink = createSprite(200, -35);
                      
                        energydrink.x=Math.round(random(120,400))
      
                       energydrink.addImage(energydrinkImg);
                        if(venom.isTouching(energydrink)){
                            soundenergy.play()
                            score=+2
                        
                       energydrink.velocityY = 1.7;

                    }
                
                  }
                }       
            
              }
            }
