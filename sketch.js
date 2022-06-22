
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var hammer, stone;
var ground;



function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer= new Hammer(100,100);

	ground= new Ground(600,height,1200,20);
    stone= new Stone(700,320,100,100);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
hammer.display();
ground.display();
stone.display();
 
}



