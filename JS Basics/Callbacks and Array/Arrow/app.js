// const add = (x,y) => {
//     return x+y;
// }

const square = (x) => {
    return x*x;
}

//explicit return
// const rolldie = () => {
//     return Math.floor(Math.random()*6)+1;
// }


//implicit returns for one line programs
const rolldie = () => (
    Math.floor(Math.random()*6)+1
)

//one line function
const add = (a,b) => a+b;


const perso = {
    Firtname: "karn",
    lastname: "banjde",
    fullname: ()=>{
        return `${this.Firtname} ${this.lastname}`
    },
    shoutName: function(){
        setTimeout(()=>{
            console.log(this.fullname())
        },3000)
    }
}