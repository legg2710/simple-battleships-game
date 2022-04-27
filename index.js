///Iniciando las variables///

let myGridSize = prompt('What size would you like your grid to be?');
let enemyGridSize = prompt('What size would you like your enemy grid to be?');
let myGrid = createGrid(myGridSize);
let enemyGrid = createGrid(enemyGridSize);

///Creación del tablero///
///Hacemos una función que tome parámetros de tamaño
///Creamos un arreglo que basado en el tamaño creara otros arreglos adentro, cada elemento dentro de la variable "grid" sera un arreglo en sí.(esto nos permitirá ver la estructura del tablero).

function createGrid(size) { 
  let grid = [];
  for (let i = 0; i< size; i++) {
    grid[i] = [];
    for (let k = 0; j< size; j++) {
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
        result = '  ';
    }
    return result;
}