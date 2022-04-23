// Create time and date at top

function updateTime(){
    $("#currentDay").text(moment().format("ddd MM/D : hh:mm:ss A"))

}
setInterval(updateTime, 1000)



// localStorage.setItem('todo')

// turn currentTime = x (11) , regular should be moment().format("hh")
var currentTime = moment().format("HH")
console.log(currentTime)

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
var fourPM= $('.4PM')
var fivePM= $('.5PM')

// var pastItem = currentTime - 1
// var currentItem = currentTime
// var futureItem = currentTime + 1



var nummy1 = parseInt($('.8AM .hour').text())
var nummy2 = parseInt($('.9AM .hour').text())
var nummy3 = parseInt($('.10AM .hour').text())
var nummy4 = parseInt($('.11AM .hour').text())
var nummy5 = parseInt($('.12PM .hour').text())
var nummy6=$('.1PM .hour').attr('hour')
var nummy7=$('.2PM .hour').attr('hour')
var nummy8=$('.3PM .hour').attr('hour')
var nummy9=$('.4PM .hour').attr('hour')
var nummy10=$('.5PM .hour').attr('hour')



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
if (nummy8 > currentTime){
    threePM.addClass("past")}

if (nummy8 == currentTime) {
    threePM.addClass("present")
}

if (nummy8 < currentTime) {
    threePM.addClass("future")
}
// Four PM
if (nummy9 > currentTime){
    fourPM.addClass("past")}

if (nummy9 == currentTime) {
    fourPM.addClass("present")
}

if (nummy9 < currentTime) {
    fourPM.addClass("future")
}
// Five PM
if (nummy10 > currentTime){
    fivePM.addClass("past")}

if (nummy10 == currentTime) {
    fivePM.addClass("present")
}

if (nummy10 < currentTime) {
    fivePM.addClass("future")
}



// .closest() //up

// .find() //down

// .sibling() // laterallly

// $('.3PM').find('.hour').attr()








// 8 save
var save1 = $('.saveBtn8')
var text1 = $('.text8')

save1.on('click', function(){
    
    localStorage.setItem('todo8', text1.val())
    
})

$('.text8').val(localStorage.getItem('todo8'))

// 9 save
var save2 = $('.saveBtn9')
var text2 = $('.text9')

save2.on('click', function(){
    
    localStorage.setItem('todo9', text2.val())
    
})

$('.text9').val(localStorage.getItem('todo9'))

// 10 save
var save3 = $('.saveBtn10')
var text3 = $('.text10')

save3.on('click', function(){
    
    localStorage.setItem('todo10', text3.val())

})
$('.text10').val(localStorage.getItem('todo10'))

// 11 save
var save4 = $('.saveBtn11')
var text4 = $('.text11')

save4.on('click', function(){
    
    localStorage.setItem('todo11', text4.val())

})
$('.text11').val(localStorage.getItem('todo11'))

// 12 save
var save5 = $('.saveBtn12')
var text5 = $('.text12')

save5.on('click', function(){
    
    localStorage.setItem('todo12', text5.val())

})
$('.text12').val(localStorage.getItem('todo12'))

// 1 save
var save6 = $('.saveBtn1')
var text6 = $('.text1')

save6.on('click', function(){
    
    localStorage.setItem('todo1', text6.val())

})
$('.text1').val(localStorage.getItem('todo1'))

// 2 save
var save7 = $('.saveBtn2')
var text7 = $('.text2')

save7.on('click', function(){
    
    localStorage.setItem('todo2', text7.val())

})
$('.text2').val(localStorage.getItem('todo2'))

// 3 save
var save8 = $('.saveBtn3')
var text8 = $('.text3')

save8.on('click', function(){
    
    localStorage.setItem('todo3', text8.val())

})
$('.text3').val(localStorage.getItem('todo3'))

// 4 save
var save9 = $('.saveBtn4')
var text9 = $('.text4')

save9.on('click', function(){
    
    localStorage.setItem('todo4', text9.val())

})
$('.text4').val(localStorage.getItem('todo4'))

// 5 save
var save10 = $('.saveBtn5')
var text10 = $('.text5')

save10.on('click', function(){
    
    localStorage.setItem('todo5', text10.val())

})
$('.text5').val(localStorage.getItem('todo5'))
