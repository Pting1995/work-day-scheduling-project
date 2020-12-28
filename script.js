// get time and change color of message area depending on time

setInterval( function() {
    time = moment().local().format("dddd, MMM D, YYYY, h:m:ssA");
    $("#currentTime").text(time)

}, 1000)

// get messages to save