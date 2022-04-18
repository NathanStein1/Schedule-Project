// Create time and date at top

function updateTime(){
    $("#currentDay").text(moment().format("ddd MM/D : hh:mm:ss A"))

}
setInterval(updateTime, 1000)

// Change class name to reflect color changes, present == red etc
// if(tabletime>#currentDay time) addClass("future")



// Set time tds to moment.js?

var tableTime = $('.hour')
var tableTimeNum = parseInt(tableTime)



console.log(tableTimeNum)


// Save button to local storage
var save = $('.saveBtn')

save.on('click', function(){
    console.log("Save to local")
})


