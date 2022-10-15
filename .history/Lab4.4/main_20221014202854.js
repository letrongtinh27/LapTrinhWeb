var button = document.getElementById('btn');
button.onclick = function(e) {
    var textArea = document.getElementById('text__area').value;
    var textFiled = document.getElementById('text__field').value;
    var count = textArea.split(textFiled).length -1;
    window.alert("số lần xuất hiện của " + textFiled + " là: "+ count);
}