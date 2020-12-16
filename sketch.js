var speed1;
var speed2;
var speed3;
var speed4;
var weight1;
var weight2;
var weight3;
var weight4;
var deformation1;
var deformation2;
var deformation3;
var deformation4;
var car1
var car2;
var car3;
var car4;
var wall1;
var wall2;
var wall3;
var wall4;
var line1;
var line2;
var line3;
var line4;

function setup() {
     createCanvas(1600, 800);


     wall1 = createSprite(1500, 100, 20, 80);
     wall2 = createSprite(1500, 300, 20, 80);
     wall3 = createSprite(1500, 500, 20, 80);
     wall4 = createSprite(1500, 700, 20, 80);

     car1 = createSprite(100, 100, 20, 20);
     car2 = createSprite(100, 300, 20, 20);
     car3 = createSprite(100, 500, 20, 20);
     car4 = createSprite(100, 700, 20, 20);

     line1 = createSprite(1500, 200, 3500, 10);
     line1.shapeColor = "white"

     line2 = createSprite(1500, 400, 3500, 10);
     line2.shapeColor = "white"

     line3 = createSprite(1500, 600, 3500, 10);
     line3.shapeColor = "white"


}

function draw() {
     background(0);
     speed1 = 30
     speed2 = 26
     speed3 =15
     speed4 = 35
     weight1 =2260
     weight2 =1522
     weight3 =3000
     weight4 =1700

     deformation2 = Math.round(0.5 * weight2 * speed2 * speed2 / 22500);
     deformation3 = Math.round(0.5 * weight3 * speed3 * speed3 / 22500);
     deformation4 = Math.round(0.5 * weight4 * speed4 * speed4 / 22500);


     car1.velocityX = speed1;
     car2.velocityX = speed2;
     car3.velocityX = speed3;
     car4.velocityX = speed4;


     if (wall2.x - car2.x < wall2.width / 2 + car2.width / 2) {
          car2.velocityX = 0;
          deformation2 = Math.round(0.5 * weight2 * speed2 * speed2 / 22500);
          if (deformation2 <25 ) {
               car2.shapeColor = "green";
          }
          if (deformation2>25&&deformation2<30 ) {
               car2.shapeColor = "yellow";
          }
          if (deformation2 >28) {
               car2.shapeColor = "red";
          }
     }
     if (wall1.x - car1.x < wall1.width / 2 + car1.width / 2) {
          car1.velocityX = 0;
          deformation1 = Math.round(0.5 * weight1 * speed1 * speed1 / 22500);
          if (deformation1 <25) {
               car1.shapeColor = "green";
          }
          if (deformation1>25&&deformation1<30) {
               car1.shapeColor = "yellow";
          }
          if (deformation1 >28) {
               car1.shapeColor = "red";
          }
     }
     if (wall3.x - car3.x < wall3.width / 2 + car3.width / 2) {
          car3.velocityX = 0;
          deformation3 = Math.round(0.5 * weight3 * speed3 * speed3 / 22500);
          if (deformation3 <25) {
               car3.shapeColor = "green";
          }
          if (deformation3>25&&deformation3<30) {
               car3.shapeColor = "yellow";
          }
          if (deformation3 > 28) {
               car3.shapeColor = "red";
          }
     }
      if (wall4.x - car4.x < wall4.width / 2 + car4.width / 2) {
          car4.velocityX = 0;
          deformation4 = Math.round(0.5 * weight4 * speed4 * speed4 / 22500);
          if (deformation4 <25) {
               car4.shapeColor = "green";
          }
          if (deformation4 >25&&deformation4<30) {
               car4.shapeColor = "yellow";
          }
          if (deformation4 >28) {
               car4.shapeColor = "red";
               
          }
     }
    






     drawSprites();
}