// crear objetos y prototipos en JS

// objeto literal
const Luis = {
  // propiedades
  name: "Luis Enrique",
  age: 19,
  cursosAprobados: [
    "Curso definitivo de HTML y CSS",
    "Curso práctico de HTML y CSS",
  ],

  // los objetos literales pueden tener métodos
  /* hay dos opciones:  
  1) poner el nombre - tal como si fuera atributo- y definirlo como una function anónima, ejemplo:
  aprobarCurso: fuction() {}
  2) Poner el nombre del método - tal como si fuera una función - pero sin la palabra reservada
  */
  aprobarCurso(curso) {
    this.cursosAprobados.push(curso)
    // lo que hace this es hacer referencia al mismo objeto, tal como si pusieramos el nombre del objeto y su atributo
  }
};

// Aprobador un curso
Luis.cursosAprobados.push("Curso de resposive design");

Luis.aprobarCurso("Nest.JS y persistencia de datos con MongoDB")


// primer prototipo
/* 
Con el objeto literal se hacen instancias directamente, sin molde's, con un prototipo sí podemos tener ese modelo
*/
function Student(name, age, cursosAprobados) {
  this.name = name
  this.age = age
  this.cursosAprobados = cursosAprobados

  // por qué se usa this para definir atributos en JS

  // igual tenemos dos opciones de definir métodos en JS
  /* 1)
  this.aprobarCurso = function(curso) {
    this.cursosAprobados.push(curso)
  }
  */
}

// 2) Aquí se le llama al atributo "prototype" y se pasa el nombre de la función
Student.prototype.aprobarCurso = function(curso) {
  this.cursosAprobados.push(curso)
}

// instancias

const House = new Student("Gregory", 20, ["Introducción a la producción de los videojuegos", "creación de personajes"])

// ahora podemos crear prototipos con la sintaxis de clases
// prototipos con la sintaxis de clases
class Student2 {
  // es el método que se ejecuta cuando se crea la instancia del prototipo
  constructor(name, age, cursosAprobados) {
    this.name = name
    this.age = age
    this.cursosAprobados = cursosAprobados
  }
  // ahora dentro de nuestra clase podemos crear métodos dentro de la clase
  aprobarCurso(curso) {
    // igual this sigue haciendo referencia al prototipo - en este caso student2 -
    this.cursosAprobados.push(curso)
  }
}

const Kayaba = new Student2("Kayaba", 30, ["Curso definitivo de HTML y CSS",
"Curso práctico de HTML y CSS",])

/* ror: recibe un objeto y retorna un objeto */

/* en los parámetros de la función podemos tener más cosas, por cada instancia nos tomará mucho tiempo, y recordar el orden para recibir los parámetros
en lugar de recibir varios parámetros, podemos recivir un sólo parámetro de tipo "objeto"
constructor({
  // parámetros de antes: name, age, etc.
})
y al hacer la instancia igual solo le pasamos el objeto
new Student({
  etc
})
*/

class Student3{
  constructor({
    name, twitter, facebook, email, age, cursosAprobados = []}) { 
      this.name = name
      this.twitter = twitter
      this.facebook = facebook
      this.email = email
      this.age = age
      this.cursosAprobados = cursosAprobados
  }
}

const kayaba = new Student3(
  "kayaba", "x.com/kikisxx", "Luis Enrique", 23, ["Curso básico de programación orientada a objetos en javascript"]
)