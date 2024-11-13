const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const task = document.querySelector("input");

    const taskList = document.querySelector("#task-list");
    const listContainer = document.createElement("div");
    listContainer.id = "task-container";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", handleDeletButton);
    listContainer.append(task.value); //append a text element
    listContainer.appendChild(deleteButton);

    // Display the task and remove form values
    taskList.appendChild(listContainer);
    task.value = "";
}

function handleDeletButton(event) {
    event.target.parentNode.remove();
}
