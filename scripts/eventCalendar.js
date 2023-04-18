function submit_event() {
    var title = document.forms["events"]["event_title"].value;
    var date = document.forms["events"]["event_date"].value;
    if (title =="") {
        alert("An event must have a titlte!");
    }
    else {
        if (date.lenhth == 0) {
            alert("An event must have a date!");
        }
        else {
            alert("Event submitted! The society will contact you soon!");
        }
    }
}