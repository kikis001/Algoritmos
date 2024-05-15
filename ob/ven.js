const luis1 = {
  name: "Luis",
  username: "kayaba",
  points: 1000,
  socialMedia: {
    twitter: "kikixx",
    ig: "kikisxx",
    facebook: undefined,
  },
  approvedCourses: [
    "Curso defininitivo de HTML",
    "Curso defininitivo práctico",
  ],
  learningPaths: [
    {
      name: "Desarrollo web",
      couses: [
        "Curso defininitivo de HTML",
        "Curso defininitivo práctico",
        "Curso de responsive desing",
      ],
    },
    {
      name: "Escuela de videojuegos",
      courses: [
        "Curso de introducción a la producción de videojuegos",
        "Curso de unity 3D",
      ],
    },
  ],
};

// crear un objeto sobre las escuelas
class learningPaths {
  constructor({
    name,
    courses = []
  }) {
    this.name = name
    this.courses = courses
  }
  // agregarCurso(curso) {
  //   const { name, claasses} = curso
  //   const curse = {
  //     name,
  //     claasses
  //   }
  //   this.courses.push(curse)
  // }
}

// crear instancias por cada escuela
class Courses {
  constructor({
    name,
    classes = []
  }) {
    // los atributos y métodos que no queremos que se llamen desde afuera del prototipo por convención se les pone un guión bajo
    this._name = name
    this.classes = classes
  }
  // cómo podemos acceder a ese atributo o método, para eso es el método get
  get name() {
    return this._name
  }
  // cómo podemos modificar ese atributo o método, para eso es el método set
  // se pone el nombre del atributo
  set name(nuevoNombre) {
    if(nuevoNombre === "Curso malito de programación básica") {
      console.error("Web... no")
    }else {
      this._name = nuevoNombre
    }
  }
  // al usar el método set se usa la notación de "=" para asignar el nuevo valor
}
const basica = new Course({
  name: "Gratis de programación",
  
})

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    points,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name
      this.email = email
      this.username = username
      this.socialMedia = {
        twitter,
        instagram,
      };
      this.points = points
      this.approvedCourses = approvedCourses
      this.learningPaths = learningPaths
  }
}

const Enrique = new Student(
  {
    name: "Luis Enrique",
    username: "Luis",
    points: 20,

  }
)



// class Banda {
//   constructor({
//     nombre,
//     generos = []
//   }){
//     this.nombre = nombre,
//     this.generos = generos
//     this.integrantes = [];
//   }
//   agregarIntegrante(integranteNuevo) {
//     let { nombre, instrumento } = integranteNuevo
//     let integrante = new Integrante({nombre, instrumento})
//     this.integrantes.push(integrante)
//   }
// }

// class Integrante {
//   constructor({
//     nombre,
//     instrumento
//   }){
//     this.nombre = nombre
//     this.instrumento = instrumento
//   }
// }
// const data = {
//   nombre: "Los Jacks",
//   generos: ["rock", "pop", "post-punk"],
//   integrantes: [],
// }
// const banda = new Banda(data)
// banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
// banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))

// console.log(banda)