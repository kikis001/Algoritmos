// Definir una nueva matriz
let matriz = new Array(90, 80, 70, 60, 30);

// agregar un elemento a la matriz
function append(arr, elemet) {
  let newMatriz = new Array(arr.length+1);
  for(let i = 0; i<arr.length; i++){
    newMatriz[i] = arr[i];
  }
  newMatriz[arr.length] = elemet;
  // console.log(matriz[arr.length])
  return newMatriz;
}
// console.log(append(matriz, 75))


// inserta un elemento en el índice indicado
function insert(arr, index, element) {
  let tem = new Array(arr.length + 1);
  for(let i = 0; i<arr.length; i++) {
    if(i < index) {
      tem[i] = arr[i]
    }else {
      tem[i + 1] = arr[i]
    }
  }
  tem[index] = element;
  return tem
}

// console.log(insert(matriz, 2, 75));

// eliminar un elemento dado su índice

function deleteE(arr, index) {
  let newMatriz = new Array(arr.length - 1);
  for(let i = 0; i<arr.length; i++) {
    if(i<index) {
      newMatriz[i] = arr[i]
    }if(i>index) {
      newMatriz[i-1] = arr[i]
    }
  }
  return newMatriz
}

console.log(deleteE(matriz, 2))
