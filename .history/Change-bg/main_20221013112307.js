var listBTN = document.getElementsByClassName("item");
var bg = document.getElementsByClassName("change-bg");
for(var i =0; i < listBTN.length ; i++) {
    listBTN[i].onclick = function() {
        var test = document.getElementById("Red");
        console.log(test.innerHTML);

    }
}