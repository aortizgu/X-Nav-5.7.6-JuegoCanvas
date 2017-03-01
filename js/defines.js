var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480

const MAX_WIDTH=canvas.width - 64;
const MAX_HEIGHT=canvas.height - 64;
const MIN_WIDTH=32;
const MIN_HEIGHT=32;
const OBJECTSIZE=32;
//map
const MAP_X_SIZE=(MAX_WIDTH-MIN_WIDTH)/OBJECTSIZE;
const MAP_Y_SIZE=(MAX_HEIGHT-MIN_HEIGHT)/OBJECTSIZE;
console.log("mapSize[" + MAP_X_SIZE + ", " + MAP_Y_SIZE + "]")
var map = new Array(MAP_X_SIZE);;

document.getElementById("container").appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// princess image
var princessReady = false;
var princessImage = new Image();
princessImage.onload = function () {
	princessReady = true;
};
princessImage.src = "images/princess.png";

//stone image
var stoneReady = false;
var stoneImage = new Image();
stoneImage.onload = function () {
   stoneReady = true;
};
stoneImage.src = "images/stone.png";

//monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
   monsterReady = true;
};
monsterImage.src = "images/monster.png";

// Game objects
var hero = {
	speed: 256 // movement in pixels per second
};
var princess = {};


var numStones = 6;
var arrayStones;

var numMonster = 1;
var arrayMonster;

if (localStorage.getItem("level") === null) {
  localStorage.setItem("level", parseInt(0))
}

var map=new Array(MAP_X_SIZE);

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);
