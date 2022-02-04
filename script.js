var firebaseConfig = {
    apiKey: "AIzaSyBqx97rNojoVGazbUFffeSFRWPBHjaorhI",
    authDomain: "kwitter-cf0e6.firebaseapp.com",
    databaseURL: "https://kwitter-cf0e6-default-rtdb.firebaseio.com",
    projectId: "kwitter-cf0e6",
    storageBucket: "kwitter-cf0e6.appspot.com",
    messagingSenderId: "955783203268",
    appId: "1:955783203268:web:466b3f08e9e1c5bb63fc91"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("username");
  document.getElementById("h3").innerHTML="Welcome "+username;

  function add_room(){
      room_name=document.getElementById("text_1"). value;
      firebase.database().ref("/").child(room_name).update({
          purpose:'adding room'
      });
localStorage.setItem("room_name",room_name);
window.location="index3.html";
  }