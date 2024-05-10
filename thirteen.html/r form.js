
function submitForm(event){
    event.preventDefault();

    let Name=document.getElementById('name').value;
    if(Name==""){
        alert("plz enter ur name");
        return;
    }
    else if(Name.length<4){
        alert("plz enter atleast 4 charecter name");
        return;  
    }
    
    Email=document.getElementById('email').value;
    const regEx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(regEx.test(Email)){

    }
    else{
        alert("plz enter ur valid email");
        return;   
    }
    Password=document.getElementById('password').value;
    if(Password.length<6 || Password.length>20){
        alert("plz enter 6 to 19 digit password");
        return;  
    }
    DoB=document.getElementById('dob').value;
    if(DoB==""){
        alert("plz enter ur dob");
        return; 
    }
    Gender=document.querySelector('input[name="gender"]:checked');
    if(Gender==null){
        alert("plz enter ur Gender");
        return; 
    }
    hobby=document.querySelectorAll('input[name="hobby"]:checked');
    if(hobby.length==""){
        alert("plz enter ur hobby");
        return; 
    }

    let hobbyValue=[];
    for(let i=0; i<hobby.length; i++){
        hobbyValue.push(hobby[i].value);
    }
    Address=document.getElementById('address').value;
    if(Address==""){
        alert("plz enter ur Address");
        return; 
    }





    let output="Name :"+Name+"\n";
    output+="Email :"+Email+"\n";
    output+="Password :"+Password+"\n";
    output+="DoB :"+DoB+"\n";
    output+="Gender :"+Gender.value+"\n";
    output+="hobby :"+hobbyValue+"\n";
    output+="Address :"+Address+"\n";


    let newWindow=window.open("",'_blank');
    newWindow.document.write("<pre>"+output+"<pre>");
}

let myForm=document.getElementById('myForm');
myForm.addEventListener("submit", submitForm);