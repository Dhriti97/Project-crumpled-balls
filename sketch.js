
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustB1,dustB2,dustB3;
var dustB1body,dustB2body,dustB3body;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	//Create the Bodies Here.
    dustB1=createSprite(460,620,20,80);
	dustB1.shapeColor="yellow";
	dustB2=createSprite(560,650,210,20);
	dustB2.shapeColor="yellow";
	dustB3=createSprite(670,620,20,80);
	dustB3.shapeColor="yellow";

	Engine.run(engine);
	
	
	dustB1body = Bodies.rectangle(460,620,20,80,{isStatic:true});
	World.add(world,dustB1body);

	dustB2body = Bodies.rectangle(560,650,210,20,{isStatic:true});
	World.add(world,dustB2body);

	dustB3body = Bodies.rectangle(670,620,20,80,{isStatic:true});
	World.add(world,dustB3body);

	paperObject = new paper(100,600,15);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


