var cat, catImg,catImg2, catImg3, mouse, mouseImg, mouseImg2, mImg, mImg2, garden, gardenImg;

function preload() {
    //load the images here
    //OKay
    catImg = loadImage("cat1.png");
    catImg2 = loadImage("cat2.png, cat3.png");
    catImg3 = loadImage("cat4.png");
    gardenImg = loadImage("garden.png");
    mouseImg = loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png");
    mImg = loadImage("mouse3.png");
    mImg2 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    //OKay
    garden = createSprite(500,400,1000,800);
    garden.addImage(gardenImg);

    cat = createSprite();
    cat.addImage(catImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    //OKay
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  //OKay
  }