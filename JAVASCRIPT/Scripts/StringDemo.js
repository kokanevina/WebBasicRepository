
let s1='neosoft Technologies neosoft';
let s2=new String('Rabale');
document.write(s1.length);
document.write('<br>')
document.write(s1.charAt(6));
document.write('<br>')
document.write(s1.indexOf('o'));
document.write('<br>')
document.write(s1.lastIndexOf('o'));
document.write('<br>')
document.write(s1.indexOf('o',3)); // search should start from 3
document.write('<br>')
document.write(s1.lastIndexOf('o',13));  // start : going backward
document.write('<br>')
document.write(s1.indexOf('of')); 
document.write('<br>')
let cons=s1.concat(' Rabale');   // immutable objects
console.log(s1);
console.log(cons);
s1=s1.concat(' Thane');  // immutable, reference is changed
console.log(s1);
let arr=['vina','rama','kranti','radha','rupali'];
for(let name of arr)
  if(name.endsWith('a'))
    console.log(name);
// display only those names which are starting wirh ra
let state1='    Maharashtra state ';
let state2='Maharashtra state    ';
if(state1===state2)
    console.log("Equal");
else
    console.log("Not equal");
if(state1.trim()===state2.trim())
    console.log("Equal");
else
    console.log("Not equal");
    console.log(state1);
// substr, substring, slice
let slogan="India is my country";
console.log(slogan.substring());
console.log(slogan.substring(3,10));
console.log(slogan.substring(3));
console.log(slogan.substring(-3));  // 0
console.log(slogan.substring(5,-4)); //5,0   0:s, 5: end
console.log(slogan.substring(-5,-4)); //0,0
console.log(slogan.substring(10,3));  // 3: s, 10:e
slogan="India is my country";
console.log(slogan.slice());
console.log(slogan.slice(3,10));
console.log(slogan.slice(3));
console.log(slogan.slice(-3));  // counting from last from 1
console.log(slogan.slice(5,-4)); 
console.log(slogan.slice(-5,-4)); //u
console.log(slogan.slice(10,3));  // 10: s, 3: e
console.log(slogan.slice(-14,-5));  //is my co
console.log(slogan.substr(3,10)) ;// start and length
console.log(slogan.substr(-3,10)) ;
console.log(slogan.substr(-10,5)) ;

