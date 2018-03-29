let updateTime = function(e){
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    
    let ampm = "AM";
    if(currentHours > 12) {
        currentHours -= 12;
        ampm = "PM";
    }
    
    if(currentMinutes < 10) {
        currentMinutes = '0' + currentMinutes;
    }

    let timeElement = document.getElementById("time");
    timeElement.innerHTML = currentHours + ":" + currentMinutes + " " + ampm;
}

updateTime();
setInterval(updateTime, 200);