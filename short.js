let arr = [7, 18, 4, 20, 30];

for(let i = 0; i<arr.length; i++){
  for(let j = i+1; j<arr.length; j++){
    if(arr[i]<arr[j]){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}


for(let i = 0; i<arr.length; i++){
  console.log(arr[i])
}