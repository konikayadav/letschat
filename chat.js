function addUser() {
    var user = document.getElementById("player_1").innerHTML;
    localStorage.setItem("u1", user );
    window.location = "Kwitter_room.html";
}