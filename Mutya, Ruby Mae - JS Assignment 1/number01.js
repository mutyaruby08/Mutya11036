const num = [2, 55, 60, 97, 86]

const includesfive = num.join().includes(5)

console.log(includesfive)

if (includesfive == true){ 
    console.log("!!!!!!")}
    else{
        console.log("there is no 5 in the array")
    }