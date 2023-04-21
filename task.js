
function addTask() {
  const title = document.getElementById("title").value;
  const start = document.getElementById("start").value;
  const due = document.getElementById("due").value;
  const status = document.getElementById("status").value;
  const userId = firebase.auth().currentUser.uid;
  const taskRef = database.ref("users/" + userId + "/tasks" + title).push();
  // console.log(userId);
  taskRef.set({
    title: title,
    start: start,
    due: due,
    status: status,
    userId: userId
  }).then(() => {
    updateTable();
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
    updateTable();
    console.log("Task deleted successfully!");
  }).catch(error => {
    console.error("Error deleting task: ", error);
  });
}

function updateTable() {
  
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  const userId = firebase.auth().currentUser.uid;
  console.log(userId);
  if (!userId) {
    console.log("User not authenticated");
    return;
  }

  var dbRef = firebase.database().ref();
  dbRef.child("users").child(userId).on("value", function(snapshot){
    snapshot.forEach(function(childSnapshot) {
      const task = childSnapshot.val();
      const taskId = childSnapshot.key;
      const taskRow = `<tr><td>${task.title}</td><td>${task.status}</td><td><button class="btn btn-danger" onclick="deleteTask('${taskId}')">Delete</button></td></tr>`;
      taskList.innerHTML += taskRow;
    });
  });
}


window.onload = updateTable;
