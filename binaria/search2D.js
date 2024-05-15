function search2D(matriz, target) {
  // matriz = new Array(m)
  // for(let i = 0; i < m; i++ ) {
  //   matriz[i] = new Array(n);
  // }
  let l = 0;
  let r = matriz.length-1
  while(l<r) {
    m = l + (r - l) / 2+1;
    if(matriz[m][0] == target) {
      return true;
    }
    if(matriz[m][0] < target) {
      l = m
    }else {
      r = m - 1;
    }
  }
  let fila = matriz[l];
  l = 0;
  r = fila.length - 1
  while(l <= r) {
    m = l + (r - l) / 2;
    if(fila[m] == target) {
      return true;
    }
    if(fila[m] < target) {
      l = m + 1
    }else {
      r = m - 1;
    }
  }
}