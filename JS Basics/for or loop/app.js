const subreddits = ['karan','banjade','ayush','pun','abhishek','gupta'];

// for(let i = 0; i<subreddits.length;i++){
//     console.log(`visit reddit.com/${subreddits[i]}`);
// }
for(let name of subreddits){
    console.log(name);
}


// iterating through objects
// OF doesnt work in objects so we use in
//lenght doesnt work in objects as well
const testScores = {
    keenan:80,
    karan:90,
    ayush:80,
    gupta:70,
    mehta:60,
    sachchu:50
};

for(let name in testScores)
    {
        console.log(testScores[name]);
    }
for(let name in testScores)
    {
        console.log(Object.keys(testScores));
    }
for(let name in testScores)
    {
        console.log(Object.values(testScores));
    }