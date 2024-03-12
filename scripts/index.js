class Activity {
  constructor(id, title, description, imgURL) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgURL = imgURL;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 1;
  }
  getAllActivities() {
    return this.activities;
  }
  createActivity(title, description, imgURL) {
    const id = this.id++;
    const nuevaAvtividad = new Activity(id, title, description, imgURL);
    this.activities.push(nuevaAvtividad);
  }
  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

const repository = new Repository();

repository.createActivity("Musica", "Es una actividad relajante", "imgURL");
repository.createActivity("Deporte", "Es bueno para el cuerpo y alma", "imgURL");
repository.createActivity("Lectura", "Cultiva y ejercita la mente", "imgURL");
repository.createActivity("Pintura", "Incrementa la inspiración y despierta la creatividad", "imgURL");

console.log("Todas las actividades en el repositorio: ", repository.getAllActivities());

repository.deleteActivity(3);

console.log("Actividades después de eliminar la actividad con ID 3: ", repository.getAllActivities());

