
console.log("SPREAD WITH NUMBERS\n")
const nums = [13,4,3,4,5,6,4,745,83,124,5,78];
Math.max(13,4,3,4,5,6,4,745,83,124,5,78);
//returns maximum value

Math.max(nums);
//Returns NaN as max takes only numbers not arrays

Math.max(...nums);
Math.min(...min);
console.log(...nums);

console.log(..."hello");
//Returns h e l l o as differnt objects




console.log("SPREAD WITH ARRAY LITERALS\n")

const cats = ["Blue","Bed","Black"];
const dogs = ["yellow", "yreen"];

const allPets = [...cats, ...dogs]
// combines both arrays
const allPets = [...cats, ...dogs,"new"];

const characters = [..."HELLO"];




console.log("SPREAD WITH OBJECT LITERALS\n");

const feline = {legs:4,family:"Felidae"};
const canine = {legs:4, family:"celine", isfurry = true};

const catDog = {...feline, ...canine};
//second one dominates the first one in case of conflict


// {...[2,4,6]}
// {0:2,1:4,2:6}

const dataFromForm = {
    email: "lanfanfaslnfas",
    password: "sanfkasnfa",
    username: "skfnaksj"
}
const newUser = {...dataFromForm, id:235, isadmin: false};

