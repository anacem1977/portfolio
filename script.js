document.getElementById("name").addEventListener("wheel", nickName("ANA CECILIA"));

document.getElementById("name").addEventListener("wheel", originalName);

function originalName() {
    let display = document.getElementById("name");
    display.innerHTML = "";
    display.innerHTML = "ANACÉ";
}

function nickName(text) {
    let display = document.getElementById("name");
    display.innerHTML = "";
    display.innerHTML = text;
}



console.log(rana);