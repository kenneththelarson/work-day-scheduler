$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var tasks = [];

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

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for (i = 0; i < tasks.length; i++) {
        var timeSlot = tasks[i].time - 8;
        newTime = "hour" + timeSlot;
        console.log(tasks[i].item);
        $("#" + newTime).val(tasks[i].item);
    }
};

$("#saveBtn9").on("click", function() {
    var newTask = $("#hour1").val().trim();
    var timeSlotInfo = {item: newTask, time: 9};
    tasks.push(timeSlotInfo);
    saveTasks();
});

$("#saveBtn10").on("click", function () {
    var newTask = $("#hour2").val().trim();
    var timeSlotInfo = { item: newTask, time: 10 };
    tasks.push(timeSlotInfo);
    saveTasks();
});

$("#saveBtn11").on("click", function () {
    var newTask = $("#hour3").val().trim();
    var timeSlotInfo = { item: newTask, time: 11 };
    tasks.push(timeSlotInfo);
    saveTasks();
});

$("#saveBtn12").on("click", function () {
    var newTask = $("#hour4").val().trim();
    var timeSlotInfo = { item: newTask, time: 12 };
    tasks.push(timeSlotInfo);
    saveTasks();
});

$("#saveBtn1").on("click", function () {
    var newTask = $("#hour5").val().trim();
    var timeSlotInfo = { item: newTask, time: 1 };
    tasks.push(timeSlotInfo);
    saveTasks();
});

$("#saveBtn2").on("click", function () {
    var newTask = $("#hour6").val().trim();
    var timeSlotInfo = { item: newTask, time: 2 };
    tasks.push(timeSlotInfo);
    saveTasks();
});

$("#saveBtn3").on("click", function () {
    var newTask = $("#hour7").val().trim();
    var timeSlotInfo = { item: newTask, time: 3 };
    tasks.push(timeSlotInfo);
    saveTasks();
});

$("#saveBtn4").on("click", function () {
    var newTask = $("#hour8").val().trim();
    var timeSlotInfo = { item: newTask, time: 4 };
    tasks.push(timeSlotInfo);
    saveTasks();
});

$("#saveBtn5").on("click", function () {
    var newTask = $("#hour9").val().trim();
    var timeSlotInfo = { item: newTask, time: 5 };
    tasks.push(timeSlotInfo);
    saveTasks();
});

timeColor();
loadTasks();