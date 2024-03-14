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

// const repository = new Repository();

// repository.createActivity("Musica", "Es una actividad relajante", "imgURL");
// repository.createActivity("Deporte", "Es bueno para el cuerpo y alma", "imgURL");
// repository.createActivity("Lectura", "Cultiva y ejercita la mente", "imgURL");
// repository.createActivity("Pintura", "Incrementa la inspiración y despierta la creatividad", "imgURL");

// console.log("Todas las actividades en el repositorio: ", repository.getAllActivities());

// repository.deleteActivity(3);

// console.log("Actividades después de eliminar la actividad con ID 3: ", repository.getAllActivities());

function createActivityElement(activity) {
  const { id, title, description, imgURL } = activity;

  const titleElement = document.createElement("h3");
  titleElement.innerHTML = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = description;

  const imgElement = document.createElement("img");
  imgElement.src = imgURL;

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("main__cards");

  cardContainer.addEventListener("click", () => {
    cardContainer.remove();
    repository.deleteActivity(id);
  });

  cardContainer.appendChild(titleElement);
  cardContainer.appendChild(descriptionElement);
  cardContainer.appendChild(imgElement);

  return cardContainer;
}

function displayAllActivities(repository) {
  const container = document.getElementById("activity__container");
  container.innerHTML = "";

  const activities = repository.getAllActivities();
  activities.forEach((activity) => {
    const activityElement = createActivityElement(activity, repository);
    container.appendChild(activityElement);
  });
}

function addBtnHandler() {
  const titleInput = document.getElementById("title").value;
  const descriptionInput = document.getElementById("description").value;
  const imgUrlInput = document.getElementById("imgUrl").value;

  if (titleInput == "" || descriptionInput == "" || imgUrlInput == "") {
    alert("Hay datos incompletos");
    return;
  }

  repository.createActivity(titleInput, descriptionInput, imgUrlInput);
  displayAllActivities(repository);

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("imgUrl").value = "";
}

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addBtnHandler);

const repository = new Repository();
