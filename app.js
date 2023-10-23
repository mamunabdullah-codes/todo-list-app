// Selectors

const taskForm = document.getElementById("task-input-form");
const taskInput = document.getElementById("new-task-input");
const taskBtn = document.getElementById("task-submit");
const allTasks = document.querySelector(".tasks");

// Form Event
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  taskInput.focus();
  taskForm.classList.add("task-form");
  if (!taskInput.value) {
    alert("Please insert a task");
    return;
  }
  // creating task div
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("content");
  // taskDiv.style.display = "flex";
  allTasks.appendChild(taskDiv);

  const inputTasks = document.createElement("input");
  inputTasks.type = "text";
  inputTasks.classList.add("input-task");
  inputTasks.value = taskInput.value;
  inputTasks.setAttribute("readonly", "readonly");
  inputTasks.style.border = "1px solid gray";
  inputTasks.focus();
  taskDiv.appendChild(inputTasks);

  const actionDiv = document.createElement("div");
  actionDiv.classList.add("actions");
  taskDiv.appendChild(actionDiv);

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.classList.add("editBtn");
  actionDiv.appendChild(editBtn);
  editBtn.addEventListener("click", () => {
    if (editBtn.innerText.toLowerCase() === "edit") {
      inputTasks.removeAttribute("readonly");
      editBtn.innerText = "Save";
      inputTasks.focus();
    } else {
      editBtn.innerText = "Edit";
      inputTasks.setAttribute("readonly", "readonly");
    }
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("deleteBtn");
  actionDiv.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", () => {
    allTasks.removeChild(taskDiv);
  });

  // console.log(taskInput.value);
  taskInput.value = "";
});

document.querySelector("body").addEventListener("click", (e) => {
  console.log(e.target.id);
});
