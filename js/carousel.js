
let billeder1 = ["img/billede1-tilkarrusel.svg", "img/billede2-tilkarrusel.svg", "img/billede3-tilkarrusel.svg"];
let billeder2 = ["img/billede2-tilkarrusel.svg", "img/billede3-tilkarrusel.svg", "img/billede1-tilkarrusel.svg"];
let billeder3 = ["img/billede3-tilkarrusel.svg", "img/billede1-tilkarrusel.svg", "img/billede2-tilkarrusel.svg"];

document.getElementById('imageGallery1').style.opacity = '0.3';
document.getElementById('imageGallery2').style.opacity = '1';
document.getElementById('imageGallery3').style.opacity = '0.3';

function opdateredeBillede() {
    document.getElementById("imageGallery1").src = billeder1[i];
    document.getElementById("imageGallery2").src = billeder2[i];
    document.getElementById("imageGallery3").src = billeder3[i];
}


 
function timerStart() {
setInterval(autoSkift, 5000);
}

timerStart();

let i = 0;
function autoSkift() {
    i = (i + 1) % billeder3.length;
    opdateredeBillede();
    opdateretKnap();
}




let et = document.querySelector('.et');
let to = document.querySelector('.to');
let tre = document.querySelector('.tre');

function opdateretKnap() {
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


let saetninger = ["Medarbejder rekrutteret til stillingen design og værktøjs manager", "Medarbejder rekrutteret til stillingen backend developer", "Medarbejder rekrutteret til stillingen Technical Publications Writer"];

let beskrivelseafvirksomhed = document.getElementById("beskrivelsestekst");


function tidTimer(j) {
    return function () {
      beskrivelseafvirksomhed.innerHTML = saetninger[j];
  
      if (j == saetninger.length - 1) {
        setTimeout(skiftTekst, 5000);
      }
    };
  }

function skiftTekst() {
    for (let j = 0; j < saetninger.length; j++) {
      setTimeout(tidTimer(j), j * 5000);
    }
  }
  
  


function skiftBillede(klikket) {
    
   
    if (klikket === 1) {
        i = 0;
        beskrivelseafvirksomhed.innerHTML = saetninger[0];
    } else if (klikket === 2) {
        i = 1;
        beskrivelseafvirksomhed.innerHTML = saetninger[1];
    } else if (klikket === 3) {
        i = 2;
        beskrivelseafvirksomhed.innerHTML = saetninger[2];
    }

    opdateretKnap();
    opdateredeBillede();
   
    
}


skiftTekst();
