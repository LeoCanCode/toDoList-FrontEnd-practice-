let tasks = [];
let id = 0;

const addButton = document.querySelector(".js-add-button");

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addTask();
  }
} );

addButton.addEventListener("click", () => {
  addTask();
});

function addTask() {
  const typingInput = document.querySelector(".js-typing-input");
  const dateInput = document.querySelector(".js-date-input");
  const priorityInput = document.querySelector(".js-priority-input");

  if (dateInput.value != '' && typingInput != '') {
    tasks.push({
      id: id++,
      task: typingInput.value,
      date: dateInput.value,
      priority: priorityInput.value,
    });
  
    renderTasks();
  
    typingInput.value = "";
    dateInput.value = "";
    priorityInput.value = "1";
  
  } else {
    alert('Está faltando alguma informação da sua tarefa! (nome ou data)')
  }
}


const tasksContainerDelete = document.querySelector(".js-all-tasks");
tasksContainerDelete.addEventListener('click', (event) => {
  if (event.target.classList.contains("js-delete-button")) {
    const taskId = Number(event.target.parentElement.dataset.id);

    tasks = tasks.filter((task) => {
      return task.id !== taskId;
     });

    renderTasks();
  }
})



function renderTasks() {
  const tasksContainerHigh = document.querySelector(".js-tasks-div-high");
  const tasksContainerMedium = document.querySelector(".js-tasks-div-medium");
  const tasksContainerLow = document.querySelector(".js-tasks-div-low");
  tasksContainerHigh.innerHTML = "";
  tasksContainerMedium.innerHTML = "";
  tasksContainerLow.innerHTML = "";

    tasks.forEach((task) => {

    if (task.priority == 1) {
      tasksContainerLow.innerHTML += `
          <div data-id="${task.id}" id="${task.id}">
            <div class="tasks-date-div">
            <div class="text-div">
              <p style="display: inline" class="task-text">${task.task}</p>
            </div>
              <p style="display: inline" class="date-text">${task.date}</p>
            </div>
            <button class="js-delete-button delete-button">DELETE</button>
          </div>
    `;
      document.getElementById(`${task.id}`).classList.add("task-cont-low");
    } else if (task.priority == 2) {
      tasksContainerMedium.innerHTML += `
          <div data-id="${task.id}" id="${task.id}">
            <div class="tasks-date-div">
            <div class="text-div">
              <p style="display: inline" class="task-text">${task.task}</p>
            </div>
              <p style="display: inline" class="date-text">${task.date}</p>
            </div>
            <button class="js-delete-button delete-button">DELETE</button>
          </div>
    `;
      document.getElementById(`${task.id}`).classList.add("task-cont-medium");
    } else if (task.priority == 3) {
      tasksContainerHigh.innerHTML += `
          <div data-id="${task.id}" id="${task.id}">
            <div class="tasks-date-div">
            <div class="text-div">
              <p style="display: inline" class="task-text">${task.task}</p>
            </div>
              <p style="display: inline" class="date-text">${task.date}</p>
            </div>
            <button class="js-delete-button delete-button">DELETE</button>
          </div>
    `;
      document.getElementById(`${task.id}`).classList.add("task-cont-high");
    }

  });
}
