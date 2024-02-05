const firebaseConfig = {
  apiKey: "AIzaSyDrOvyJ7_h5ffwLttrYiGTnSwXSm205wYA",
  authDomain: "letschat-f187d.firebaseapp.com",
  databaseURL: "https://letschat-f187d-default-rtdb.firebaseio.com",
  projectId: "letschat-f187d",
  storageBucket: "letschat-f187d.appspot.com",
  messagingSenderId: "94333180691",
  appId: "1:94333180691:web:ab66ee86084d70876998e6"
};

firebase.initializeApp(firebaseConfig);
function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("rooms").innerHTML = "";
       snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        htmlcode = "<div  id = '" + Room_names + "' class = 'room_name' onclick = 'setRoom(this.id)'>" + Room_names + "</div> <hr>";
        document.getElementById("rooms").innerHTML += htmlcode;
        //End code
      });
    });
}
getData();
function room_enter() {
  roomName = document.getElementById('room_name').value;
  firebase.database().ref('/').child(roomName).update({ purpose: "adding room" });
  document.getElementById('room_name').value = "";
  localStorage.setItem("room" , roomName);
  window.location = "chat_page.html";
}


document.getElementById("userName").innerHTML = "Welcome: " + localStorage.getItem("u1");