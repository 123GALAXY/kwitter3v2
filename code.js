function adduser(){
    username=document.getElementById("t1").value;
    localStorage.setItem("username",username);
    window.location="quitter_room.html";
}