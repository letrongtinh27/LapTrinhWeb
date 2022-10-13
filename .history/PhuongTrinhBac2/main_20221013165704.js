function ptb2(a, b, c) {
    var delta = Math.pow(b, 2) - 4 * a * c ;
    if(a==0){
        return document.writeln("Không Phải Phương Trình Bậc 2");
    } else if(delta < 0) {
        return document.writeln("Phương Trình vô Ngiệm")
    } else if(delta = 0) {
        var x = -(b/(2*a));
        return document.writeln("Phương Trình Có Ngiệm Kép = " + x);
    } else if(delta >0) {
        var x1 = (-(b + Math.sqrt(delta)) / (2 *a));
        var x1=2 = (-(b - Math.sqrt(delta)) / (2 *a));
        return document.writeln("Phương Trình Có 2 Ngiệm Phân Biệt: " + "x1 = " + x1 + " x2= " + x2);
    }
}
var a = 1;
var b = -49;
var c = -50;
var result = ptb2(a, b, c);
document.writeln("Phương Trình: " + a+"x^2" + b+"x" + c + "= " + result);