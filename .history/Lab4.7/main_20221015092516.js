var button;
for (i = 0; i < 64; i++) {
    button = document.createElement("button");
    button.innerHTML = i+1;
    button.className = "btn";
    var buttonDiv = document.getElementById("buttons");
    buttonDiv.appendChild(button);
}