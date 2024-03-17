const prompt = require('prompt-sync')()
let withdraw = 500000
let balance = prompt('โปรดใส่เงินในบัญชีของท่าน')
balance = parseInt(balance)

if(withdraw > balance) {
    console.log('คุณถอนเงินได้')
}else{
    console.log('ยอดเงินคุณหลือน้อยกว่ายอดถอน')
}