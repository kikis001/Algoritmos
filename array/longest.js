function longest(s) {
  let p1 = 0;
  let caracteresVistos = { }
  let longitudMax = 0;

  for(let fin = 0; fin<s.length; fin++) {
    const current = s[fin];

    if(caracteresVistos[current] !== undefined && caracteresVistos[current] >= p1) {
      p1 = caracteresVistos[current] + 1
    }

    caracteresVistos[current] = fin;
    let longitudActual = fin - p1 + 1
    longitudMax = Math.max(longitudMax, longitudActual)
  }
  return longitudMax
}

let text = "asdfdsa"; // longitud máxima 3
const value = longest(text);
console.log(value)
