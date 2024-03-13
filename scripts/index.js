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
  createActivity(title, description, imgURL) {
    const id = this.id++;
    const nuevaAvtividad = new Activity(id, title, description, imgURL);
    this.activities.push(nuevaAvtividad);
  }
  getAllActivities() {
    return this.activities;
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



const addBtn = document.getElementById("add");
const body = document.getElementsByTagName("body")[0];

const addBtnHandler = () => {

  const nuevoDiv = document.createElement("div");
  nuevoDiv.classList.add("main__cards");
  nuevoDiv.addEventListener("click", (event) => {
    event.target.remove();
  });

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const imgUrl = document.getElementById("imgUrl");

  const titleElement = document.createElement("p");
  titleElement.textContent = title.value;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = description.value;

  const imgElement = document.createElement("img");
  imgElement.src = imgUrl.value;

  nuevoDiv.appendChild(titleElement);
  nuevoDiv.appendChild(descriptionElement);
  nuevoDiv.appendChild(imgElement);

  title.value = "";
  description.value = "";
  imgUrl.value = "";

  body.appendChild(nuevoDiv);
}

addBtn.addEventListener("click", addBtnHandler);