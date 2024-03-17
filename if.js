if(true) {
    console.log('hello world' + '\n')
}
let b = (1>2)
if(!b){
    console.log(`this is value ${b}`)
}

const prompt = require('prompt-sync')()
var n1 = parseInt(prompt('จำนวนที่ 1 : '))
var max = n1
var n2 = parseInt(prompt('จำนวนที่ 2 : '))
if(n2 > max){
    max = n2
}
var n3 = parseInt(prompt('จำนวนที่ 3: '))
if(n3 > max){
    max = n3
}
console.log(`จำนวนที่สูงที่สุด คือ ${max}`)

