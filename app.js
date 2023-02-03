function displayTime(){
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let milliSec = d.getMilliseconds();
    
    
    // if (milliSec < 100){
    //     milliSec = "0" + milliSec;
    // }else if (milliSec < 10){
    //     milliSec = "00" + milliSec;
    // }
     if (milliSec < 10){
        milliSec = "0" + milliSec;
    }
    
    if (sec < 10)
    sec = "0" + sec ;
    
    if (min < 10)
    min = "0" + min;
    
    if (d < 10)
    d += "0"+ d ;
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + ":" + milliSec;
}

setInterval(displayTime, 30);