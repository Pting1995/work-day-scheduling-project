// get time and change color of message area depending on time

setInterval( function() {
    time = moment().local().format("dddd, MMM D, YYYY, h:m:ssA");
    $("#currentTime").text(time)
    checkHour(moment().hour(Number))
}, 1000)

// color change maybe assign a value to each textbox 
function checkHour(hour) {
    $(".form-control").addClass("future");
    if (hour = 9) {
        $("#todo1").addClass("present").removeClass("future");
    }

    if (hour = 10) {
        $("#todo2").addClass("present").removeClass("future");
        $("#todo1").addClass("past").removeClass("future");
    }

    if (hour = 11) {
        $("#todo3").addClass("present").removeClass("future");
        $("#todo2").addClass("past").removeClass("future");
        $("#todo1").addClass("past").removeClass("future");
    }

    if (hour = 12) {
        $("#todo4").addClass("present").removeClass("future");
        $("#todo1").addClass("past").removeClass("future");
        $("#todo2").addClass("past").removeClass("future");
        $("#todo3").addClass("past").removeClass("future");

    }

    if (hour = 13) {
        $("#todo5").addClass("present").removeClass("future");
        $("#todo1").addClass("past").removeClass("future");
        $("#todo2").addClass("past").removeClass("future");
        $("#todo3").addClass("past").removeClass("future");
        $("#todo4").addClass("past").removeClass("future");
    }

    if (hour = 14) {
        $("#todo6").addClass("present").removeClass("future");
        $("#todo1").addClass("past").removeClass("future");
        $("#todo2").addClass("past").removeClass("future");
        $("#todo3").addClass("past").removeClass("future");
        $("#todo4").addClass("past").removeClass("future");
        $("#todo5").addClass("past").removeClass("future");

    }

    if (hour = 15) {
        $("#todo7").addClass("present").removeClass("future");
        $("#todo1").addClass("past").removeClass("future");
        $("#todo2").addClass("past").removeClass("future");
        $("#todo3").addClass("past").removeClass("future");
        $("#todo4").addClass("past").removeClass("future");
        $("#todo5").addClass("past").removeClass("future");
        $("#todo6").addClass("past").removeClass("future");
    }

    if (hour = 16) {
        $("#todo8").addClass("present").removeClass("future");
        $("#todo1").addClass("past").removeClass("future");
        $("#todo2").addClass("past").removeClass("future");
        $("#todo3").addClass("past").removeClass("future");
        $("#todo4").addClass("past").removeClass("future");
        $("#todo5").addClass("past").removeClass("future");
        $("#todo6").addClass("past").removeClass("future");
        $("#todo7").addClass("past").removeClass("future");
    }

    if (hour = 17) {
        $("#todo9").addClass("present").removeClass("future");
        $("#todo1").addClass("past").removeClass("future");
        $("#todo2").addClass("past").removeClass("future");
        $("#todo3").addClass("past").removeClass("future");
        $("#todo4").addClass("past").removeClass("future");
        $("#todo5").addClass("past").removeClass("future");
        $("#todo6").addClass("past").removeClass("future");
        $("#todo7").addClass("past").removeClass("future");
        $("#todo8").addClass("past").removeClass("future");
    }

    if (hour > 17) {
        $("#todo9").addClass("past").removeClass("future");
        $("#todo1").addClass("past").removeClass("future");
        $("#todo2").addClass("past").removeClass("future");
        $("#todo3").addClass("past").removeClass("future");
        $("#todo4").addClass("past").removeClass("future");
        $("#todo5").addClass("past").removeClass("future");
        $("#todo6").addClass("past").removeClass("future");
        $("#todo7").addClass("past").removeClass("future");
        $("#todo8").addClass("past").removeClass("future");
    }
}


// get messages to save