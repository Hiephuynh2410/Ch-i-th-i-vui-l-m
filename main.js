let noButton = document.getElementById("noButton");
let yesButton = document.getElementById("yesButton");
let questionText = document.querySelector("h1");


yesButton.addEventListener("click", function() {
    questionText.textContent = "Cúc"; 
    createFireworks(); 
});

noButton.addEventListener("mouseenter", function() {
    moveButton();
});

function moveButton() {
    let maxX = window.innerWidth - noButton.offsetWidth;
    let maxY = window.innerHeight - noButton.offsetHeight;

    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";
}

moveButton();


