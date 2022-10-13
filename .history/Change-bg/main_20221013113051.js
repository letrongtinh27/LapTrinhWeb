var listBTN = document.getElementsByClassName("item");
for(var i =0; i < listBTN.length ; i++) {
    listBTN[i].onclick = function() {
        var test = document.getElementById("Red");
        var bg = document.getElementsByName("bg");
        
        if (test.innerHTML == "Red") {
            bg.style.background = "Red";
        }

    }
}