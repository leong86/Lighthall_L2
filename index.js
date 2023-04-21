
document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("main.html")
    }
})

// function login(){
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .catch((error)=>{
//         document.getElementById("error").innerHTML = error.message
//     })
// }

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User logged in successfully!");
        // Get user data from database and display tasks
        getTasks();
      })
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message
        console.error("Error logging in: ", error);
      });
  }

// function signUp(){
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch((error) => {
//         document.getElementById("error").innerHTML = error.message
//     });
// }

function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User created successfully!");
        // Add user data to database
        firebase.database().ref("users/" + auth.currentUser.uid).set({
          email: email,
          tasks: []
        });
      })
      .catch((error) => {
        console.error("Error creating user: ", error);
      });
  }


function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function getTasks() {
    const taskList = document.getElementById("taskList");
  
    // Clear task list
    taskList.innerHTML = "";
  
    // Get user tasks from database
    const tasksRef = database.ref("users/" + auth.currentUser.uid + "/tasks");
    tasksRef.orderByChild("createdAt").on("child_added", (snapshot) => {
      const task = snapshot.val();
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.appendChild(document.createTextNode(task.name));
      taskList.appendChild(li);
    });
  }

  