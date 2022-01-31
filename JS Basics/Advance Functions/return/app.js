const add = function(x,y){
    return x + y;
}
//Can be called using add

function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log('Good');
            console.log('Million');
        }
    }
    else{
        return function(){
            console.log('Stop it');
            console.log('Stop it');
            console.log('Stop it');
            console.log('Stop it');
            console.log('Stop it');
        }
    }
}

function makeBetweenFucn(min,max){
    return function(num){
        return num>=min && num<=max;
    }
}


