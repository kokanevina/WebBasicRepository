
var company;
company="neosoft";
console.log(typeof company)
company=78899;
console.log(typeof company)
company=true;
console.log(typeof company)
company=4556.7889;
console.log(typeof company)
let locatin="Rabale";
locatin=456;
const contact=678;
//contact=56667;  // no reassignment
/*dyanamically typed language

statially typed language int a, char c, boolean b, String s, float p, double q
*/
/*simple function */
function addNums(){
  var num1=45, num2=56;  var result=num1+num2;
  document.write("<p>Result is :"+result+"</p>");
  document.write(`<p>Result is : ${result}</p>`);
}// ended
addNums()
function addNums1(num1,num2){
    return num1+num2;
}
let result=addNums1(567,4567);
document.write(`<h4>Result is : ${result}</h4>`);
function Demo(){
  /*var type variable always have functional scope though they are delcared anywhere
   inside
  the function*/ 
  for(var i=1;i<=5;i++){ 
    console.log("i="+i);
    var myname='vina';
  }
  console.log("outside loop i="+i);
  console.log("My Name is "+myname);
/*let type variables have block scope where they are declared*/ 
  for(let j=1;j<=5;j++){  
    console.log("j="+j);
    var mylastname='Patil';
  } // end
  //console.log("outside loop j="+j);
  //console.log("My Last Name is "+mylastname);
}
Demo();
/*annonymous function : no name, ref var: let, var, const */
let cubeFun=function  (num){
  return num*num*num;
}
var res=cubeFun(6);
document.write("Cube is "+res);
document.write("Cube is "+cubeFun(7));

let arrowFun=num=>num*num*num

let res=arrowFun(6);
console.log("cube is:"+res);
