// Checks if input time is valid
function checkInput(hour, minute) {

    if (isNaN(hour) || isNaN(minute)) { //Ensures that input is a number
        $("#result").val("Invalid Time");
    } else if (hour > 12 || hour < 1) { // Checks for invalid hour.
        $("#result").val("Invalid Time");
    } else if (minute > 59 || minute < 0) { // Checks for invalid minute.
        $("#result").val("Invalid Time");
    } else { 
        return true;
    }
};


// Calculating the angle value to display it in the results box
function printAngle(hour, minute, angle) {

    if (angle >= 360) {
        $("#result").val(Math.abs(Number(360 - angle)) + "°"); // Prints Answer
    } else {
        $("#result").val(Math.abs(Number(angle)) + "°"); // Prints Answer
    }
};


$(document).ready(function() {

    // Runs on the Calculate button click event.
    $(".btn").click(function() {

        var hour = $("#hour").val();
        var minute = $("#minute").val();
        var angle = (360 / 12 / 60) * (60 * hour - 11 * minute);

        // Runs if the inputs are vallid.
        if (checkInput(hour, minute) == true) {
            printAngle(hour, minute, angle);
        }
    });


});

