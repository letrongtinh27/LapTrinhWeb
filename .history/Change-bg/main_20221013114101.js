var color1 = document.querySelectorAll('button');
var bg = document.getElementById('bg');


for(var i =0; i< color1.length; i++) {
    color1[i].onclick = function(e) {
        if(e.target.innerHTML == 'Red'){
            bg.style.background = 'Red';
        }
        if(e.target.innerHTML == 'Blue'){
            bg.style.background = 'Blue';
        }
        if(e.target.innerHTML == 'Green'){
            bg.style.background = 'Green';
        }
        if(e.target.innerHTML == 'Yellow'){
            bg.style.background = 'Yellow';
        }
        if(e.target.innerHTML == 'Black'){
            bg.style.background = 'Black';
        }
        if(e.target.innerHTML == 'Purple'){
            bg.style.background = 'Purple';
        }
        if(e.target.innerHTML == 'Pink'){
            bg.style.background = 'Pink';
        }

        
    }
}