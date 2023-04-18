function submit_event() {
    //Sets up variables
    var title = document.forms["events"]["event_title"].value;
    var date = document.forms["events"]["event_date"].value;

    //Checks if title is empty
    if (title =="") {
        alert("An event must have a title!");
    }
    //Checks if date is empty
    else {
        if (date.length == 0) {
            alert("An event must have a date!");
        }
        else {
            alert("Event submitted! The society will contact you soon!");
        }
    }
}