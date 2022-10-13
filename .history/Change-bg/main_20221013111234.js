var listBTN = document.getElementsByClassName("item");

for(var i =0; i < listBTN.length ; i++) {
    listBTN[i].onclick = function() {
        console.log(listBTN[i].getAttribute());
    }
}