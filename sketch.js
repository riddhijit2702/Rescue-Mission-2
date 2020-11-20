var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,f1,f2,f3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	fi=createSprite(width/2,650,100,20)
	fi.shapeColor="red"

	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
 
	walla=createSprite(width/2,650,100,20)
	walla.shapeColor="red"
	wallb=createSprite(350,610,20,100)
	wallb.shapeColor="red"
	wallc=createSprite(450,610,20,100)
	wallc.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,friction:0, isStatic:true});
	World.add(world, packageBody);
	wall1=Bodies.rectangle(width/2,650,100,20,{isStatic:true})
	World.add(world,wall1)
	wall2=Bodies.rectangle(350,610,20,100,{isStatic:true})
	World.add(world,wall2)
	wall3=Bodies.rectangle(650,610,20,100,{isStatic:true})
	World.add(world,wall3)
	
	/*wall2=Bodies.rectangle(width/2,610,20,100,{isStatic:true})
	World.add(world,wall2)*/
    
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
   /* fill ("red")
	 rect1=Bodies.rectangle(400,650,100,20,{isStatic:true})
	 rect2=Bodies.rectangle(100,650,20,100,{isStatic:true})*/
	Engine.run(engine);
   
}
                      

function draw() {
	
  
  background(0);
  rectMode(CENTER);
  //fill("red")
 

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 // keyPressed();
  drawSprites();
  text("X= "+mouseX/*+mouseY*/, 20,20);
  text("Y= "+mouseY/*+mouseY*/, 20,60);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  Matter.Body.setStatic(packageBody,false)
    
  }
}


