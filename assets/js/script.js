$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var tasks = {};

var currentTime = moment().format("H");
currentTime = parseInt(currentTime);
var hours = [$("#hour1"), $("#hour2"), $("#hour3"), $("#hour4"), $("#hour5"), $("#hour6"), $("#hour7"), $("#hour8"), $("#hour9")];
var times = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var timeColor = function () {

    for (i = 0; i < hours.length; i++) {
        if (times[i] < currentTime) {
            hours[i].addClass("past");
        }
        else if (times[i] === currentTime) {
            hours[i].addClass("present");
        }
        else {
            hours[i].addClass("future");
        }
    }
};

timeColor();