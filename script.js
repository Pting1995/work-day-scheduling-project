// get time and change color of message area depending on time

setInterval( function() {
    time = moment().local().format("dddd, MMM D, YYYY, h:mm:ssA");
    $("#currentTime").text(time)
    checkHour(moment().hour())
}, 1000)

function checkHour(hour) {
    console.log(hour)
    if (hour < 9) {
        $("#todo1").addClass("future")
        $("#todo2").addClass("future")
        $("#todo3").addClass("future")
        $("#todo4").addClass("future")
        $("#todo5").addClass("future")
        $("#todo6").addClass("future")
        $("#todo7").addClass("future")
        $("#todo8").addClass("future")
        $("#todo9").addClass("future")
    }
    else if (hour === 9) {
        $("#todo1").addClass("present")
        $("#todo2").addClass("future")
        $("#todo3").addClass("future")
        $("#todo4").addClass("future")
        $("#todo5").addClass("future")
        $("#todo6").addClass("future")
        $("#todo7").addClass("future")
        $("#todo8").addClass("future")
        $("#todo9").addClass("future")
    }

    else if (hour === 10) {
        $("#todo1").addClass("past")
        $("#todo2").addClass("present")
        $("#todo3").addClass("future")
        $("#todo4").addClass("future")
        $("#todo5").addClass("future")
        $("#todo6").addClass("future")
        $("#todo7").addClass("future")
        $("#todo8").addClass("future")
        $("#todo9").addClass("future")
    }

    else if (hour === 11) {
        $("#todo1").addClass("past")
        $("#todo2").addClass("past")
        $("#todo3").addClass("present")
        $("#todo4").addClass("future")
        $("#todo5").addClass("future")
        $("#todo6").addClass("future")
        $("#todo7").addClass("future")
        $("#todo8").addClass("future")
        $("#todo9").addClass("future")
    }

    else if (hour === 12) {
        $("#todo1").addClass("past")
        $("#todo2").addClass("past")
        $("#todo3").addClass("past")
        $("#todo4").addClass("present")
        $("#todo5").addClass("future")
        $("#todo6").addClass("future")
        $("#todo7").addClass("future")
        $("#todo8").addClass("future")
        $("#todo9").addClass("future")

    }

    else if (hour === 13) {
        $("#todo1").addClass("past")
        $("#todo2").addClass("past")
        $("#todo3").addClass("past")
        $("#todo4").addClass("past")
        $("#todo5").addClass("present")
        $("#todo6").addClass("future")
        $("#todo7").addClass("future")
        $("#todo8").addClass("future")
        $("#todo9").addClass("future")
    }

    else if (hour === 14) {
        $("#todo1").addClass("past")
        $("#todo2").addClass("past")
        $("#todo3").addClass("past")
        $("#todo4").addClass("past")
        $("#todo5").addClass("past")
        $("#todo6").addClass("present")
        $("#todo7").addClass("future")
        $("#todo8").addClass("future")
        $("#todo9").addClass("future")

    }
    
    else if (hour === 15) {
        $("#todo1").addClass("past")
        $("#todo2").addClass("past")
        $("#todo3").addClass("past")
        $("#todo4").addClass("past")
        $("#todo5").addClass("past")
        $("#todo6").addClass("past")
        $("#todo7").addClass("present")
        $("#todo8").addClass("future")
        $("#todo9").addClass("future")
    }

    else if (hour === 16) {
        $("#todo1").addClass("past")
        $("#todo2").addClass("past")
        $("#todo3").addClass("past")
        $("#todo4").addClass("past")
        $("#todo5").addClass("past")
        $("#todo6").addClass("past")
        $("#todo7").addClass("past")
        $("#todo8").addClass("present")
        $("#todo9").addClass("future")
    }

    else if (hour === 17) {
        $("#todo1").addClass("past")
        $("#todo2").addClass("past")
        $("#todo3").addClass("past")
        $("#todo4").addClass("past")
        $("#todo5").addClass("past")
        $("#todo6").addClass("past")
        $("#todo7").addClass("past")
        $("#todo8").addClass("past")
        $("#todo9").addClass("present")
    }

    else {
        $("#todo1").addClass("past")
        $("#todo2").addClass("past")
        $("#todo3").addClass("past")
        $("#todo4").addClass("past")
        $("#todo5").addClass("past")
        $("#todo6").addClass("past")
        $("#todo7").addClass("past")
        $("#todo8").addClass("past")
        $("#todo9").addClass("past")
    }
}

// get messages to save
$(".btn1").click(function () {
    var message1 = $("todo1")
    
    window.localStorage.setItem("#todo1", )
})