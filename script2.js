// Optimized script

// Cache elements for better performance
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const tasksList = document.querySelector("#tasksList ul");
const completeBtn = document.querySelector("#completeBtn");
const incompleteBtn = document.querySelector("#incompleteBtn");
const deleteAllBtn = document.querySelector("#deleteAllBtn");

// Function to add a task
const addTask = () => {
  const newTask = taskInput.value;

  if (newTask !== "" && tasksList.children.length < 7) {
    // Create new list item and its contents (unchanged)
    const li = document.createElement("li");
    const textWrapper = document.createElement("span");
    textWrapper.textContent = newTask;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const button = document.createElement("button");
    button.textContent = "X";
    button.classList.add("removeBtn");

    li.classList.add("taskItem");
    li.appendChild(checkbox);
    li.appendChild(textWrapper);
    li.appendChild(button);
    tasksList.appendChild(li);

    // Clear the input field after adding the task (unchanged)
    taskInput.value = "";
  }
};

// Event listener to add a task (unchanged)
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

// Event delegation for task removal and completion toggle
// Instead of adding event listeners to each checkbox and remove button individually,
// we use one listener on the parent container (tasksList)
tasksList.addEventListener("click", (e) => {
  const target = e.target;

  // Handle task removal
  if (target.classList.contains("removeBtn")) {
    target.parentElement.remove();
  }

  // Handle task completion toggle
  if (target.type === "checkbox") {
    const textWrapper = target.nextElementSibling;
    textWrapper.style.textDecoration = target.checked ? "line-through" : "none";
  }
});

// Function to filter tasks
// Combined logic for filtering completed and incomplete tasks into one function
const filterTasks = (showCompleted) => {
  const tasks = tasksList.querySelectorAll("li");

  tasks.forEach((task) => {
    const checkbox = task.querySelector('input[type="checkbox"]');
    // Show only completed or incomplete tasks based on the boolean showCompleted
    task.style.visibility =
      (showCompleted && checkbox.checked) ||
      (!showCompleted && !checkbox.checked)
        ? "visible"
        : "hidden";
  });
};

// Event listeners for filtering tasks (unchanged)
completeBtn.addEventListener("click", () => filterTasks(true));
incompleteBtn.addEventListener("click", () => filterTasks(false));

// Function to delete all tasks (unchanged)
deleteAllBtn.addEventListener("click", () => {
  tasksList.innerHTML = "";
});
