timerStart();


var i = 0;
var tid;
const billeder1 = ["img/ny-karusel-1.svg", "img/ny-karusel-2.svg", "img/ny-karrusel-3.svg"];
const billeder2 = ["img/ny-karusel-2.svg", "img/ny-karrusel-3.svg", "img/ny-karusel-1.svg"];
const billeder3 = ["img/ny-karrusel-3.svg", "img/ny-karusel-1.svg", "img/ny-karusel-2.svg"];



document.getElementById('imageGallery1').style.opacity = '0.3';
document.getElementById('imageGallery2').style.opacity = '1';
document.getElementById('imageGallery3').style.opacity = '0.3';

function updateImage() {
    document.getElementById("imageGallery1").src = billeder1[i];
    document.getElementById("imageGallery2").src = billeder2[i];
    document.getElementById("imageGallery3").src = billeder3[i];
}

function timerStart() {
tid = setInterval(nextImage, 5000);
}
function timerStop() {
    clearInterval(tid);
}
function autoSkift() {
    i = (i + 1) % billeder1.length;
    updateImage();
    updateButtonStyles();
}

function autoSkift() {
    i = (i + 1) % billeder2.length;
    updateImage();
    updateButtonStyles();
}

function autoSkift() {
    i = (i + 1) % billeder3.length;
    updateImage();
    updateButtonStyles();
}





let et = document.querySelector('.et');
let to = document.querySelector('.to');
let tre = document.querySelector('.tre');

function updateButtonStyles() {
    if (i == 0){
        et.style.backgroundColor = 'rgb(165, 165, 165)';
            to.style.backgroundColor = 'rgb(207, 207, 207)';
            tre.style.backgroundColor = 'rgb(207, 207, 207)';
           
           
    } else if (i== 1){

        et.style.backgroundColor = 'rgb(207, 207, 207)';
        to.style.backgroundColor = 'rgb(165, 165, 165)';
        tre.style.backgroundColor = 'rgb(207, 207, 207)';
       
    } else if (i == 2){
    
        et.style.backgroundColor = 'rgb(207, 207, 207)';
        to.style.backgroundColor = 'rgb(207, 207, 207)';
        tre.style.backgroundColor = 'rgb(165, 165, 165)';
    }
          
}
function skiftBillede(klikket) {
    timerStop();
if (klikket === 1){
    i = 0
} else if (klikket === 2) {
i = 1
}
else if (klikket === 3) {
    i = 2
}
    

    updateImage();
    updateButtonStyles();
    timerStart();
}


