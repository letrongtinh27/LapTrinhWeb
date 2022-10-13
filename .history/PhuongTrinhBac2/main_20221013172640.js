function ptb2(a, b, c) {
    

    var delta = Math.pow(b,2) - 4*a*c;
    if(a == 0) {
        document.write("Không phải phương trình bậc 2")
    }

    console.log(delta);
}
var a = 0;
var b = -49;
var c = -50;
document.writeln("Phương trình: " );
ptb2(a, b, c);
