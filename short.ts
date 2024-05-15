let arr: number[] = [7, 18, 4, 30,2];


for(let i = 0; i<arr.length; i++){
  for(let j = i+1; j<arr.length; j++){
    if(arr[i]>arr[j]){
      let aux = arr[i];
      arr[i] = arr[j];
      arr[j] = aux;
    }
  }
  console.log(arr)
}
