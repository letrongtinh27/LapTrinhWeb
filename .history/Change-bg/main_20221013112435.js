var listBTN = document.getElementsByClassName("item");
var bg = document.getElementsByClassName("change-bg");
for(var i =0; i < listBTN.length ; i++) {
    listBTN[i].onclick = function() {
        var test = document.getElementById("Red");
        if (test.innerHTML == "Red") {
            bg.style.color = "red";
        }

    }
}