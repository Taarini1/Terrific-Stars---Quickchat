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
      room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_value");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
Likes= message_data['like'];
Msg= message_data['msg'];

name_tag = "<h3>"+ Name + "<img class='tick_image' src='images-removebg-preview.png'> </h3>"
msg_tag = "<h4>" + Msg + "</h4>"
//button_1 = "<button class= 'btn btn-danger' id='"+ firebase_message_id + "' value="+Likes+"onclick='update_like(this.id)'>"
button_1 ="<button class='btn btn-warning' id="+firebase_message_id+" value="+Likes+" onclick='update_like(this.id)'>";
button_2 = "<span class= 'glyphicon glyphicon-thumbs-up' > like: " + Likes + "</span> </button> <hr>"

row=name_tag+msg_tag+button_1+button_2;
document.getElementById("output").innerHTML+=row;
} });  }); }
getData();

function update_like(message_id){
      button_id = message_id;
      likes=document.getElementById(button_id).value;
      UpdateLikes= Number(likes)+1;
      firebase.database().ref(room_name).child(button_id).update({
            like : UpdateLikes

      });

}

function Send(){
message = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      like:0,
      msg:message

});

document.getElementById("msg").value=""
}

function Logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_value")
      window.location = "index.html";
}

