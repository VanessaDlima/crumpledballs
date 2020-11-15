const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

var paper, ground, dustbin;

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper();
	ground = new Ground();
	bin = new Dustbin();
	Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background("sandybrown");
Engine.update(engine);

ground.display();
paper.display();
bin.display();
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40})
	}
}