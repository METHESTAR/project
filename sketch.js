const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,375,800,10);
    box1 = new Box(596,350,50,50);
    box2=new Box(745,350,50,50);
    pig1=new Pig(680,350,30,30);
    walls1=new Wall(675,320,200,PI/2);
    box3 = new Box(596,300,50,50);
    box4=new Box(745,300,50,50);
    pig2=new Pig(680,300,30,30);
    walls2=new Wall(675,200,200,PI/2);
    box5=new Box(675,190,50,50);
    walls3=new Wall(630,140,120,PI/6);
    walls4=new Wall(700,140,120,-PI/6);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    walls1.display();
    box3.display();
    box4.display();
    pig2.display();
    walls2.display();
    box5.display();
    walls3.display();
    walls4.display();
}

