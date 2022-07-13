let saveBtn = $('.saveBtn')


timeHeader();
function timeHeader() {
    const currentDayEl = $('#currentDay')
    setInterval(() => {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    });
}

saveBtn = document.addEventListener("click", storeEvent)


function storeEvent() {
    var events = JSON.parse(window.localStorage.getItem("event")) || []
    const eventEl = $('.description')

    var eventText = {
        eventname: eventEl.value
    }
    events.push(eventText)
    window.localStorage.setItem("event", JSON.stringify(events));
}