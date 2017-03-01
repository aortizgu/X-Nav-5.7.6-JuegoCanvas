
var isInLimits = function(object){

    if( object.y > MAX_HEIGHT ||
        object.y < MIN_HEIGHT ||
        object.x > MAX_WIDTH ||
    object.x < MIN_WIDTH){
        return false;
    }
    return true;
}

var isTouching = function(object, target, radius){
    var x = (object.x <= (target.x + radius) && target.x <= (object.x + radius));
    var y = (object.y <= (target.y + radius) && target.y <= (object.y + radius));
    return (x && y);
}

var isFreeObstacles = function(object, centerIsValid){
    var ret = true;
    for (var i=0; i < arrayStones.length; i++){
        if (isTouching(object, arrayStones[i], OBJECTSIZE - 5)){
            ret=false;
            break;
        }
    }
    if(!centerIsValid){
        if(isTouching(object, hero, OBJECTSIZE + 5)){
            ret=false;
        }
    }
    return ret;
}

var canGo = function(object){
    if(!isInLimits(object)){
        //console.log("Limits object(" + object.x + ", " + object.y + ")")
        return false;
    }
    if(!isFreeObstacles(object, true)){
        //console.log("Obstacles object(" + object.x + ", " + object.y + ")")
        return false;
    }
	return true;
}

var getRandomPos = function(coord, centerIsValid){

    var aux = {};
	var end = false;
	while(!end){
		aux.x = Math.round(Math.random() * MAX_WIDTH);
		aux.y = Math.round(Math.random() * MAX_HEIGHT);
		if(isFreeObstacles(aux, centerIsValid, OBJECTSIZE) && isInLimits(aux)){
			end = true;
		}
	}
	coord.x = aux.x;
	coord.y = aux.y;
}
