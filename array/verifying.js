// verifying alien dictionary:

/* 
te dará una lista de palabras, esas palabras estarán compuestas por las palabras
verificar que esta ordenado en forma de diccionario dado el diccionario
*/

// const text = "abcdefghijklmnñopqrstuvwxyz";

// const palabras = ["coder", "cono"];

// for (let i = 0; i < palabras.length; i++) {
//   // for(let j = i; j<palabras.length; j++) {
//   //   console.log(console[i])
//   // }
//   console.log(palabras[i]);
// }
// for(let i = 0; i<text.length; i++) {
//   console.log(text[i])
// }

function isAlientSorted(palabras, orden) {
  // mapa del diccionario, crear un orden 
  diccionario = new Map();
  for(let i = 0; i<orden.length; i++) {
    diccionario[orden[i]] = i
    // en la hash table tendremos: clava - valor. En la cual la clave será la letra y el valor un número
  }

  // complejidad (cantidad de palabras más la función usada)
  // 0(n) => 0(n * longitud de la palabra) = 0(n * k) = 0(n)
  for(let i = 1; i<palabras.length; i++) {
    if(comparar(palabras[i-1], palabras[i]) === false) {
      return false;
    } 
    return true;
  }
}

// los strings en JS se pueden trabajar como un arreglo, de tal manera que cada
// letra del texto tiene un número

// 0(longitud de la palabras más larga) => O(n)
function comparar(palabra1, palabra2) {
  const longitud = Math.min(palabra1.length, palabra2.length);
  for(let i = 0; i<longitud; i++) {
    if(diccionario[palabra1[i]] <diccionario[palabra2[i]]) {
      return true;
    }else  if(diccionario[palabra1[i]> diccionario[palabra2[i]]]){
      return false
    } 
    return palabra1.length <= palabra2.length;
  }
}

isAlientSorted(["conocer", "comida"], "asdfghjklñqwertyuiopzxcvbnm")