function phb2(a, b, c) {
    var delta = Math.pow(b, 2) - 4 * a * c ;
    if(a==0){
        return document.writeln("Không Phải Phương Trình Bậc 2");
    } else if(delta < 0) {
        return document.writeln("Phương Trình vô Ngiệm")
    }
}