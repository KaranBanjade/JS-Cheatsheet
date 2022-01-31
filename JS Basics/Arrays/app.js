// const fitbit = {
//     username: "karan",
//     upvotes: 90,
//     text: "noice jugs",
//     2020: "kill me",
//     2021: "save me"
// }
let max = parseInt(prompt("Enter the max number"));

while(!max){
    max = parseInt(prompt("Enter a valid number"));
}
const target = Math.floor(Math.random()*max) + 1;

let guess = parseInt(prompt("Enter First guess"));
let attempts = 1;

while(parseInt(guess) !== target){
    attempts++;
    if(guess==='q')
        break;
    if(guess > target){
        guess = prompt("too high! enter again: ");
    }
    else{
        guess = prompt("too low! enter again: ");
    }
}
if(guess == 'q')
    console.log("Ok! you quit");
else    
    console.log(`Cngrats you got it in ${attempts}`);

