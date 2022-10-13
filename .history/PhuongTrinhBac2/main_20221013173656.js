function ptb2(a, b, c) {
    var delta = Math.pow(b,2) - 4*a*c;
    if(a == 0) {
        document.write("Không phải phương trình bậc 2")
    } else if(delta < 0) {
        document.write("Phuong trình không có ngiệm")
    } else if (delta == 0) {
        var x = -b/(2*a);
        document.write("Phương trình có nghiệm kép " + x);
    } else if(delta > 0){
        var x1 = (-b+Math.sqrt(delta))/(2*a);
        var x2 = (-b-Math.sqrt(delta))/(2*a);
        document.write("Phương trình có 2 nghiệm phân biệt: " + "x1 = " + x1 + "; x2= " + x2);
    } 
}
var a = 2;
var b = -3;
var c = 1;
document.write("Phương trình: " + a+"x^2 " + b+"x" +" +" + c + " = 0" +" \t");
ptb2(a, b, c);
