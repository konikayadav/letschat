function addUser() {
    var user = document.getElementById("user_name").value;
    localStorage.setItem("u1", user );
    window.location = "chat_room.html";
}