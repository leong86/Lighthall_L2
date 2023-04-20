firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})

function logout() {
    firebase.auth().signOut()
      .then(() => {
        console.log("User logged out successfully!");
        // Clear task list
        document.getElementById("taskList").innerHTML = "";
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  }
