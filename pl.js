class learningPaths {
  constructor({
    name,
    courses = []
  }) {
    this.name = name
    this.courses = courses
  }
  agregarCurso(curso) {
    let { name, teachers, claasses } = curso
    let curse = new Courses({name, teachers, claasses})
    this.courses.push(curse)
  }

}

class Courses {
  constructor({
    name, //string
    teachers, // arreglo con strings,
    classes // numero
  }) {
    this.name = name
    this.teachers = teachers
    this.classes = classes
  }
}

const curso = {
  name: "curso de introducción a grapql",
  teachers: "Juanes",
  classes: 24
}

const escuelas = {
  name: "Escuela de desarrolo web",
  courses: []
}

const l = new learningPaths(escuelas)
l.agregarCurso(curso)
console.log(l);