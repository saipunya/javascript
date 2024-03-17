let m = 10
console.log(`ระยะทาง ${m} ไมล์ เท่ากับ ${m *1.6} กิโลเมตร`) 
let b = 2
let p = 3
console.log(`${b} ยกกำลัง ${p} เท่ากับ ${b ** p} `)
let current_year = new Date().getFullYear()
let create_year = 1995
console.log(`javascript ถูกสร้างขึ้นในปี ${create_year} ปัจจุบันตรงกับปี ${current_year}
\n ดังนั้น javascript มีอายุ ${current_year - create_year} ปี`)

// การแปลงและตรวจสอบตัวเลขในเบื้องต้น
let a = '123'
let c = "0.456"
console.log( parseInt(a) + parseInt(c))
console.log(parseFloat(a) + parseFloat(c))

a = Number.isInteger(a) ? 'ตัวเลข' : 'ไม่ใช่ตัวเลข'
console.log(a)

var strNum = '456'
var intNum = parseInt(strNum)
console.log(intNum)

let j = parseInt('123') + parseFloat('0.234')
console.log(typeof(j))




