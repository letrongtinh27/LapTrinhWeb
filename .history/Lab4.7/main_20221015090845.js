var button;
for (i = 0; i < 63; i++) {
    button = document.createElement("button");
    button.innerHTML = i;
    button.className = "btn btn-outline-success";
    var buttonDiv = document.getElementById("buttons");
    buttonDiv.appendChild(button);
}