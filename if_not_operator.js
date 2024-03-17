var a = false
if(a == false){
    console.log(`a == ${a}`)
}
if(a != true){
    console.log(`a == ${a}`)
}
console.log("" == false)

var x  = 99
var remain = x % 2
if(remain == 0){
    console.log (`x == เป็นจำนวนคู่`)
}else{
    console.log(`x == เป็นจำนวนคี่`)
}

var isLeapYear = false
var numDays = 0
if(isLeapYear){
    numDays = 366
}else{
    numDays = 365
}
console.log(numDays)

var size = 'Medium'
var value = ''
if(size == 'Small'){
    value = '12px'
}else if(size == 'Medium'){
    value = '16px'
}else if(size == 'Large'){
    value = '24px'
}
console.log(value)

const prompt = require('prompt-sync')()
var home_goals = parseInt(prompt('จำนวนประตูที่เจ้าบ้านทำได้ >> '))
var guest_goals = parseInt(prompt('จำนวนประตูที่ทีมเยือนทำได้ >> '))
if(home_goals  > guest_goals){
    console.log('ทีมเจ้าบ้านชนะ')
}else if(home_goals < guest_goals){
    console.log('ทีมเยือนชนะ')
}else{
    console.log('เสมอกัน')
}
