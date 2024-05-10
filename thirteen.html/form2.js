
function submitForm(event){
    event.preventDefault();

let Name=document.getElementById('name').value;
if(Name==""){
    alert("plz enter ur name");
    return;
}
else if(Name.length<4){
    alert("plz enter 4 digit name");
    return; 
}
let Email=document.getElementById('email').value;
const regEx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
if(regEx.test(Email)){

}
else{
    alert("plz enter ur valid email");
    return;  
}
let Password=document.getElementById('password').value;
if(Password.length<6 || Password.length>20){
    alert("plz enter 6-19 digit Password");
    return;
}
let DoB=document.getElementById('dob').value;
if(DoB==""){
    alert("plz enter ur DoB");
    return;
}
let Round=document.getElementById('round').value;
if(Round=="--select one--"){
    alert("plz enter ur Round");
    return; 
}
let Gender=document.querySelector('input[name="gender"]:checked');
if(Gender==null){
    alert("plz enter ur Gender");
    return;
}
let hobby=document.querySelectorAll('input[name="hobby"]:checked');
if(hobby.length==""){
    alert("plz enter ur hobby");
    return;
}
let hobbyValue=[];
for(let i=0; i<hobby.length; i++){
    hobbyValue.push(hobby[i].value);
}
let Address=document.getElementById('address').value;
if(Address==""){
    alert("plz enter ur Address");
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
myForm.addEventListener("submit",submitForm);