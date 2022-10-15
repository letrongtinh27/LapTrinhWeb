var button = document.getElementById('btn');
button.onclick = function(e) {
    var textArea = document.getElementById('text__area').value;
    var textFiled = document.getElementById('text__field').value;
    window.alert("Số lần xuất hiện của " + textFiled + " là: " + textArea.split(textFiled).length -1)
}