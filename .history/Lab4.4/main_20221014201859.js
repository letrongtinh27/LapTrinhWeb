var button = document.getElementById('btn');
button.onclick = function(e) {
    var textArea = document.getElementById('text__area').value;
    var textFiled = document.getElementById('text__field').value;
    var count = 0;
    count = textArea.match(new RegExp(textFiled));

}