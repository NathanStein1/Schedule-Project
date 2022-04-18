// Create time and date at top

function updateTime(){
    $("#currentDay").text(moment().format("ddd MM/D : hh:mm:ss"))

}
setInterval(updateTime, 1000)

// Allow blocks to be sortable


$(".sort").sortable();