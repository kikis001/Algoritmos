// entrada: alturas = [a_1, a_2, a_n]
// debemos de encontrar dos números, no iguales, que al multiplicarlos nos den contenedor con más capacidad


function containerWater(altura) {
  let water = 0;

  let p1 = 0;
  let p2 = altura.length - 1;

  while(p1 > p2) {
    let currentWater = (p2 - p1) * (altura[p1] < altura[p2] ? altura[p1] : altura[p2])
    
    if(currentWater > water ) water = currentWater; 

    if(altura[p1] === altura[p2]) {
      p1 = p1 + 1
      p2 = p2 - 1
    }else if(altura[p1] > altura[p2]) {
      p2 = p2 - 1
    }else if(altura[p1] < altura[p2]) {
      p1 = p1 + 1
    }
  }
  return water
}