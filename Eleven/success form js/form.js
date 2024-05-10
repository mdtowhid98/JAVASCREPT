
function submitForm(event) {

    event.preventDefault();

    let rName = document.getElementById('name').value;
    if (rName == '') {
        alert("name can not be empty");
        return;
    }
    else if(rName.length<=3){
        alert("name must be least 4 charecter");
        return;
    }

    let email=document.getElementById('email').value;
    const regEx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regEx.test(email)){

    }
    else{
        alert("please enter valid email address");
        return;
    }

    let password=document.getElementById('password').value;
    if(password.length<6 || password.length>=20){
        alert("please enter mimmum 6 charecter");
        return;

    }


    let DoB=document.getElementById('dob').value;
    if(DoB==""){
        alert("please enter your DoB");
        return;
    }

    let hobby=document.querySelectorAll('input[name="hobby"]:checked');
    if(hobby.length==0){
        alert("please enter least 1 hobby");
        return;
    }
    let hobbyValue=[];
    for(let index=0; index<hobby.length; index++){
        hobbyValue.push(hobby[index].value);
    }

    let Round=document.getElementById('round').value;
    if(Round=='select one'){
        alert("enter your round");
        return;
    }

    let Gender=document.querySelector('input[name="gender"]:checked');
    if(Gender==null){
        alert("enter ur gender");
        return;
    }

    let Address=document.getElementById('address').value;

    if(Address==""){
        alert("enter ur address");
        return;
    }




    let output = "Name :" + rName + "\n";
    output += "Email :" + email+ "\n";
    output += "Password :" + password+ "\n";
    output += "DoB :" + DoB+ "\n";
    output += "Hobby :" + hobbyValue+ "\n";
    output += "round :" + Round+ "\n";
    output += "Gender :" + Gender.value+ "\n";
    output += "Address :" + Address+ "\n";

    

    let newWindow = window.open("", '_blank');
    newWindow.document.write("<pre>" + output + "<pre>");
}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);