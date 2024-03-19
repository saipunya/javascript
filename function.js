// function sumRang(begin,end){
//     var sum = 0
//     for(i=begin; i <= end; i++){
//         sum += i
//     }
//     console.log(sum)
// }

// sumRang(15,20)
// sumRang(1,10)
// function printOneToTen (){
//     for(i=1;i<=10;i++){
//         console.log(i)
//     }
// }
// printOneToTen()

// function print (text){
//     console.log(text)
// }
// print('hello')

function oddEven(num){
    var result = (num % 2 == 0) ? 'Even' : 'Odd';
    return result;
}
console.log(oddEven(121))

function print(str){
    if(str==''){
        return
    }
    console.log(str)
}

print('')
