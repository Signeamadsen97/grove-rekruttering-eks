startKarrusellen();
//laver variablen i og giver den værdien 0, laver varibalen billeder som er et array med billeder,
//skaber en varibel kaldet tid, som tildeles en værdi senere.
var i = 0;
var billeder = ["ny-karusel-1.svg", "ny-karusel-2.svg", "ny-karusel-3.svg"];
var tid;

//laver en funktion som skal få karrusellen til at køre med et defineret interval under. 
//Den skifter billede hvert 5 sekund, og men er ikke kaldt endnu
function startKarrusellen() {
    tid = setInterval(nextImage, 5000);
}
//Denne funktion stopper karrusellens timer når den kaldes
function stopKarrusellen() {
    clearInterval(tid);
}
//denne funktion regner en i værdi ved at tage nuværende værdi + 1. 
//Derefter ses der hvor mange gange den går op i arrayet "billeder" længde,
//og hvis der er en resterende, er det den nye værdi. Samtidig kalder den funktioneR
//som  opdaterer billedet der vises og den styling der er på knapperne
function nextImage() {
    i = (i + 1) % billeder.length;
    updateImage();
    updateButtonStyles();
}

//her bliver funktionen  updataimage skabt, som hele tiden opdaterer hvilken billede som vises
//her bruger den før declared value som "i" har fået til at beslutte hvilket billede
//i arrayet som skal vises
function updateImage() {
    document.getElementById("imageGallery").src = billeder[i];
}
//her defineres variablerne et, to og tre, som trækkes fra knapperne i HTML
let et = document.querySelector('.et');
let to = document.querySelector('.to');
let tre = document.querySelector('.tre');

//her bliver funktionen skabt som opdaterer button styles ud fra hvilken værdi "i" har
//er lavet med en if else if statement
function updateButtonStyles() {
    if (i == 0){
        et.style.backgroundColor = 'black';
            to.style.backgroundColor = 'white';
            tre.style.backgroundColor = 'white';
    } else if (i== 1){

        et.style.backgroundColor = 'white';
        to.style.backgroundColor = 'black';
        tre.style.backgroundColor = 'white';
    } else if (i == 2){
    
        et.style.backgroundColor = 'white';
        to.style.backgroundColor = 'white';
        tre.style.backgroundColor = 'black';}

          
}
//her er funktionen skiftBillede lavet, som også ligger på alle knapperne i HTML
//klikkes der på knappen, bliver funktionen som stopper karrusellen kaldt, og her efter tjekkes
//der værdien af knappen som er trykket på, ud fra denne tildeles "i" en ny værdi.
//efter billederne er skiftet, opdateres stylesne og karrusellen startes igen
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


