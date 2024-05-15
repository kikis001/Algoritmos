const elements = [1,5,8,11,16,40,56,72,99];
const meta = 23

let izquierda = 0
let derecha = elements.length - 1

function findN(arr, target) {
  while(izquierda<=derecha) {
    let m = Math.trunc(izquierda + (derecha - izquierda) / 2 )
    if(arr[m] == target) {
      console.log(`Encontrado en la posición ${m}`)
      return m
    }else if(arr[m]<target) {
      izquierda = m+1
    }else {
      derecha = m-1
    }
  }
  return -1
}

findN(elements,meta)

// for(let i = 0; i<elements.length; i++) {
//   let m = Math.trunc(izquierda + (derecha - izquierda) /2)
//   if(elements[m] == meta) {
//     return "find"
//   }else if(m<meta) {
//     izquierda = elements[m+1]
//   }
// }