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
  }
  getAllActivities() {
    return this.activities;
  }
  createActivity(...activities) {
    this.activities = [...this.activities, ...activities];
  }
  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

const repository = new Repository;

repository.createActivity(
  new Activity(1, "Musica", "Es una actividad relajante", "imgURL"), 
  new Activity(2, "Deporte", "Es bueno para el cuerpo y alma", "imgURL"), 
  new Activity(3, "Lectura", "Cultiva y ejercita la mente", "imgURL"),
  new Activity(4, "Pintura", "Incrementa la inspiración y despierta la creatividad", "imgURL")
  );

console.log("Todas las actividades en el repositorio: ", repository.getAllActivities());

repository.deleteActivity(3);

console.log("Actividades después de eliminar la actividad con ID 3: ", repository.getAllActivities());