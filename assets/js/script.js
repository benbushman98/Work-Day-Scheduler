// Timer
setInterval(() => {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
});
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
    $('#9a').val(localStorage.setItem('9AM', $('#9a').val()))
    $('#10a').val(localStorage.setItem('10AM', $('#10a').val()))
    $('#11a').val(localStorage.setItem('11AM', $('#11a').val()))
    $('#12p').val(localStorage.setItem('12PM', $('#12p').val()))
    $('#1p').val(localStorage.setItem('1PM', $('#1p').val()))
    $('#2p').val(localStorage.setItem('2PM', $('#2p').val()))
    $('#3p').val(localStorage.setItem('3PM', $('#3p').val()))
    $('#4p').val(localStorage.setItem('4PM', $('#4p').val()))
    $('#5p').val(localStorage.setItem('5PM', $('#5p').val()))
    init();
})
// End Local Storage Code
timeChanger();
function timeChanger () {
    setInterval(() => {
    var curHour = $('.past');
    var hour = (moment().format('h'));

        if (hour > $('.hour').val()) {
        console.log( "past");
    } else if (hour === $('.hour').val()) {
        curHour.removeClass('past');
        curHour.addClass('present');
        console.log('present');
    } else if (hour < $('.hour').val()) {
        curHour.removeClass('past');
        curHour.addClass('future');
        console.log("future");
    }
    },1000);
}