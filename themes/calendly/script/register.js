var event = JSON.parse(sessionStorage.getItem("eventObj"));

document.getElementById("event").textContent = event.name;
//document.getElementById("scheduler").textContent = event.organizer;
document.getElementById("duration").textContent = event.duration + " min";
document.getElementById("event-time-stamp").textContent = event.time + " " + event.date;

document.getElementById("time-selected").value = event.time;

function goBack() {
    window.history.back();
}