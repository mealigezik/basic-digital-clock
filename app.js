function displayTime() {
    let x = new Date();
    let hour = x.getHours();
    let min = x.getMinutes();
    let sec = x.getSeconds();

    let son = "AM";

    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }

    if (hour > 12) {
        son = "PM";
        hour = hour - 12;
        if (hour < 10) {
            hour = "0" + hour;
        }
    }

    document.getElementById("clock").innerHTML =
        hour + ":" + min + ":" + sec + " " + son;
}

setInterval(displayTime, 1000);
