// get time and change color of message area depending on time

setInterval( function() {
    time = moment().local().format("dddd, MMM D, YYYY, h:mm:ssA");
    $("#currentTime").text(time)
    checkHour(moment().hour())
}, 1000)
// checks current hour and changes text box color accordingly
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

// gets messages to save
$(".btn1").click(function () {
    var message1 = $("#todo1").val()
    window.localStorage.setItem("note1", message1)
    $("#todo1").text(localStorage.getItem("note1"))
})
$(".btn2").click(function () {
    var message2 = $("#todo2").val()
    window.localStorage.setItem("note2", message2)
    $("#todo2").text(localStorage.getItem("note2"))
})
$(".btn3").click(function () {
    var message3 = $("#todo3").val()
    window.localStorage.setItem("note3", message3)
    $("#todo3").text(localStorage.getItem("note3"))
})
$(".btn4").click(function () {
    var message4 = $("#todo4").val()
    window.localStorage.setItem("note4", message4)
    $("#todo4").text(localStorage.getItem("note4"))
})
$(".btn5").click(function () {
    var message5 = $("#todo5").val()
    window.localStorage.setItem("note5", message5)
    $("#todo5").text(localStorage.getItem("note5"))
})
$(".btn6").click(function () {
    var message6 = $("#todo6").val()
    window.localStorage.setItem("note6", message6)
    $("#todo6").text(localStorage.getItem("note6"))
})
$(".btn7").click(function () {
    var message7 = $("#todo7").val()
    window.localStorage.setItem("note7", message7)
    $("#todo7").text(localStorage.getItem("note7"))
})
$(".btn8").click(function () {
    var message8 = $("#todo8").val()
    window.localStorage.setItem("note8", message8)
    $("#todo8").text(localStorage.getItem("note8"))
})
$(".btn9").click(function () {
    var message9 = $("#todo9").val()
    window.localStorage.setItem("note9", message9)
    $("#todo9").text(localStorage.getItem("note9"))
})

// displays local storage text when page is reloaded
$("#todo1").text(localStorage.getItem("note1"))
$("#todo2").text(localStorage.getItem("note2"))
$("#todo3").text(localStorage.getItem("note3"))
$("#todo4").text(localStorage.getItem("note4"))
$("#todo5").text(localStorage.getItem("note5"))
$("#todo6").text(localStorage.getItem("note6"))
$("#todo7").text(localStorage.getItem("note7"))
$("#todo8").text(localStorage.getItem("note8"))
$("#todo9").text(localStorage.getItem("note9"))