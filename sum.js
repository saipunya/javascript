let t1 = [[1,2,3,4,5,6,7,8,9],[10,20,30,40,50,60,70,80,90],[10,20,30,40,50,60,70,80,90]]
for (var i = 0; i < t1.length; i++){
    for(var j = 0; j < t1[i].length; j++){

        let x = (t1[i][j] + t1[i+1][j] + t1[i+2][j])
        console.log(x)
    }
    
}

