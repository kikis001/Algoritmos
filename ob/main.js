class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

class Couse {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = "spanish"
  }) {
    this._name = name;
    this.classes = classes
    this.isFree = isFree,
    this.lang = lang
  }
  
  get name() {
    return this._name
  }
  set name(name) {
    if(name === "Curso malito de programación básica"){
      console.warn("Lo sentimos, no puedes ponerle ese nombre")
    }else {
      this._name = name
    }
  }
}

const cursoBasica = new Course({
  name: "Curso gratis de programación básica",
  isFree: true
}) 

const cursoPracticoHTML = new Course({
  name: "Curso práctico de HTML y CSS",
  lang: "english"
})

class FreeStudent extends Student {
  // ahora llamamos al constructor de la clase padre
  constructor(props) {
    super(props); // nos permite llamar al constructor de la clase madre
  }

  approvedCourse(newCourse) {
    if(newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    }else {
      console.warn('Lo sentimos, ' + this.name + ' solo puedes tomar cursos abiertos');
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approvedCourse(newCourse) {
    if(newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse);
    }else {
      console.warn('Lo sentimos, ' + this.name + ' no puedes tomar cursos en inglés');
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approvedCourse(newCourse) {

  }
}

function videoPlay(id) {
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop() {
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {}
  pausar() {}
}


const Kayaba = new FreeStudent({
  name: "Luis Enrique",
  email: "kayaba@gmail.com",
  twitter: "kayabaDC",
  learningPaths: []
})