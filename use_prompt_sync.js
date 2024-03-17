/*
console.log(12345)
console.log('one','two','three')
*/
let prompt = require('prompt-sync')()
let a = prompt('เลขจำนวนที่ 1 : ') 
let b = prompt('เลขจำนวนที่ 2 : ') 
a = parseInt(a)
b = parseInt(b)
c = a + b
console.log(`ผลรวมเลข 2 จำนวนคือ ${c}`)