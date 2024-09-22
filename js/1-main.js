let h1 = document.querySelectorAll("h1")[0];

document.addEventListener("keyup", (e) => {
    if (e.code == "KeyB") {
        h1.style.color = "#0000EE";
    }
    if (e.code == "KeyR") {
        h1.style.color = "#FF0000";
    }
    if (e.code == "KeyG") {
        h1.style.color = "#008000";
    }
    if (e.code == "KeyP") {
        h1.style.color = "#FF00FF";
    }
    if (e.code == "KeyW") {
        h1.style.color = "#FFFFFF";
    }
    if (e.code == "KeyV") {
        h1.style.color = "#800080";
    }
    if (e.code == "KeyO") {
        h1.style.color = "#FFA500";
    }    
});