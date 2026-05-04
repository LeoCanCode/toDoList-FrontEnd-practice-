let tasks = [];
let id = 0;

const addButton = document.querySelector(".js-add-button");

addButton.addEventListener("click", () => {
  const typingInput = document.querySelector(".js-typing-input");
  const dateInput = document.querySelector(".js-date-input");
  const priorityInput = document.querySelector(".js-priority-input");

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

  console.log(tasks);
});


const tasksContainerDelete = document.querySelector(".js-tasks-div");
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
  const tasksContainer = document.querySelector(".js-tasks-div");
  tasksContainer.innerHTML = "";

  tasks.forEach((task) => {
    tasksContainer.innerHTML += `
        <div data-id="${task.id}">
          <p style="display: inline">${task.task}</p>
          <p style="display: inline">${task.date}</p>
          <button class="js-delete-button" >DELETE</button>
        </div>
  `;
  });
}
