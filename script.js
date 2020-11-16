window.addEventListener("load", main)

function main() {
    addEventListeners();
}

function addEventListeners() {
    document.getElementById("days").addEventListener("click", fetchDays)
}

function fetchDays(event) {
    $.ajax({
        url: "http://api.dryg.net/dagar/v2.1/2020",
        type: "GET",
        dataType: "jsonp",
        success: function(response) {
            presentHolidays(response.dagar);
        }
    });
}

function presentHolidays(daysInAYear) {
    const container = document.getElementById("holidays-container");
    container.innerHTML = "";

    const holidays = getHolidays(daysInAYear);
    const listItems = createListItems(holidays);
    container.append(...listItems);
}

function createListItems(holidays) {
    const listItems = [];

    for (const day of holidays) {
        const li = document.createElement("li");
        li.innerHTML = day.helgdag + " = " + day.datum + " " + day.veckodag;
        listItems.push(li);
    }

    return listItems;
}

function getHolidays(daysInAYear) {
    const holidays = [];

    for(const day of daysInAYear) {
        if(day.helgdag) {
            holidays.push(day);
        }
    }

    return holidays;
}