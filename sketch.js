
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var rect1,rect2,rect3,rect4;
var paper1;
var he;
var binIMG;

function preload()
{
	
	binIMG=loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
rect1= new Box(930,600,10,120);
rect2= new Box(1072,600,10,100);
rect3= new Box(1000,655,153,10);
rect4= new Box(160,655,190,10);
paper1 = new Paper(160,635,30);

he = createSprite(1000,600,20,20);
he.addImage(binIMG);
he.scale=0.6;
	Engine.run(engine);
  
}


function draw() {
  
  background(230);
  Engine.update(engine); 
  rect1.display();
rect2.display();
rect3.display();
rect4.display();
paper1.display();
keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-14});
	   
	 }
   }
   
   

