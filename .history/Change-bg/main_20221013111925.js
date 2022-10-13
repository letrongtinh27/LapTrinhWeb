var listBTN = document.getElementsByClassName("item");

for(var i =0; i < listBTN.length ; i++) {
    listBTN[i].onclick = function() {
        var text = document.getElementById("Red").innerHTML;
        var bg = document.getElementsByClassName("change-bg");
        if(text == "Red") {
            bg.style.color = "red";
        }

    }
}