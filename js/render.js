
// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (princessReady) {
		ctx.drawImage(princessImage, princess.x, princess.y);
	}

	if (stoneReady) {
		for(var i=0;i<arrayStones.length;i++){
        	ctx.drawImage(stoneImage, arrayStones[i].x, arrayStones[i].y);
        }
	}

    if (monsterReady) {
		for(var i=0;i<arrayMonster.length;i++){
        	ctx.drawImage(monsterImage, arrayMonster[i].x, arrayMonster[i].y);
        }
	}

	if (princessReady) {
		ctx.drawImage(princessImage, princess.x, princess.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Princesses caught: " + parseInt(localStorage.level), 32, 32);
};
