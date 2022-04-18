// Create time and date at top

function updateTime(){
    $("#currentDay").text(moment().format("ddd MM/D : hh:mm:ss A"))

}
setInterval(updateTime, 1000)





// turn currentTime = x (11) , regular should be moment().format("hh")
var currentTime = 11

// // Parse int from hour class, set up if statements

// var tableTimeNum = $('.hour').text()
// var nummy = parseInt(tableTimeNum)

// Set statements to reflect changes in class based on time
var content = $('.content')
var eightAM = $('.8AM')
var nineAM = $('.9AM')
var tenAM = $('.10AM')
var elevenAM = $('.11AM')
var twelvePM = $('.12PM')
var onePM = $('.1PM')
var twoPM = $('.2PM')
var threePM = $('.3PM')

// var pastItem = currentTime - 1
// var currentItem = currentTime
// var futureItem = currentTime + 1

// FIX? Make it military time then change textcontent?
// OR set times to moment(time)


// ALL AFFECTED
// if (nummy > currentTime) {
//     content.addClass("past")}

// if (nummy == currentTime) {
//     content.addClass("present")
// }

// if (nummy < currentTime) {
//     content.addClass("future")
// }

// Parse int from hour class, set up if statements


var nummy1 = parseInt($('.8AM .hour').text())
var nummy2 = parseInt($('.9AM .hour').text())
var nummy3 = parseInt($('.10AM .hour').text())
var nummy4 = parseInt($('.11AM .hour').text())
var nummy5 = parseInt($('.12PM .hour').text())
var nummy6 = parseInt($('.1PM .hour').text())
var nummy7 = parseInt($('.2PM .hour').text())
var nummy8 = parseInt($('.3PM .hour').text())

// vars to fix the military time problem
var hour1 = moment("1").format("hh A")
console.log(hour1)

// EIGHT AM AFFECTED
if (nummy1 > currentTime) {
    eightAM.addClass("past")}

if (nummy1 == currentTime) {
    eightAM.addClass("present")
}

if (nummy1 < currentTime) {
    eightAM.addClass("future")
}

// NINE AM AFFECTED
if (nummy2 > currentTime) {
    nineAM.addClass("past")}

if (nummy2 == currentTime) {
    nineAM.addClass("present")
}

if (nummy2 < currentTime) {
    nineAM.addClass("future")
}

// TEN AM AFFECTED
if (nummy3 > currentTime) {
    tenAM.addClass("past")}

if (nummy3 == currentTime) {
    tenAM.addClass("present")
}

if (nummy3 < currentTime) {
    tenAM.addClass("future")
}

// ELEVEN AM AFFECTED
if (nummy4 > currentTime) {
    elevenAM.addClass("past")}

if (nummy4 == currentTime) {
    elevenAM.addClass("present")
}

if (nummy4 < currentTime) {
    elevenAM.addClass("future")
}

// TWELVE PM AFFECTED
if (nummy5 > currentTime) {
    twelvePM.addClass("past")}

if (nummy5 == currentTime) {
    twelvePM.addClass("present")
}

if (nummy5 < currentTime) {
    twelvePM.addClass("future")
}

// ONE PM AFFECTED
if (nummy6 > currentTime) {
    onePM.addClass("past")}

if (nummy6 == currentTime) {
    onePM.addClass("present")
}

if (nummy6 < currentTime) {
    onePM.addClass("future")
}

// TWO PM AFFECTED
if (nummy7 > currentTime) {
    twoPM.addClass("past")}

if (nummy7 == currentTime) {
    twoPM.addClass("present")
}

if (nummy7 < currentTime) {
    twoPM.addClass("future")
}

// THREE PM AFFECTED
if (nummy8 > currentTime) {
    threePM.addClass("past")}

if (nummy8 == currentTime) {
    threePM.addClass("present")
}

if (nummy8 < currentTime) {
    threePM.addClass("future")
}








// Save button to local storage
var save = $('.saveBtn')

save.on('click', function(){
    console.log("Save to local")
})


