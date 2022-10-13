var listBTN = document.getElementsByClassName("item");
for(var i =0; i < listBTN.length ; i++) {
    listBTN[i].onclick = function() {
        var test = document.getElementById("Red");
        var bg = document.getElementById("bg");
        console.log(bg);
        if (test.innerHTML == "Red") {
            console.log(bg.innerHTML);
        }

    }
}