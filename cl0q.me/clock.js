function updateClock() {
    var time  = new Date();
    var clock = time.getHours() + ':' + (time.getMinutes()<10?'0':'') + time.getMinutes();
    document.getElementById("time").innerHTML = clock;
    console.log(clock);
    setTimeout(updateClock, 1000);
}
updateClock();
