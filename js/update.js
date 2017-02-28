
// Update game objects
var update = function (modifier) {
    var movedHero = {}
    movedHero.x = hero.x
    movedHero.y = hero.y
    if (38 in keysDown) { // Player holding up
        movedHero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) { // Player holding down
        movedHero.y += hero.speed * modifier;
    }
    if (37 in keysDown) { // Player holding left
        movedHero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) { // Player holding right
        movedHero.x += hero.speed * modifier;
    }

    if (canGo(movedHero)) {
        hero.x = movedHero.x;
        hero.y = movedHero.y;
    }

    for (var i = 0; i < arrayMonster.length; i++) {
        var movedMonster = {
            x: arrayMonster[i].x,
            y: arrayMonster[i].y
        };

        if (hero.y < arrayMonster[i].y) {
            movedMonster.y -= arrayMonster[i].speed * modifier;
        }

        if (hero.y > arrayMonster[i].y) {
            movedMonster.y += arrayMonster[i].speed * modifier;
        }

        if (hero.x < arrayMonster[i].x) {
            movedMonster.x -= arrayMonster[i].speed * modifier;
        }

        if (hero.x > arrayMonster[i].x) {
            movedMonster.x += arrayMonster[i].speed * modifier;
        }

        if (canGo(movedMonster)) {
            arrayMonster[i].x = movedMonster.x;
            arrayMonster[i].y = movedMonster.y;
        }

    }
    if (isTouching(hero, princess, OBJECTSIZE)) {
        ++princessesCaught;
        reset();
    }

    for (var i = 0; i < arrayMonster.length; i++) {
        if (isTouching(hero, arrayMonster[i], OBJECTSIZE)) {
            if (princessesCaught > 0) {
                --princessesCaught;
            }
            reset();
            break;
        }
        if (isTouching(princess, arrayMonster[i], OBJECTSIZE)) {
            if (princessesCaught > 0) {
                --princessesCaught;
            }
            reset();
            break;
        }
    }
};
