//YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCSyNWlBpAGipltguI40izKHlXoDl6x_kM",
    authDomain: "chatter2-34c6b.firebaseapp.com",
    databaseURL: "https://chatter2-34c6b-default-rtdb.firebaseio.com",
    projectId: "chatter2-34c6b",
    storageBucket: "chatter2-34c6b.appspot.com",
    messagingSenderId: "993542213806",
    appId: "1:993542213806:web:1a2a3c1a36463bc9479d3f",
    measurementId: "G-SPS2CFL9VQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}