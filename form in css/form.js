
function subMitForm(event){
    event.preventDefault();

    let rName=document.getElementById('name').value;
    if(rName==""){
        alert("plz enter ur name");
        return;
    }
    else if(rName.length<4){
        alert("plz enter 4 digit name");
        return; 
    }
    let Email=document.getElementById('email').value;
    const regEx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(regEx.test(Email)){

    }
    else{
        alert("plz enter valid email");
        return; 
    }
    let Password=document.getElementById('password').value;
    if(Password.length<6 || Password.length>20){
        alert("plz enter 6 to 19 charecter");
        return;
    }
    let DoB=document.getElementById('dob').value;
    if(DoB==""){
        alert("plz enter ur Dob");
        return;
    }
    let Gender=document.querySelector('input[name="gender"]:checked');
    if(Gender==null){
        alert("plz enter ur gender");
        return;
    }

    let Hobby=document.querySelectorAll('input[name="hobby"]:checked');
    if(Hobby.length==""){
        alert("plz enter ur hobby");
        return;
    }

    let hobbyValue=[];
    for(let i=0;i<Hobby.length;i++){
        hobbyValue.push(Hobby[i].value);
    }
    let Round=document.getElementById('round').value;
    if(Round=="--select one--"){
        alert("plz enter ur round");
        return;
    }

    let Address=document.getElementById('address').value;
    if(Address==""){
        alert("plz enter ur Address");
        return;
    }














let output="Name :"+rName+"\n";
output+="Email :"+Email+"\n";
output+="Password :"+Password+"\n";
output+="DoB :"+DoB+"\n";
output+="Gender :"+Gender.value+"\n";
output+="Hobby :"+hobbyValue+"\n";
output+="Round :"+Round+"\n";
output+="Address :"+Address+"\n";





    let newWindow=window.open("",'_blank');
    newWindow.document.write("<pre>"+output+"<pre>");
}
let myForm=document.getElementById('myForm');
myForm.addEventListener('submit', subMitForm);