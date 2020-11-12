window.addEventListener("load", main)

function main() {
    addEventListeners();
}

function addEventListeners() {
    document.getElementById("days").addEventListener("click", fetchDays)
}

function fetchDays(event) {
    $.ajax({
        url: "http://api.dryg.net/dagar/v2.1/1989",
        type: "GET",
        dataType: "jsonp",
        complete: function(response) {
            console.log(response)
        }
    })
}
