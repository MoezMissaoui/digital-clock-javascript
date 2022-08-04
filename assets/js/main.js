
let clock = () => {

    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    let period = "AM"
    if (hh == 0) {
        hh = 12
    } else if (hh >= 12) {
        hh = hh - 12
        period = "PM"
    }

    hh = (hh < 10) ? "0"+hh : hh
    mm = (mm < 10) ? "0"+mm : mm
    ss = (ss < 10) ? "0"+ss : ss

    let time = hh+":"+mm+":"+ss+" "+period

    document.getElementById("clock").innerText = time

    setTimeout(clock, 1000);
}
clock()
