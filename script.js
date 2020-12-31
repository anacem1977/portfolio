console.log("Up and running");

//w3schools.com
let modal=document.getElementById("myModal");
let button=document.getElementById("modalButton");
let span=document.getElementsByClassName("close")[0];
let spanSubmit=document.getElementById("submitButton");
modalButton.onclick = function() {
    modal.style.display="block";
}
span.onclick = function() {
    modal.style.display = "none";
}
spanSubmit.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}