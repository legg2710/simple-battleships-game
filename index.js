///Iniciando las variables///

let myGridSize = prompt('What size would you like your grid to be?');
let enemyGridSize = prompt('What size would you like your enemy grid to be?');
let myGrid = createGrid(myGridSize);
let enemyGrid = createGrid(enemyGridSize);
let myShips = 3;
let enemyShips = 3;
let enemyLocations = {};

///Impresion de los tableros
printGrid(enemyGrid, true);
printGrid(myGrid);


///Config del Jugador
for (let i = 1; i < 4; i++) {
    let x = prompt('Enter the x coordinate for your ship number ' + i);
    let y = prompt('Enter the y coordinate for your ship number ' + i);
    placeCharacter(x, y, 'O', myGrid);
    placeRandomCharacter('O', enemyGrid, enemyGridSize); /// Enemy AI en los parametros del tablero
    printGrid(enemyGrid, true);
    printGrid(myGrid);
}

///Config del Juego
while(enemyShips > 0 && myShips > 0) {
  let x = prompt('Enter the x coordinate for your attack ');
  let y = prompt('Enter the x coordinate for your attack ');

  if (attack, (x, y, enemyGrid)) {
      enemyShips--;
  }

  printGrid(enemyGrid, true);
  printGrid(myGrid);
}

///Creación del tablero///
///Hacemos una función que tome parámetros de tamaño
///Creamos un arreglo que basado en el tamaño creara otros arreglos adentro, cada elemento dentro de la variable "grid" sera un arreglo en sí.(esto nos permitirá ver la estructura del tablero).

function createGrid(size) { 
  let grid = [];
  for (let i = 0; i< size; i++) {
    grid[i] = [];
    for (let j = 0; j< size; j++) {
      grid[i][j] = '-';///Cada posición inicial del tablero sera un guion.
    }
  }
  return grid;
}

///Creación de un método para imprimir el tablero
///Establecemos la función "printGrid" para llamar al "grid" y un booleano llamado "isEnemy" como parámetros para diferenciar nuestro tablero y el de nuestro oponente, ocultando el de nuestro contrincante con el valor "false".
///Establecemos una constante bajo el nombre "headers" para las coordenadas en el tablero, a su vez agregamos el método "createHeaders" dándole "grid" y "length" como parámetros de lógica.

function printGrid(grid, isEnemy = false) {
    const headers = createHeaders(grid.length);
    console.log(headers);
    for (let i = 0; i < grid.length; i++) {
        let rowStr = i + '  ';
        for (let cell of grid [i]) {
            if (isEnemy && cell == 'O') {
                rowStr += '- ';
            }   else {
                rowStr += cell + '  ';
            }
        }
        console.log(rowStr);
    }
}

function createHeaders(size) {
    let result = '  ';
    for (let i = 0; i < size; i++) {
        result += i + '  ';
    }
    return result;
}

function placeCharacter(x, y, c, grid) {
    grid[y][x] = c;
}
 /// Enemy AI en los parametros del tablero Pt.2
function placeRandomCharacter(c, grid, max) {
  let didPlace = false;
  while (!didPlace) {
    let x = getRandomInt(max);
    let y = getRandomInt(max); 
    if (!enemyLocations[`${x}-${y}`]){ ///Permite al enemigo jugadas aleatorias sin repetir las anteriores
      placeCharacter(x, y, c, grid);
      didPlace = true;
      enemyLocations[`${x}-${y}`] = true;
    }
  }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function attack(x, y, grid) { ///Para determinar si fue un ataque fallido o exitoso
  if (grid,[y],[x] == 'O') {
    grid [y], [x] ='!';
    return true;
  } else if (grid[y][x] == '-' ){
    grid[y][x] = 'x';
    return false;  
  } else {
      return false;
  }
} 