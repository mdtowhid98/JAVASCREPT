
function submitForm(event) {
    event.preventDefault();

    let rName = document.getElementById('name').value;
    if(rName==""){
        alert("enter ur name");
        return;
    }
    else if(rName.length<4){
        alert("plz enter 4 digit");
        return;
    }

    let Email = document.getElementById('email').value;
    const regEx= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regEx.test(Email)){

    }
    else{
        alert("plz enter valid gmail");
        return;
    }

    let Password = document.getElementById('password').value;
    if(Password.length<6 || Password.length>=20){
        alert("plz enter 6 to 19 charecter");
        return;
    }

    let Gender = document.querySelector('input[name="gender"]:checked');
    if(Gender==null){
        alert("plz enter ur gender");
        return;
    }

    let hobby = document.querySelectorAll('input[name="hobby"]:checked');
    if(hobby.length==""){
        alert("select atleast 1 hobby");
        return;
    }

    let hobbyValue=[];
    for(let index=0; index<hobby.length; index++){
        hobbyValue.push(hobby[index].value);
    }

    let Round=document.getElementById('round').value;
    if(Round=="select one"){
        alert("plz enter ur round");
        return;
    }

    let Address=document.getElementById('address').value;
    if(Address==""){
        alert("plz enter ur address");
        return;
    }




    let output = "Name :" + rName + "\n";
    output +="E-mail :" + Email + "\n";
    output+= "Password :"+Password+"\n";
    output += "Gender :"+Gender.value+"\n";
    output+= "Hobby :"+hobbyValue+"\n";
    output+="Round :"+Round+"\n";
    output+="Address :"+Address+"\n";
    

        let newWindow = window.open("", '_blank');
    newWindow.document.write("<pre>" + output + "<pre>");
}

let myForm = document.getElementById('myForm');
myForm.addEventListener("submit", submitForm);

