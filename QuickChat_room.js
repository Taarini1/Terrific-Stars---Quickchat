var firebaseConfig = {
      apiKey: "AIzaSyAVObyd3_1i8hvwq9WQkqJPT9iPlSpLdKE",
      authDomain: "quickchat-efd2c.firebaseapp.com",
      databaseURL: "https://quickchat-efd2c-default-rtdb.firebaseio.com",
      projectId: "quickchat-efd2c",
      storageBucket: "quickchat-efd2c.appspot.com",
      messagingSenderId: "761493384363",
      appId: "1:761493384363:web:87de7283ad286a92a1dbee"
    };
    
  
      firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_value");
document.getElementById("user_name").innerHTML="Welcome"+" "+user_name+"!"
function Addroom(){
room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"add room"

      });
      localStorage.setItem("room_name",room_name);
      window.location="QuickChatroom_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ 
       Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(roomName){
      localStorage.setItem("room_name",roomName);
      window.location="QuickChatroom_page.html";
}

function Logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_value")
      window.location = "index.html";
}

