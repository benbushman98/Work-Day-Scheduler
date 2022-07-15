// Timer
setInterval(() => { $('#currentDay').text(moment().format('MMMM Do YYYY, H:mm:ss a'));});
// End Timer
// Code for Storing in Local Storage
init();
function init() {
    $('#9a').val(localStorage.getItem('9AM', $('#9a').val()));
    $('#10a').val(localStorage.getItem('10AM', $('#10a').val()));
    $('#11a').val(localStorage.getItem('11AM', $('#11a').val()));
    $('#12p').val(localStorage.getItem('12PM', $('#12p').val()));
    $('#1p').val(localStorage.getItem('1PM', $('#1p').val()));
    $('#2p').val(localStorage.getItem('2PM', $('#2p').val()));
    $('#3p').val(localStorage.getItem('3PM', $('#3p').val()));
    $('#4p').val(localStorage.getItem('4PM', $('#4p').val()));
    $('#5p').val(localStorage.getItem('5PM', $('#5p').val()));
}
$('.saveBtn').on("click", function() {
    $('#9a').val(localStorage.setItem('9AM', $('#9a').val()));
    $('#10a').val(localStorage.setItem('10AM', $('#10a').val()));
    $('#11a').val(localStorage.setItem('11AM', $('#11a').val()));
    $('#12p').val(localStorage.setItem('12PM', $('#12p').val()));
    $('#1p').val(localStorage.setItem('1PM', $('#1p').val()));
    $('#2p').val(localStorage.setItem('2PM', $('#2p').val()));
    $('#3p').val(localStorage.setItem('3PM', $('#3p').val()));
    $('#4p').val(localStorage.setItem('4PM', $('#4p').val()));
    $('#5p').val(localStorage.setItem('5PM', $('#5p').val()));
    init();
})
// End Local Storage Code
// Code for Color Changer
timeChanger9();
function timeChanger9 () {
    today = moment();
    var hour = moment(today, 'h:mm:ss A').format('HH:mm:ss');
    var curHour = $('#9a');
    var hourVal = document.getElementById("9AM").textContent;
    var timeNum = parseInt(hourVal);
    var hourNumber = parseInt(hour);
    if (hourNumber > timeNum) {
    } else if (hourNumber === timeNum) {
        curHour.removeClass('past');
        curHour.addClass('present');
    } else if (hourNumber < timeNum) {
        curHour.removeClass('past');
        curHour.addClass('future');}}
timeChanger10();
function timeChanger10 () {
    today = moment();
    var hour = moment(today, 'h:mm:ss A').format('HH:mm:ss');
    var curHour = $('#10a');
    var hourVal = document.getElementById("10AM").textContent;
    var timeNum = parseInt(hourVal);
    var hourNumber = parseInt(hour);
    if (hourNumber > timeNum) {
    } else if (hourNumber === timeNum) {
        curHour.removeClass('past');
        curHour.addClass('present');
    } else if (hourNumber < timeNum) {
        curHour.removeClass('past');
        curHour.addClass('future');}}
timeChanger11();
function timeChanger11 () {
    today = moment();
    var hour = moment(today, 'h:mm:ss A').format('HH:mm:ss');
    var curHour = $('#11a');
    var hourVal = document.getElementById("11AM").textContent;
    var timeNum = parseInt(hourVal);
    var hourNumber = parseInt(hour);
    if (hourNumber > timeNum) {
    } else if (hourNumber === timeNum) {
        curHour.removeClass('past');
        curHour.addClass('present');
    } else if (hourNumber < timeNum) {
        curHour.removeClass('past');
        curHour.addClass('future');}}
timeChanger12();
function timeChanger12 () {
    today = moment();
    var hour = moment(today, 'h:mm:ss A').format('HH:mm:ss');
    var curHour = $('#12p');
    var hourVal = document.getElementById("12PM").textContent;
    var timeNum = parseInt(hourVal);
    var hourNumber = parseInt(hour);
    if (hourNumber > timeNum) {
    } else if (hourNumber === timeNum) {
        curHour.removeClass('past');
        curHour.addClass('present');
    } else if (hourNumber < timeNum) {
        curHour.removeClass('past');
        curHour.addClass('future');}}
timeChanger1();
function timeChanger1 () {
    today = moment();
    var hour = moment(today, 'h:mm:ss A').format('HH:mm:ss');
    var curHour = $('#1p');
    var hourVal = document.getElementById("1PM").textContent;
    var timeNum = parseInt(hourVal);
    var hourNumber = parseInt(hour);
    if (hourNumber > timeNum) {
    } else if (hourNumber === timeNum) {
        curHour.removeClass('past');
        curHour.addClass('present');
    } else if (hourNumber < timeNum) {
        curHour.removeClass('past');
        curHour.addClass('future');}}
timeChanger2();
function timeChanger2 () {
    today = moment();
    var hour = moment(today, 'h:mm:ss A').format('HH:mm:ss');
    var curHour = $('#2p');
    var hourVal = document.getElementById("2PM").textContent;
    var timeNum = parseInt(hourVal);
    var hourNumber = parseInt(hour);
    if (hourNumber > timeNum) {
    } else if (hourNumber === timeNum) {
        curHour.removeClass('past');
        curHour.addClass('present');
    } else if (hourNumber < timeNum) {
        curHour.removeClass('past');
        curHour.addClass('future');}}
timeChanger3();
function timeChanger3 () {
    today = moment();
    var hour = moment(today, 'h:mm:ss A').format('HH:mm:ss');
    var curHour = $('#3p');
    var hourVal = document.getElementById("3PM").textContent;
    var timeNum = parseInt(hourVal);
    var hourNumber = parseInt(hour);
    if (hourNumber > timeNum) {
    } else if (hourNumber === timeNum) {
        curHour.removeClass('past');
        curHour.addClass('present');
    } else if (hourNumber < timeNum) {
        curHour.removeClass('past');
        curHour.addClass('future');}}
timeChanger4();
function timeChanger4 () {
    today = moment();
    var hour = moment(today, 'h:mm:ss A').format('HH:mm:ss');
    var curHour = $('#4p');
    var hourVal = document.getElementById("4PM").textContent;
    var timeNum = parseInt(hourVal);
    var hourNumber = parseInt(hour);
    if (hourNumber > timeNum) {
    } else if (hourNumber === timeNum) {
        curHour.removeClass('past');
        curHour.addClass('present');
    } else if (hourNumber < timeNum) {
        curHour.removeClass('past');
        curHour.addClass('future');}}
timeChanger5();
function timeChanger5 () {
    today = moment();
    var hour = moment(today, 'h:mm:ss A').format('HH:mm:ss');
    var curHour = $('#5p');
    var hourVal = document.getElementById("5PM").textContent;
    var timeNum = parseInt(hourVal);
    var hourNumber = parseInt(hour);
    if (hourNumber > timeNum) {
    } else if (hourNumber === timeNum) {
        curHour.removeClass('past');
        curHour.addClass('present');
    } else if (hourNumber < timeNum) {
        curHour.removeClass('past');
        curHour.addClass('future');}}
// End of Code for Color Changer