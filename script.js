// Function to add a Task
const addTask = () => {
  // get value from inputfield
  const newTask = document.querySelector("#taskInput").value;

  // get reference to unordered-list
  const ul = document.querySelector("#tasksList ul");

  if (newTask !== "" && ul.children.length < 7) {
    // create new list-item
    const li = document.createElement("li");

    // create a wrapper span for the text (to apply strikethrough to text only)
    const textWrapper = document.createElement("span");
    textWrapper.textContent = newTask;

    // create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // add checkbox to list-item
    li.appendChild(checkbox);

    // add text wrapper to list-item
    li.appendChild(textWrapper);

    // add class .taskItem to list-item
    li.classList.add("taskItem");

    // create button
    const button = document.createElement("button");

    // create X as textValue
    button.textContent = "X";

    // add class .removeBtn to button
    button.classList.add("removeBtn");

    // add button to list-item
    li.appendChild(button);

    // add list-item to unordered-list
    ul.appendChild(li);

    // add eventlistener to removeBtn
    button.addEventListener("click", () => {
      li.remove();
    });

    // add eventlistener to checkbox to toggle strikethrough
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        textWrapper.style.textDecoration = "line-through";
      } else {
        textWrapper.style.textDecoration = "none";
      }
    });

    // after adding list-item, clear inputfield
    document.querySelector("#taskInput").value = "";
  } else {
    return;
  }
};

// Add eventlistener to addBtn
document.querySelector("#addBtn").addEventListener("click", addTask);
document.querySelector("#taskInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// select all checkboxes and save them in const checkboxes.
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Function to filter and show only completed tasks
document.querySelector("#completeBtn").addEventListener("click", () => {
  const tasks = document.querySelectorAll("#tasksList ul li");

  tasks.forEach((task) => {
    const checkbox = task.querySelector('input[type="checkbox"]');

    // check if the task is completed (checkbox is checked)
    if (checkbox.checked) {
      task.style.visibility = "visible"; // Show the task
    } else {
      task.style.visibility = "hidden"; // Hide the task
    }
  });
});

// Function to filter and show only incomplete tasks
document.querySelector("#incompleteBtn").addEventListener("click", () => {
  const tasks = document.querySelectorAll("#tasksList ul li");

  tasks.forEach((task) => {
    const checkbox = task.querySelector('input[type="checkbox"]');

    // Check if the task is incomplete (checkbox is not checked)
    if (!checkbox.checked) {
      task.style.visibility = "visible"; // Show the task
    } else {
      task.style.visibility = "hidden"; // Hide the task
    }
  });
});

// Function to delete all tasks
document.querySelector("#deleteAllBtn").addEventListener("click", () => {
  const ul = document.querySelector("#tasksList ul");

  // clear all list items
  ul.innerHTML = "";
});
