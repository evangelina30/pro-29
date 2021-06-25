const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var engine,world;
var backgroundImage;
var ground_0;
var polygon_img;
var slingShot,ball;
function preload(){
 
  polygon_img = loadImage("sprites/polygon.png");
}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;

    
  ground_0 = new ground(750,600,1500,20);
  ground1 = new ground(750,540,600,20);
  ground2 = new ground(1210,260,500,20);

  block1 = new Block(300,275,30,40);
  
   block2 = new Block(330,275,30,40); 
   block3 = new Block(360,275,30,40); 
   block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
     block6 = new Block(450,275,30,40);
      block7 = new Block(480,275,30,40);
  //level two
   block8 = new Block(330,235,30,40); 
   block9 = new Block(360,235,30,40); 
   block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
     block12 = new Block(450,235,30,40); 
     //level three
      block13 = new Block(360,195,30,40);
      block14 = new Block(390,195,30,40);
       block15 = new Block(420,195,30,40);
        //top
         block16 = new Block(390,155,30,40);
  //set 2 for second stand 
  //level one
   blocks1 = new Block(640,175,30,40);
    blocks2 = new Block(670,175,30,40);
     blocks3 = new Block(700,175,30,40); 
     blocks4 = new Block(730,175,30,40); 
     blocks5 = new Block(760,175,30,40);
      //level two 
      blocks6 = new Block(670,135,30,40);
       blocks7 = new Block(700,135,30,40); 
       blocks8 = new Block(730,135,30,40); 
       //top 
       blocks9 = new Block(700,95,30,40);
      //ball holder with slings
      ball = Bodies.circle(50,200,20); 
      World.add(world,ball); 
      slingShot = new Slingshot(this.ball,{x:100,y:200});
  
  
 
}

function draw() {
  background(56,44,44);  
  drawSprites();

 
ground_0.display();
ground1.display();
ground2.display();
fill("#0BD9EF");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("pink")
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("yellow")
block13.display();
block14.display();
block15.display();
fill("gold")
block16.display();
fill("#0BD9EF");
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
fill("pink");
blocks6.display();
blocks7.display();
blocks8.display();
fill("gold");
blocks9.display();
fill("yellow");
imageMode(CENTER) 
image(polygon_img ,ball.position.x,ball.position.y,40,40);
slingShot.display();

}
function mouseDragged(){ 
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
 } function mouseReleased()
 { slingShot.fly();
 }