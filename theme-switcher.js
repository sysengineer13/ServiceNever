function light_switch() {
    var all = document.getElementsByTagName("*");

    for (var i = 0, max = all.length; i < max; i++) {
        all[i].style.color = "white";
        all[i].style.backgroundColor = "black";
    }
}

function dark_switch() {
    var all = document.getElementsByTagName("*");

    for (var i = 0, max = all.length; i < max; i++) {
        all[i].style.color = "black";
        all[i].style.backgroundColor = "white";
    }
}