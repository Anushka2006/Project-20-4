var cat, catImg, backImg, back, catRun, mouse, mouseImg, mouseRun, catLast, mouseLast;



function preload() {
    //load the images here
     catImg= loadImage("images/cat1.png");
     backImg = loadImage("images/garden.png");
     catRun = loadAnimation("images/cat2.png","images/cat3.png");
     mouseImg= loadImage("images/mouse1.png");
     mouseRun= loadAnimation("images/mouse2.png","images/mouse3.png");
     catLast = loadAnimation("images/cat4.png");
     mouseLast = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    back = createSprite(500,400,1000,800);
    back.addImage(backImg);
    back.scale=1.5;
    cat = createSprite(850,700,20,15);
    cat.addImage(catImg);
    cat.scale=0.14;
    mouse= createSprite(150,700,10,15);
    mouse.addImage(mouseImg);
    mouse.scale=0.16;
    cat.debug=false;
    

}

function draw() {

    background("pink");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.x = 250;
        cat.addAnimation("lastCat",catLast);
        cat.changeAnimation("lastCat");
        cat.velocityX=0;
        mouse.addAnimation("lastMouse",mouseLast);
        mouse.changeAnimation("lastMouse");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catRun);
        cat.changeAnimation("catRunning");
        mouse.addAnimation("mouseRunning",mouseRun);
        mouse.changeAnimation("mouseRunning");

    }

}
