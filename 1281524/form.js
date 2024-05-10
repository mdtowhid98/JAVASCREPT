
function submitForm(event){
    event.preventDefault();

let Name=document.getElementById('name').value;
let Contact=document.getElementById('contact').value;
let Remarks=document.getElementById('remarks').value;
let Gender=document.querySelector('input[name="gender"]:checked').value;
let course=document.querySelectorAll('input[name="course"]:checked');
let courseValue=[];
for(let i=0;i<course.length; i++){
    courseValue.push(course[i].value);
}

let Location=document.getElementById('location').value;


let output="Name :"+Name+"\n";
 output+="Contact :"+Contact+"\n";
 output+="Remarks :"+Remarks+"\n";
 output+="Gender :"+Gender+"\n";
 output+="Course :"+courseValue+"\n";
 output+="Location :"+Location+"\n";


    let newWindow=window.open("",'_blank');
    newWindow.document.write("<pre>"+output+"<pre>");
}

let myForm=document.getElementById('myForm');
myForm.addEventListener("submit", submitForm);