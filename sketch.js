var tom, tomImg1, tomImg2, tomImg3;

var jerry, jerryImg1, jerryImg2, jerryImg3;

var bg;

function preload() {
    //carregue as imagens aqui

    bg = loadImage("images/garden.png");

    tomImg1 = loadAnimation("images/cat1.png");

    tomImg2 = loadAnimation("images/cat2.png", "images/cat3.png");

    tomImg3 = loadAnimation("images/cat4.png");
    
    jerryImg1 = loadAnimation("images/mouse1.png");

    jerryImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    
    jerryImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    tom = createSprite(870, 600);
    tom.addAnimation("sleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("standing", jerryImg1);
    jerry.scale = 0.15;
}

function draw() {
    
    background(bg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(tom.x < jerry.x){
        tom.velocityX = 0;
  
        tom.addAnimation("tomLastImage", tomImg3);
 
        jerry.addAnimation("jerryLastImage", jerryImg3);
       
        tom.x = 100;
 
        tom.changeAnimation("tomLastImage");
 
        jerry.changeAnimation("jerryLastImage");
     }
    
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;

      tom.addAnimation("running", tomImg2);
      tom.changeAnimation("running");

      jerry.addAnimation("teasing", jerryImg2);
      jerry.frameDelay = 25;
      jerry.changeAnimation("teasing");
  }

}
