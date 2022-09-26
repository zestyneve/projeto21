
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,groundObj,leftSide,rightSide
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    var options={
		isStatic:false,
	    restitution:0.3,
	    friction:0, 
	    density:1.2
	}
	//Create the Bodies Here.
    ball=Bodies.circle(260,100,20,options)
	World.add(world,ball)
	groundObj=new Ground(width/2,670,width,20);
    leftSide = new Ground(1100,600,20,120);
    rightSide = new Ground(1350,600,20,120);

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x,ball.position.y,40,40)
  groundObj.display()
  leftSide.display()
	rightSide.display()
  
}



