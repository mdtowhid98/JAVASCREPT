


let Email=prompt("plz enter email address");
const regEx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
if(regEx.test(Email)){
    alert("email address is correct");
}
else{
    alert("Email address is wrong");
}



