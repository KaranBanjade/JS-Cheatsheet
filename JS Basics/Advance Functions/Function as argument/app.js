function callTwice(func){
    func();
    func();
}
function callTenTimes(f){
    for(let i = 0;i<10;i++)
        {
            f();
        }
}
function roll(){
    const roll = Math.floor(math.random() * 6)+1;
    console.log(roll);
}

callTwice(roll);
callTenTimes(roll);