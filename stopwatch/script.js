/*
*
* @variables
*
*/
let tens = 0
let seconds = 0
let minutes = 0
let hours = 0
let appendTens = document.querySelector('#tens')
let appendSeconds = document.querySelector('#seconds')
let appendMinutes = document.querySelector('#minutes')
let appendHours = document.querySelector('#hours')
let interval
/*
*
* @event listeners
*
*/
$('#start-btn').click(()=>{
    $('#title').html('Stopwatch started!')
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})
$('#stop-btn').click(()=>{
    $('#title').html('Stopwatch stopped!')
    clearInterval(interval)
})
$('#reset-btn').click(()=>{
    $('#title').html('Stopwatch reseted!')
    clearInterval(interval)
    tens ='00'
    seconds = '00'
    minutes = '00'
    hours = '00'
    $(appendTens).html(tens)
    $(appendSeconds).html(seconds)
    $(appendMinutes).html(minutes)
    $(appendHours).html(hours)
})
/*
*
* @functions
*
*/
const startTimer = () =>{
    tens++;
    $(appendTens).html(formatTime(tens))
    if(tens > 99){
        seconds++
        $(appendSeconds).html(formatTime(seconds))
        tens = 0
        $(tens).html('0' + 0)
    }
    if(seconds > 59){
        minutes++
        $(appendMinutes).html(formatTime(minutes))
        seconds = 0
        $(seconds).html('0' + 0)
    }
    if(minutes > 59){
        hours++
        $(appendHours).html(formatTime(hours))
        minutes = 0
        $(minutes).html('0' + 0)
    }
}
// formatTime() function ... 
const formatTime = (time) =>{
    return time > 9 ? time : '0' + time
}