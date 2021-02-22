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
function Send(){
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
console.log (firebase_message_id);
console.log(message_data);
var name = message_data['name'];
var message = message_data['message'];
var like = message_data['like'];
name_with_tag = "<h4>"+name+ "<img class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
like_button = "<button class = 'btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'> ";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row = name_with_tag + message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }

    function updateLike(message_id){
        console.log("clicked on  like button - "+ message_id);
        button_id = message_id;
              likes  = document.getElementById(button_id).value;
              update_likes = Number(likes)+1;
        console.log(update_likes);
        firebase.database().ref(room_name).child(message_id).update({
              like:updated_likes
        });
              
  }
  
  getData()
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
