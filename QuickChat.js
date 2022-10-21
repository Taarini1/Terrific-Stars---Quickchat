function Login(){
    user_value=document.getElementById("user_value").value 
    localStorage.setItem("user_value",user_value)
    window.location="QuickChat_room.html";
}