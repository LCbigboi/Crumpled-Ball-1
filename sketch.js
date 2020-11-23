/* TO THROW THE THRASH INTO DUSTBIN
STEP1 :- Declaring and defining variables for Body and engine
STEP2 :- Preload images crumped paper(circular) and Rectangular dustbin with open top
STEP3 :- Setup a  scenario for global variables
STEP4 :- Setup a  
*/

var side1,side2,side3;
var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground = new Ground(750,690,1500,20);
	side1 = new Dustbin(1000,680,300,20);
	side2 = new Dustbin(850,560,20,260);
	side3 = new Dustbin(1150,560,20,260)
	ball1 = new Ball(100,680,35)
}


function draw() {
  rectMode(CENTER);
  background(0);
	
	ground.display();
	side1.display();
	side2.display();
	side3.display();
	ball1.display();
 }

 function keyPressed(){
	if(keyCode == 32){
		Body.applyForce(ball1.body,ball1.body.position,{x:230,y:-300})
	}
 }

