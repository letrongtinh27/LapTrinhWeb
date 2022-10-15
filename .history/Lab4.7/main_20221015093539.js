var button;
for (i = 0; i < 64; i++) {
    button = document.createElement("button");
    button.innerHTML = i+1;
    button.className = "btn";
    var buttonDiv = document.getElementById("buttons");
    buttonDiv.appendChild(button);
}

var btn_list = document.querySelectorAll('button');

var count = 1;
for(i = 0 ; i< btn_list.length; i++) {
    btn_list[i].onclick = function (e) {
        if(e.target.innerHTML == count) {
            count++;
            console.log(btn_list[i]);
        }
    }
}