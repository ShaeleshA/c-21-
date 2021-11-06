const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var button1 , button2 ;
let engine;
let world;
var ball;
var ground;
var left;
var right;
var top_wall;
var lftw , rghtw ;

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  
  //button1=createImg("right.png")
  //button1.position(200,30);
  //button1.size(50,50)
  //button1.mouseClicked(hForce);

  //button2=createImg("up.png")
  //button2.position(20,30);
  //button2.size(50,50)
  //button2.mouseClicked(vForce);
 

  ground =new Ground(500,590,1000,20);
  right = new Ground(800,505,20,150);
  left = new Ground(650,505,20,150);
  top_wall = new Ground(500,10,1000,20);
  rghtw = new Ground(10,300,20,600);
  lftw = new Ground(990,300,20,600);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var ball_options = {
    restitution:0.3 , 
    friction:0.5,
    isStatic:false,
    density:1.2
  
  }
  ball= Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  rghtw.show();
  lftw.show();
  ellipse(ball.position.x,ball.position.y,20);
  Force();
  Engine.update(engine);
  console.log(keyCode)
}
function Force(){
  if(keyCode === UP_ARROW ){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.5})
  }
}

