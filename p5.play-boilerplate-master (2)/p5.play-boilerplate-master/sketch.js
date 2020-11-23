const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var ball;

function setup() {
 var canvas = createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;

 var thing = {
isStatic: true
 }

 ground = Bodies.rectangle(200, 380, 400, 10, thing);
 World.add(world, ground);

 var round = {
   restitution: 1
 }

ball = Bodies.circle(200, 200, 10, round);
World.add(world, ball);

}

function draw() {
  background(50); 

  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10);
  
  drawSprites();
}