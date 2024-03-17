const prompt = require('prompt-sync')()
// var user =  prompt('username = ')
// var pass = prompt('password = ')
// if(user=='admin'){
//     if(pass=='4567'){
//         console.log('welcome to website')
//     }else{
//         console.log(`รหัสผ่าน "${pass}"  เป็นรหัสผ่านที่ไม่ถูกต้อง`)
//     }
// }else{
//     console.log('คุณไม่ใช่สมาชิก')
// }

let login = 'admin'
pass = ''
if(login=='' || pass == ''){
    console.log(`ท่านต้องใส่ข้อมูลให้ครบทั้งสองช่อง`)
}

let rating = parseInt(prompt('Rating 1-5 : '))
switch(rating){
    case 1 :
        console.log('น้อยมาก')
        break
    case 2 :
        console.log('น้อย')
        break
    case 3 :
        console.log('มาก')
        break
    case 4 :
        console.log('มากขึ้น')
        break
    case 5 :
        console.log('ดีที่สุด')
        break
    default :
        console.log('ท่านระบุข้อมูลไม่ถูกต้อง')
}


