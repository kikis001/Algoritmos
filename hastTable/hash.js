// hash table vs objeto
/* 
son similares, ambas tiene una key y un valor, pero la diferencia es que el hash tiene un paso intermedio
los la función hash que le pasas la key y le asigna un valor y para acceder al valor solo debes de pasarle la key
*/

/* métodos: 
insert: agregar elementos a la hash table
search: buscar un elemento mediante su key:
delete: borrar un elemento
 */

// colisión de hash table: a veces al pasar dos valores diferentes a la hash función puede generar un mismo bucket
// es complicado evitar las colisión
// un bucket es donde se almacena los datos

/* 
Cómo funcionan?
tendremos un objeto que tendrá la siguiente estructura:

key: mandarinas,
value: 20

le pasamos ese objeto a la función hash, esa función generará un valor mediante la key que dicho
número que generá será el address y tendremos los buckets donde se almacenerá el objeto

*/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
    
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // residuo(%) es la cantidad que le hace falta para llegar a la cantidad del número que se quiere dividir

  set(key, value) {
    // address es la dirección del hash
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const value = this.hashMethod(key);
    const currentBucket = this.data[value];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
  }

  search() {}

  delete() {}
}

// Los buckets son 50
const myHashTable = new HashTable(50);
