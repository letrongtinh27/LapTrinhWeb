function ptb2(a, b, c) {
    var delta = Math.pow(b,2) - 4*a*c;
    if(a == 0) {
        document.write("Không phải phương trình bậc 2")
    } else if(delta < 0) {
        document.write("Phuong trình không có ngiệm")
    }

    console.log(delta);
}
var a = 1;
var b = -49;
var c = -50;
document.writeln("Phương trình: " + a+"x^2 " + b+"x " + c + " = ");
ptb2(a, b, c);
