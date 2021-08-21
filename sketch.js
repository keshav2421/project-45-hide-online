var database;
var boy,bimg;
var gameState = 0;
var playerCount;


var form, player, game;
function  preload() {

bimg = loadImage("player-2/p1.png")


  
}

function setup() {

  database = firebase.database();

  createCanvas(displayWidth , displayHeight);



  game = new Game();
  game.getState();
  game.start();

}


function draw() {
  background(255,255,255);  


  drawSprites();
}


//download all images
//completing previous projects
