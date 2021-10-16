const firebaseConfig = {
      apiKey: "AIzaSyBOiHbH4xAxZJMuVvmeHVUwMdWRcTJ4w7A",
      authDomain: "classtest-18e02.firebaseapp.com",
      databaseURL: "https://classtest-18e02-default-rtdb.firebaseio.com",
      projectId: "classtest-18e02",
      storageBucket: "classtest-18e02.appspot.com",
      messagingSenderId: "45160498657",
      appId: "1:45160498657:web:e93333a0b1e7b16d453ea0"
    };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
