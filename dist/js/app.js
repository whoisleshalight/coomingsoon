(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    function timer() {
        var nowDate = new Date;
        var achiveDate = new Date(2024, 9, 28, 17, 0, 0);
        var result = achiveDate - nowDate + 1e3;
        if (result < 0) {
            var elmnt = document.getElementById("timer");
            elmnt.innerHTML = " - : - - : - - : - - ";
            return;
        }
        var seconds = Math.floor(result / 1e3 % 60);
        var minutes = Math.floor(result / 1e3 / 60 % 60);
        var hours = Math.floor(result / 1e3 / 60 / 60 % 24);
        var days = Math.floor(result / 1e3 / 60 / 60 / 24);
        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;
        if (hours < 10) hours = "0" + hours;
        elmnt = document.getElementById("timer");
        elmnt.innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
        setTimeout(timer, 1e3);
    }
    window.onload = function() {
        timer();
    };
    window["FLS"] = true;
})();