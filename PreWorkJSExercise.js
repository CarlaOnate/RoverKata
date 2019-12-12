//Move player around a matrix, 3x3

function moveHorizontal(thePlayer, move){
    if (thePlayer.y >= 0 || thePlayer.y <=2){
        if(move === "d"){
            thePlayer.y++;
        } else{
            thePlayer.y--;
        }
        thePlayer.path.push(player.x,player.y);
    } else {
        console.log('Ya te saliste del tablero');
    }
    let newPos = {x:thePlayer.x, y:thePlayer.y}
    console.log(`posicion actual: x=${thePlayer.x}  y=${thePlayer.y}`);
    thePlayer.path.push(newPos);
}


function moveVertical(thePlayer, move){
    if (thePlayer.x >=0 || thePlayer.y <=2){
        if (move === "d"){
            thePlayer.x++;
        } else {
            thePlayer.x--;
        }
        let newPos = {x:thePlayer.x, y:thePlayer.y}
        console.log(`posicion actual: x=${thePlayer.x}  y=${thePlayer.y}`);
        thePlayer.path.push(newPos);
    }
}

player = {x:1, y:1, path:[{x:1,y:1}]};

