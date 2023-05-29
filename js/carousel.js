startKarrusellen();
var i = 0;
var billeder1 = ["img/ny-karusel-1.svg", "img/ny-karusel-2.svg", "img/ny-karusel-3.svg"];
var billeder2 = ["img/ny-karusel-2.svg", "img/ny-karusel-3.svg", "img/ny-karusel-1.svg"];
var billeder3 = ["img/ny-karusel-3.svg", "img/ny-karusel-1.svg", "img/ny-karusel-2.svg"];

var tid;

function startKarrusellen() {
    tid = setInterval(nextImage, 5000);
}
function stopKarrusellen() {
    clearInterval(tid);
}
function nextImage() {
    i = (i + 1) % billeder1.length;
    updateImage();
    updateButtonStyles();
}

function nextImage() {
    i = (i + 1) % billeder2.length;
    updateImage();
    updateButtonStyles();
}

function nextImage() {
    i = (i + 1) % billeder3.length;
    updateImage();
    updateButtonStyles();
}

function updateImage() {
    document.getElementById("imageGallery1").src = billeder1[i];
    document.getElementById("imageGallery2").src = billeder2[i];
    document.getElementById("imageGallery3").src = billeder3[i];
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
        tre.style.backgroundColor = 'rgb(165, 165, 165)';}

          
}
function skiftBillede(klikket) {
    stopKarrusellen();
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
    startKarrusellen();
}


