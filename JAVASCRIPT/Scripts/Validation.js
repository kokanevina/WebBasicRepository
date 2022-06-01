//extract all fields on the basis of id
let fnameNode=document.getElementById('fname');
let mnameNode=document.getElementById('mname');
let lnameNode=document.getElementById('lname');
let emailNode=document.getElementById('emailid');
let ageNode=document.getElementById('age');
let contactNode=document.getElementById('mobile');
let unameNode=document.getElementById('uname');
let passNode=document.getElementById('pass');
let cpassNode=document.getElementById('c_pass');
let errorNode1=document.getElementById('error1');
let errorNode2=document.getElementById('error2');
let errorNode3=document.getElementById('error3');
let errorNode4=document.getElementById('error4');
let errorNode5=document.getElementById('error5');
let errorNode6=document.getElementById('error6');
let errorNode7=document.getElementById('error7');
let errorNode8=document.getElementById('error8');
let errorNode9=document.getElementById('error9');
const errorBorder="2px solid red";
const successBorder="2px solid green";
function validate(){

}
function validate1(){
    let fname=fnameNode.value; 
    errorNode1.innerHTML="";  
    if(fname===''){
        errorNode1.innerHTML="First name is required";
        fnameNode.style.border=errorBorder;
    }
    else{
        fnameNode.style.border=successBorder;
    }
}
function validate2(){
    mnameNode.style.border=successBorder;
}
function validate3(){
    let lname=lnameNode.value; 
    errorNode3.innerHTML="";  
    if(lname===''){
        errorNode3.innerHTML="Last name is required";
        lnameNode.style.border=errorBorder;
    }
    else{
        lnameNode.style.border=successBorder;
    }
}
function validate4(){
    let email=emailNode.value;  // @vinapatil
    errorNode4.innerHTML="";  
    let ss1=email.substring(0,email.indexOf('@'));
    let ss2=email.substring(email.indexOf('@')+1);
   // let index=email.indexOf('@');
   // if(index==0 || index===email.length-1)
    console.log(ss1);
    console.log(ss2);
    if(email===''){
        errorNode4.innerHTML="Email Id is required";
        emailNode.style.border=errorBorder;
    }
    else if(!email.includes('@')){
        errorNode4.innerHTML="Email Id should contain @";
        emailNode.style.border=errorBorder;
    }
    else if (ss1==='' || ss2===''){
        errorNode4.innerHTML="Invalid Email id";
        emailNode.style.border=errorBorder;
    }
    else{
        emailNode.style.border=successBorder;
    }
}