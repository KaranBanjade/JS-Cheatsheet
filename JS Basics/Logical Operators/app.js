const password = prompt("Enter Password with AND conditon");
if(password.length>=6 && password.indexOf(' ') === -1 ){
    alert("Valid Password");
}
else{
    alert("Invalid password");
}

const password2 = prompt("Enter Password with OR condition");
if(password2.length>=6 || password2.indexOf(' ') === -1 ){
    alert("Valid Password");
}
else{
    alert("Invalid password");
}

if(!(password2.length>=6 || password2.indexOf(' ') === -1 )){
    alert("Valid Password");
}
else{
    alert("Invalid password");
}