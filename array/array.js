class MyArray {
  constructor() {
    this.data = {},
    this.length = 0;
  }

  get(index) {
    return this.data[index];
  }

  insert(element) {
    this.data[this.length] = element
    this.length++
    return this.data
  }

  pop() {
    if(this.length <=0) {
      return;
    }
    const lastItem = this.data[this.length-1]
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  deleteIndex(index) {
    if (index < 0 || index >= this.length) {
      return;
    }
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }


  // agrega un elemento al inicio
  unshift(item) {
    for(let i = this.length; i > 0 ; i--){
      this.data[i] = this.data[i-1]
    }
    this.length++
    this.data[0] = item;
    return this.data;
  }

  shift() {
    for(let i = 0; i < this.length-1; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1]
    this.length--
    return this.data
  }
}

const myArray = new MyArray()


myArray.insert(10) //0 
myArray.insert(20) // 1
myArray.insert(30) // 2 <- elemento a eliminar
myArray.insert(40)  // 3

// myArray.shift()

// [10, 20, 40]
