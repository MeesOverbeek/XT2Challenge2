function showTijd() {
    
    var date = new Date();
    var seconde = date.getUTCSeconds();
    var minuut = date.getUTCMinutes();
    var uur = date.getUTCHours();
    var dag = date.getUTCDate();
    var maand = date.getUTCMonth()+1;
    var jaar = date.getUTCFullYear();
    
    if (seconde < 10){
        seconde = "0" + seconde
    }
    
    if (minuut < 10){
        minuut = "0" + minuut
    }
    
    if (uur < 10){
        uur = "0" + uur
    }
    
    var tijd = uur + ":" + minuut + ":" + seconde;
    var datum = dag + "-" + maand + "-" + jaar;
    
    document.getElementById("klok").innerHTML = tijd;
    document.getElementById("date").innerHTML = datum;
    
    setTimeout(showTijd, 1000);
}

showTijd();

function achergrondSwap(){
    var date = new Date();
    
    //zet achter gethours een waarde om verschillende achtergronden te zien
    //b.v.: var uur = date.getUTCHours()-6;
    var uur = date.getUTCHours();
        
    switch (true) {
        case uur >= 0 && uur < 6:
            document.body.style.backgroundImage = "url(images/night.jpg)";
            break;
        
        case uur >= 6 && uur < 12:
            document.body.style.backgroundImage = "url(images/morning.jpg)";
            break;
            
        case uur >= 12 && uur < 18:
            document.body.style.backgroundImage = "url(images/middag.jpg)";
            break;
        
        case uur >= 18 && uur <= 24:
            document.body.style.backgroundImage = "url(images/avond.jpg)";
            break;
            
        default:
            document.body.style.backgroundImage = "url(images/earth.jpg)";
        
    }
}
achergrondSwap();