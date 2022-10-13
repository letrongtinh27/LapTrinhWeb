function ptb2(a, b, c) {
    let delta = Math.pow(b,2);
    if(a==0) {
        document.write("Không phải phương trình bậc 2")
    }
    // let delta = Math.pow(b, 2) - 4 * a * c ;
    // console.log(delta);
    // if(a==0){
        //     document.writeln("Không Phải Phương Trình Bậc 2");
        // } else if(delta < 0) {
            //     document.write("Phương Trình vô Ngiệm");
            // } else if(delta = 0) {
                //     var x = -(b/(2*a));
                //     document.write("Phương Trình Có Ngiệm Kép = " + x);
                // } else if(delta >0) {
                    //     var x1 = (-(b + Math.sqrt(delta)) / (2 *a));
                    //     var x2 = (-(b - Math.sqrt(delta)) / (2 *a));
                    //     document.write("Phương Trình Có 2 Ngiệm Phân Biệt: " + "x1 = " + x1 + " x2= " + x2);
                    // }
                    
                    console.log(a);
                    console.log(b);
                    console.log(c);
                    console.log(delta);
}
// var a = 1;
// var b = -49;
// var c = -50;
// var result = ptb2(0, 1, 2);
// console.log(result);
// document.write("Phương Trình: " + a+"x^2" + b+"x" + c + "= " + result);
let a = 1;
let b =2;
let c = 3;
document.write(ptb2(a,b,c));