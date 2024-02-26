
const button = document.getElementById("button");
const paragraph = document.getElementById("paragraph");

button.addEventListener("click", event => {

    if(paragraph.style.visibility === "hidden"){
        paragraph.style.visibility = "visible";
        button.textContent = "Hide";
    }
    else{
        paragraph.style.visibility = "hidden";
        button.textContent = "Show";
    }
});
