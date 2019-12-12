//Carla Oñate, soon to be Ironmegahacker! :))


let orientation = ['N','E','S','W'];
const instructions = ['r','r','f','f','f','l','f','f','r','r','b','b'];
let moves = 0;

let rover = {
    x: 0,
    y: 0,
    direction: 'N',
    travelLog: [{x: 0, y: 0}]
};

// ======================================

function turnLeft(rover){
    console.log("turnLeft was called!");
    if(orientation.indexOf(rover.direction) == 0){            //Si es N entonces tiene que ser W
        rover.direction = orientation[-1];
    } else {
        let index = orientation.indexOf(rover.direction); //Sacar index de orientacion actual
        rover.direction = orientation[index-1]; //Resta uno al index porque voltea a la izq.
    }
    console.log(`Current direction is: ${rover.direction} \n`)
}


function turnRight(rover){
    console.log("turnRight was called!");
    if(orientation.indexOf(rover.direction) == 3){ //Si es W entonces tiene que ser ahora el inicio del array = N.
        rover.direction = orientation[0];
    } else {
        let index = orientation.indexOf(rover.direction); //Sacar index de orientacion actual
        rover.direction = orientation[index+1]; //Resta uno al index porque voltea a la izq.
    }
    console.log(`Current direction is: ${rover.direction} \n`);
}

function moveForward(rover){
    console.log("moveForward was called");
    switch (rover.direction){
        case 'N':  //direction y boundaries para que no salga del mapa
            if(rover.y>0){
                rover.y--;
            }
        break;

        case 'E':
            if(rover.x<9){
              rover.x++;
            }
        break;

        case 'S':
            if(rover.y<9){
                rover.y++;
            }
        break;

        case 'W':
             if(rover.y>0){
                rover.x--;
             }
        break;   //Muy importante, sino ta todo  deja de servir jiji.

        default:
            console.log('machine voice: End of the road\n'); //Mensaje si sale del mapa, cuando ningun caso es true.
        break;
      }
      rover.travelLog.push({x: rover.x, y: rover.y}); //pasa datos al path.
      console.log(`Current position is: x=${rover.x} and y=${rover.y}\n`); //dice posicion actual del rover.
      moves++;
}

function moveBackward(rover){   //BOUNS MEGA BOUNUS!! Copie la misma de forward pero cambie las restas y sumas de x y y respectivamente.
    console.log("moveBackward was called")
    switch (rover.direction){
        case 'N':  //direction y boundaries para que no salga del mapa
            if (rover.y<9){
                rover.y++;
             }
        break;

        case 'E':
            if(rover.x>0){
                rover.x--;
            }
        break;

        case 'S':
            if (rover.y>0){
            rover.y--;
            }
        break;

        case 'W':
            if (rover.x<9){
                rover.x++;
            }
        break;   //Muy importante, sino ta todo  deja de servir jiji.

        default:
            console.log('machine voice: End of the road\n'); //Mensaje si sale del mapa, cuando ningun caso es true.
        break;
      }
      rover.travelLog.push({x: rover.x, y: rover.y}); //pasa datos al path.
      console.log(`Current position is: x=${rover.x} and y=${rover.y}\n`); //dice posicion actual del rover.
      moves++;
}


function main(){  //funcion main para que todo este ordenadito.
for (let i=0; i<instructions.length; i++){  //itera sobre el array instrucciones, dependiendo letra corre funcion
    if (instructions[i] === 'r'){
        turnRight(rover)
    } else if (instructions[i] === 'l'){
        turnLeft(rover)
    } else if (instructions[i] === 'b'){
        moveBackward(rover)
    } else if (instructions[i] === 'f'){
        moveForward(rover)
    } else {
        console.log('Inputs are not valid, the letters allowed are: r,l,f,b') //VALIDATING INPUTS
    }
  }
console.log(`The path of the rover was the following: `);
for (let j=0; j<=moves; j++){
    console.log(`Coordinate${j+1} = (${rover.travelLog[j].x}, ${rover.travelLog[j].y})`) //imprime coordenadas que se guardaron en path usando el counter moves dentro de moveForward.
}
}


main() //aqui se corre main osea se corre todooooo :)) EMPIEZA LA DIVERSIOOON!