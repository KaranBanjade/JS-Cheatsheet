// try{
//     hello.toUpperCase();
// }catch{
//     console.log("Error");
// }
function yell(msg){
    try{
    console.log(msg.toUpperCase().repeat(3));
    } catch(e){
        console.log(e);
        console.log("Enter String Next Time");
    }
}