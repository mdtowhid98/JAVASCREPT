

function submitForm(event){
    event.preventDefault();

let rName=document.getElementById('name').value;
if(rName==""){
    alert("please enter your name");
    return;
}

if(rName.length<4){
    alert("please enter atleast 4 charecter");
    return;
}

let email=document.getElementById('email').value;
const regEx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(regEx.test(email)){

}
else{
    alert("enter valid email");
    return;
}

let password=document.getElementById('password').value;
if(password.length<6 || password.length>20){
    alert("please enter password charecter 6-19");
    return;
}

let Gender=document.querySelector('input[name="gender"]:checked');
if(Gender==null){
    alert("please enter ur gender");
    return;
}
let hobby=document.querySelectorAll('input[name="hobby"]:checked');
if(hobby.length==""){
    alert("atleast one hobby selected");
    return;
}

let hobbyValue=[];

for(let index=0; index<hobby.length; index++){
    hobbyValue.push(hobby[index].value);
}

let round=document.getElementById('round').value;
if(round=="--select one--"){
    alert("enter your round");
    return;
}
let Address=document.getElementById('address').value;
if(Address==""){
    alert("please enter ur address");
    return;

}




let output="Name :"+rName+"\n";
 output+="Email :"+email+"\n";
 output+="Password :"+password+"\n";
 output+="Gender :"+Gender.value+"\n";
 output+="Hobby :"+hobbyValue+"\n";
 output+="Round :"+round+"\n";
 output+="Address :"+Address+"\n";





let newWindow=window.open("",'_blank');
newWindow.document.write("<pre>" +output+ "<pre>");

}

let myForm=document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);