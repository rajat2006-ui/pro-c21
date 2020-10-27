var bullet,wall;
var weight,speed,thickness,damage;


function setup(){
    createCanvas(800,400);

    //to create sprite for bullet
    bullet=createSprite(100,200,60,30);
    bullet.shapeColor="yellow";
    bullet.velocityX=4;

    //to create a wall
    wall=createSprite(750,200,20,100);
    wall.shapeColor="brown";

    //to check deformation
    weight=random(30,52);
    speed=random(223,321);
    thickness=random(22,83);
    damage=weight/2*speed*speed/(thickness*thickness*thickness);
}
    

function draw(){
    background("white");

    //to check collision
    if(wall.x-bullet.x<wall.width/2+bullet.width/2){
        bullet.velocityX=0;
        
        if(damage>10){
           wall.shapeColor="red"
            fill("red");
            textSize(20);
            text("wall is not safe",100,100);
        }

        if(damage<10){
            wall.shapeColor="green";
            fill("green");
            textSize(20);
            text("wall is very safe",100,100);
        }

    }

    drawSprites();
}