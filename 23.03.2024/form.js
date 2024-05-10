
function submitForm(event){
    event.preventDefault();

let Name=document.getElementById('name').value;
let Gender=document.querySelector('input[name="gender"]:checked').value;
let Course=document.querySelectorAll('input[name="course"]:checked');
let courseValue=[];
for(i=0;i<Course.length;i++){
    courseValue.push(Course[i].value);
}
let Location=document.getElementById('location').value;




let output="Name :"+Name+"\n";
 output+="Gender :"+Gender+"\n";
 output+="Course :"+courseValue+"\n";
 output+="Location :"+Location+"\n";



    let newWindow=window.open("",'_blank');
    newWindow.document.write("<pre>"+output+"<pre>");
}

let myForm=document.getElementById('myForm');
myForm.addEventListener("submit", submitForm);