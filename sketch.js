
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin1, dustbin2, dustbin3, paper;

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin1 = new Dustbin(550, 390, 100, 10);
	dustbin2 = new Dustbin(600, 370, 10, 50);
	dustbin3 = new Dustbin(500, 370, 10, 50);
	paper = new Paper(100, 300, 10);
	ground = Bodies.rectangle(width/2, 400, width, 10, 
	{
       isStatic: true
	});
	World.add(world, ground); 
}


function draw() {
 background("black")
  rectMode(CENTER);
 background(0);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
}


function keyPressed() {
	Matter.Body.applyForce(paper.body, paper.body.position, 
	{
		x:12,
		y:-13
	});
}


