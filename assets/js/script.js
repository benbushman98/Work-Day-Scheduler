const currentDayEl = $('#currentDay')


timeHeader();

function timeHeader() {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    currentDayEl.css('font-weight', 'bold')
}