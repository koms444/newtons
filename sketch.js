
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=	Matter.Constraint
var ground,chain1;
var bob1,bob2,bob3,bob4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=50;
	startBobPositionX=width/2;
	startBobPositionY=height/4+300;
	//Create the Bodies Here.
	ground=new Ground(400,50,685,45)
	bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)

	
	

	chain1=new Chain(bob1.body,ground.body,-bobDiameter*2, 0)
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  
  ground.display();
  chain1.display();
  drawSprites();
 
}



