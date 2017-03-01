
function resetMap(){
    arrayStones=[];
    arrayMonster=[];
    for (var i=0; i < MAP_X_SIZE; i++ ){
        map[i]=new Array(MAP_Y_SIZE);
        for ( var j=0; j < MAP_Y_SIZE;j++){
            map[i][j]=true;
        }
    }
};


// Reset the game when the player catches a princess
var reset = function () {

    //Hero
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	console.log("hero[" + hero.x + ", " + hero.y + "]")

    //Stones
    var stones = numStones + princessesCaught;
    arrayStones = [];
	while(stones-- > 0){
        var stoneToPut = {};
		getRandomPos(stoneToPut, false);
        console.log("stone [" + stoneToPut.x + ", " + stoneToPut.y + "]")
		arrayStones.push(stoneToPut);
	}

	// Throw the princess somewhere on the screen randomly
    var randomPos = {};
	getRandomPos(randomPos, false);
	princess.x = randomPos.x;
	princess.y = randomPos.y;
	console.log("princess [" + princess.x + ", " + princess.y + "]")

    //Monster
    var monster = numMonster;
    arrayMonster = [];
    while(monster-- > 0){
        var monsterToPut = {};
		getRandomPos(monsterToPut, false);
        console.log("monster [" + monsterToPut.x + ", " + monsterToPut.y + "]")
        monsterToPut.speed = 150 + princessesCaught * 2;
		arrayMonster.push(monsterToPut);
	}
};
