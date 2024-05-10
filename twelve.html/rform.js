
function submitForm(event){
    event.preventDefault();


    let rName=document.getElementById('name').value;
    if(rName==""){
        alert("enter ur name");
        return;
    }

    else if(rName.length<4){
        alert("enter 4 digit name");
        return;
    }

    let Email=document.getElementById('email').value;
    const regEx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(regEx.test(Email)){

    }
    else{
        alert("enter valid email");
        return;  
    }

    let Password=document.getElementById('password').value;
    if(Password.length<6 || Password.length>20){
        alert("enter 6 to 19 charecter");
        return;
    }

    let Gender= document.querySelector('input[name="gender"]:checked');
    if(Gender==null){
        alert("enter ur gender");
        return;  
    }

    let Round=document.getElementById('round').value;
    if(Round=="--select one--"){
        alert("enter ur round");
        return;
    }

    let hobby=document.querySelectorAll('input[name="hobby"]:checked');
    if(hobby.length==""){
        alert("enter ur hooby");
        return;
    }

    let hobbyValue=[];
    for(let i=0;i<hobby.length;i++){
        hobbyValue.push(hobby[i].value);
    }

    let Address=document.getElementById('address').value;
    if(Address==""){
        alert("enter ur address");
        return;
    }





    let output="Name :"+rName+"\n";
    output+="E-mail :"+Email+"\n";
    output+="Password :"+Password+"\n";
    output+="Gender :"+Gender.value+"\n";
    output+="Round :"+Round+"\n";
    output+="Hobby :"+hobbyValue+"\n";
    output+="Address :"+Address+"\n";  




    let newWindow=window.open("",'_blank');
    newWindow.document.write("<pre>"+output+"<pre>");
}
let myForm=document.getElementById('myForm');
myForm.addEventListener("submit", submitForm);

