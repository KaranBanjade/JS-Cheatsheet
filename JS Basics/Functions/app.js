function greet(firstname, lastname){
    if(typeof lastname !== "undefined")
        console.log(`firstname: ${firstname}\nlastname: ${lastname[0]}.`);
    else
        console.log(firstname);
}

function repeat(str, numTimes){
let result = "";
    for(let i=0;i<numTimes;i++){
        result += str;
    }
    console.log(result);
}
function add(x,y){
    let sum = 0;
    if(typeof x !="number" || typeof y !="number")
        return false;
    sum = x+y;
        return sum;
}