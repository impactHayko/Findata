const myBox = document.getElementById("myBox");

function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Clicked!";
}

myBox.addEventListener("click", changeColor);

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "mouseover!";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click me!";
})