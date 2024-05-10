
function submitForm(event){
    event.preventDefault();

let Name=document.getElementById('name').value;
if(Name==""){
    alert("enter ur name");
    return;
}
else if(Name.length<4){
    alert("enter ur 4 digit name");
    return; 
}

let Email=document.getElementById('email').value;
const regEx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
if(regEx.test(Email)){

}
else{
    alert("enter ur valid email ");
    return;  
}
let Password=document.getElementById('password').value;
if(Password.length<6 ||Password.length>20){
    alert("enter ur 6-19 digit name");
    return;
}
let DoB=document.getElementById('dob').value;
if(DoB==""){
    alert("enter ur DoB");
    return;
}
let Round=document.getElementById('round').value;
if(Round=="--select one--"){
    alert("enter ur Round");
    return;
}
let Gender=document.querySelector('input[name="gender"]:checked');
if(Gender==null){
    alert("enter ur Gender");
    return;
}
let Hobby=document.querySelectorAll('input[name="hobby"]:checked');
if(Hobby.length==""){
    alert("enter ur hobby");
    return; 
}
let hobbyValue=[];
for(let i=0; i<Hobby.length; i++){
    hobbyValue.push(Hobby[i].value);

}

let Address=document.getElementById('address').value;
if(Address==""){
    alert("enter ur Address");
    return;
}






let output="Name :"+Name+"\n";
 output+="Email :"+Email+"\n";
 output+="Password :"+Password+"\n";
 output+="DoB :"+DoB+"\n";
 output+="Round :"+Round+"\n";
 output+="Gender :"+Gender.value+"\n";
 output+="Hobby :"+hobbyValue+"\n";
 output+="Address :"+Address+"\n";



    let newWindow=window.open("",'_blank');
    newWindow.document.write("<pre>"+output+"<pre>");
}

let myForm=document.getElementById('myForm');
myForm.addEventListener("submit", submitForm);