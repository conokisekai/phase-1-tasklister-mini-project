document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    const priorityValue = document.getElementById("priority").value;
    const dueDate = document.getElementById("due-date").value;

    const taskItem = document.createElement("li");
    taskItem.innerText = `Task: ${taskDescription}, Priority: ${priorityValue}, Due Date: ${dueDate}`;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
    });
    taskItem.appendChild(deleteButton);

    taskItem.addEventListener("dblclick", function() {
      const newTaskDescription = prompt("Edit task:", taskDescription);
      if (newTaskDescription !== null) {
        taskItem.innerText = `Task: ${newTaskDescription}, Priority: ${priorityValue}, Due Date: ${dueDate}`;
      }
    });

    taskItem.style.color = priorityValue;

    document.getElementById("tasks").appendChild(taskItem);

    document.getElementById("create-task-form").reset();
  });
});

