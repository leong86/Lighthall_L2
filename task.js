

  function addTask() {
    const title = document.getElementById("title").value;
    const start = document.getElementById("start").value;
    const due = document.getElementById("due").value;
    const status = document.getElementById("status").value;
    const userId = firebase.auth().currentUser.uid;
    const taskRef = database.ref("users/" + auth.currentUser.uid + "/tasks" + title).push();

    taskRef.set({
      title: title,
      start: start,
      due: due,
      status: status,
      userId: userId
    }).then(() => {
      // updateTable();
      console.log("Create successfully ");
    }).catch(error => {
      console.error("Error adding task: ");
    });
  }
  
  

  function deleteTask() {
    const taskId = document.getElementById("delete").value;
    console.log(taskId);
    const taskRef = database.ref("users/" + auth.currentUser.uid + "/tasks" + taskId);
    taskRef.remove().then(() => {
      displayTasks();
      // updateTable();
      console.log("Task deleted successfully!");
    }).catch(error => {
      console.error("Error deleting task: ", error);
    });
  }
  

  function displayTasks() {
    const taskList = document.getElementById("taskList");
    const currentTasks = document.getElementById("currentTasks");
    const userId = firebase.auth().currentUser.uid;
    const taskRef = database.ref("users/" + userId + "/tasks");
    taskRef.once("value", snapshot => {
      taskList.innerHTML = "";
      currentTasks.innerHTML = "";
      snapshot.forEach(childSnapshot => {
        const task = childSnapshot.val();
        const taskId = childSnapshot.key;
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(task.title + " - " + task.status));
        taskList.appendChild(li);
        if (task.status !== "Completed") {
          const currentTask = document.createElement("p");
          currentTask.appendChild(document.createTextNode(task.title));
          currentTasks.appendChild(currentTask);
        }
      });
  });
}

function updateTable() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  const tasksRef = database.ref("users/" +  auth.currentUser.uid );

  tasksRef.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      const task = childSnapshot.val();
      const taskId = childSnapshot.key;
      const taskRow = `<tr><td>${task.title}</td><td>${task.status}</td><td><button class="btn btn-danger" onclick="deleteTask('${taskId}')">Delete</button></td></tr>`;
      taskList.innerHTML += taskRow;
    });
  });
}
window.onload = updateTable;
