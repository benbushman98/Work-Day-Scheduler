const currentDayEl = $('#currentDay')


timeHeader();

function timeHeader() {
    setInterval(() => {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);
}