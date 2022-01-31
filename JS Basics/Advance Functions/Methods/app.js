const myMath = {
    PI:  3.14,
    square: function(num){
        return num*num;
    },
    cube: function(num){
        return num*num*num;
    }
}
// OR CAN BE WRITTEN AS
const myMathNew = {
    PI:  3.14,
    square(num){
        return num*num;
    },
    cube(num){
        return num*num*num;
    }
}
// Calls
myMath.PI;
myMath.square(myMath.PI);
myMath.cube(myMath.PI);
myMathNew.PI;
myMathNew.square(myMath.PI);
myMathNew.cube(myMath.PI);