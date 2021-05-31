const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box1, box2, ground,pig1,log1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;

    box1=  new Box(700,320,70,70);
    box2= new Box(920,320,70,70);
    pig1 = new Pig(810,320,50,50);
    log1 = new Log(810,260,300,PI/2);

    box3=  new Box(700,240,70,70);
    box4= new Box(920,240,70,70);
    pig2 = new Pig(810,240,50,50);
    log2 = new Log(810,180,300,PI/2);
    box5= new Box(810,160,70,70);
bird= new Bird(80,100,50,50);
    log4= new Log(760,120,150,PI/7);
    log5= new Log(820,120,150,-PI/7);
    ground= new Ground(600,390,1200,20);
}

function draw(){
    
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display()
    pig1.display();
    log1.display();

    box3.display();
    box4.display()
    pig2.display();
    log2.display();
    box5.display(); 
bird.display();
    log4.display();
    log5.display();
    ground.display();
}



