function sums(...nums){
    return nums.reduce((total,el)=>total+el)
}

function receResults(gold, silver,...everyoneElse){
    console.log(`gold goes to ${gold}`);
    console.log(`silver goes to ${silver}`);
    console.log(`rest goes to ${everyoneElse}`);
}