var button = document.getElementById('btn');
button.onclick = function(e) {
    var textArea = document.getElementById('text__area').value;
    var textFiled = document.getElementById('text__field').value;
    var count = 0;
    if(textArea.search(textFiled)){
        count++;
        console.log(count);
    }

}