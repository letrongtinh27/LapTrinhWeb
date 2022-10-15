var img = document.getElementById('image');
var deg_img = 0;

let intervael = null

if (deg_img < 360 ) {
    
    intervael = setInterval(()=> {
        deg_img += 15;
        // img.style.rotate = `${deg_img}deg`;
        img.style.transform= (rotate= `${deg_img}deg`);
        },2000
    )
} else if(deg_img == 360) {
            deg_img =0;
            clearInterval(intervael)

}
