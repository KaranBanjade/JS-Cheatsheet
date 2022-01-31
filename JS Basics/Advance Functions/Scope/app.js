// Function Scope in JS is same
// let totalEggs = 0;
// function collectEggs(){
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = "macaw";
// function birdwatch(){
//     let bird = "crow";
//     console.log(`Value inside Function: ${bird}`);
// }
// console.log(`Value outside Function: ${bird}`);

// let radius = 8;
// if(radius>0){
//     const pi = 3.14;
//     let msg ='HIi';
// }
// console.log(radius);
// console.log(msg);


// for(let i=0; i<5;i++){
//     var msg = 'alnsf';
//     console.log(msg);
// }
// console.log(msg);    // Will work
// console.log(i);     //Wont work


// Parent Scope
// function bankRobbery(){
//     const heroes = ['spider', 'wolf', 'panther'];
//     function cry(){
//         for(let hero of heroes){
//             console.log(`Help ${hero}`);
//         }
//     }
// }