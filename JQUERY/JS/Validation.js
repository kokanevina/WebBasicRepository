//extract all fields on the basis of id
let fnameNode,mnameNode,lnameNode,emailNode,ageNode,contactNode,unameNode,passNode,cpassNode;
let errorNode1,errorNode2,errorNode3,errorNode4,errorNode5,errorNode6,errorNode7,errorNode8,errorNode9;

const errorBorder="2px solid red";
const successBorder="2px solid green";
$(function(){
    fnameNode=$('#fname');
     mnameNode=$('#mname');
     lnameNode=$('#lname');
     emailNode=$('#emailid');
     ageNode=$('#age');
     contactNode=$('#mobile');
     unameNode=$('#uname');
     passNode=$('#pass');
     cpassNode=$('#c_pass');
     errorNode1=$('#error1');
     errorNode2=$('#error2');
     errorNode3=$('#error3');
     errorNode4=$('#error4');
     errorNode5=$('#error5');
     errorNode6=$('#error6');
     errorNode7=$('#error7');
     errorNode8=$('#error8');
     errorNode9=$('#error9');
  
    fnameNode.blur(()=>validate1());
    mnameNode.blur(()=>validate2());
    lnameNode.blur(()=>validate3());
    emailNode.blur(()=>validate4());
    ageNode.blur(()=>validate5());
    contactNode.blur(()=>validate6());
    unameNode.blur(()=>validate7());
    passNode.blur(()=>validate8());
    cpassNode.blur(()=>validate9());
    $('#regForm').submit(()=>validateForm());
});
function validateForm(){
    let s1=validate1();
    let s2=validate2();
    let s3=validate3();
    let s4=validate4();
    let s5=validate5();
    let s6=validate6();
    let s7=validate7();
    let s8=validate8();
    let s9=validate9();
    console.log(s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9);
    return (s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9);
}
function validate1(){
    let fname=fnameNode.val(); 
    errorNode1.html("");  
    if(fname===''){
        errorNode1.html("First name is required");
        fnameNode.css('border',errorBorder);
        return false;
    }
    else{
        fnameNode.css('border',successBorder);
        return true;
    }
}
function validate2(){
    mnameNode.css('border',successBorder);
    return true;
}
function validate3(){
    let lname=lnameNode.val(); 
    errorNode3.html("");  
    if(lname===''){
        errorNode3.html("Last name is required");
        lnameNode.css('border',errorBorder);
        return false;
    }
    else{
        lnameNode.css('border',successBorder);
        return true;
    }
}
function validate4(){
    let email=emailNode.val();  // @vinapatil
    errorNode4.html("");  
    let ss1=email.substring(0,email.indexOf('@'));
    let ss2=email.substring(email.indexOf('@')+1);
   // let index=email.indexOf('@');
   // if(index==0 || index===email.length-1)
    console.log(ss1);
    console.log(ss2);
    if(email===''){
        errorNode4.html("Email id is required");
        emailNode.css('border',errorBorder);
        return false;
    }
    else if(!email.includes('@')){
        errorNode4.html("Email Id should contain @");
        emailNode.css('border',errorBorder);
        return false;
    }
    else if (ss1==='' || ss2===''){
        errorNode4.html("Invalid Email id");
        emailNode.css('border',errorBorder);
        return false;
    }
    else{
        emailNode.css('border',successBorder);
        return true;
    }
}
function validate5(){
    let myage=ageNode.val();  
    console.log(typeof myage);
    errorNode5.html("");  
    if(myage===''){
        errorNode5.html("Age is required");
        ageNode.css('border',errorBorder);
        return false;
    }
    else if(parseInt(myage)<0 || parseInt(myage)>110){
        errorNode5.html("Age should be in the range 0 to 110");
        ageNode.css('border',errorBorder);
        return false;
    }
    else{
        ageNode.css('border',successBorder);
        return true;
    }
}
function validate6(){
    let mobile=contactNode.val();  
    let regExp= new RegExp("^[0-9]{10}$");  //class
    errorNode6.html("");  
  //  console.log(regExp.test(mobile));   // function
    if(mobile===''){
        errorNode6.html("Mobile is required");
        contactNode.css('border',errorBorder);
        return false;
    }
    else if(regExp.test(mobile)==false){
        errorNode6.html("Please enter valid mobile number");
        contactNode.css('border',errorBorder);
        return false;
    }
    else{
        contactNode.css('border',successBorder);
        return true;
    }
}
function validate7(){
    let username=unameNode.val();  
    errorNode7.html("");  
    if(username===''){
        errorNode7.html("username is required");
        unameNode.css('border',errorBorder);
        return false;
    }
    else if(username.length<6 || username.length>12){
        errorNode7.html("Username should be min 6 and max 12 characters long");
        unameNode.css('border',errorBorder);
        return false;
    }
    else{
        unameNode.css('border',successBorder);
        return true;
    }
}
function validate8(){
    let password=passNode.val();  
    let regExp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})");
    errorNode8.html("");  
   // console.log(regExp.test(password));   
    if(password===''){
        errorNode8.html("Password is required");
        passNode.css('border',errorBorder);
        return false;
    }
    else if(regExp.test(password)==false){
        errorNode8.html("Password should contain atleast one digit, small letter and capital letter.Password should be min 6 and max 15 characters long");
        passNode.css('border',errorBorder);
        return false;
    }
    else{
        passNode.css('border',successBorder);
        return true;
    }
}

function validate9(){
    let password=passNode.val();  
    let c_password=cpassNode.val();  
    errorNode9.html("");  
    if(c_password===''){
        errorNode9.html("Confirm Password is required");
        cpassNode.css('border',errorBorder);
        return false;
    }
    else if(c_password!=password){
        errorNode9.html("Both passwords should match");
        cpassNode.css('border',errorBorder);
        return false;
    }
    else{
        cpassNode.css('border',successBorder);
        return true;
    }
}