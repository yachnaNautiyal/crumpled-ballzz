
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var left_wall;
var right_wall;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);

	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(450,480,900,20)
left_wall=new Ground(600,405,15,130)
right_wall=new Ground(800,405,15,130)

  var ball_options={
	  isStatic:false,
	  restitution:0.3,
	  friction:0,
	  density:1.2
  }
  //Create the Bodies Here.
	ball=Bodies.circle(260,100,50,ball_options)
	World.add(world,ball)

	  rectMode(CENTER);
	  ellipseMode(RADIUS);

	  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.display();
  left_wall.display();
  right_wall.display();
  drawSprites();
}
 function keyPressed() {
	  if (keyCode === UP_ARROW) { Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); }
	 }
