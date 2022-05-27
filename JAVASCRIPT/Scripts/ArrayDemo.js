
let arr1=[45,23,'hello',false,90,67.89];
let arr2=[56,34,78,56,34,89,70,12];
console.log(arr2);
document.write(arr2);
document.write("<hr>")
for(let i=0;i<arr2.length;i+=2)
    document.write(i+" "+arr2[i]+"<br>");
// start from any where, we can stop any where, increment, backward
//0, end, forward : enhanced for
document.write("<hr>")
for(let ele of arr2){
    document.write(ele+"<br>");
}
//foreach method
arr2.forEach((ele,index,ref)=>{
    console.log(ele+"   "+index+"   "+ref);
    ref[3]=67889;
});

//foreach method
arr2.forEach(element=>console.log(element));

let empNames=['rama','krupa','deep','kalpesh','seema','rama'];
// iterate above array using forEach method
let arr3=new Array();
console.log(arr3.length);
arr3.push(56);
arr3.push(12);
console.log(arr3);
console.log(arr3.length);
let arr4=new Array(3);
console.log(arr4);
console.log(arr4.length);
arr4.push(6778);  // insert the element from last
console.log(arr4);
console.log(arr4.length);
for(let i=0;i<3;i++)   // fill empty indexes
    arr4[i]=56;
    console.log(arr4);
console.log(arr4.length);
let el=arr4.pop();  // delete the elements from last
console.log("Element popped:"+el);  
console.log(arr4);
console.log(arr4.length);
arr4.unshift(78846);   // inserts the element from start
console.log(arr4);
console.log(arr4.length);
let el1=arr4.shift();   // delete the element from start
console.log("Element popped:"+el1);  
console.log(arr4);
console.log(arr4.length);
let arr5=new Array(4);
let arr6=new Array(4,3,6);
console.log(arr5);
console.log(arr6);
let arr7=new Array('ddf','dfff','sadd');
arr7.reverse();
console.log(arr7);
let newarray=empNames.slice(3);
console.log(newarray);
newarray=empNames.slice(1,4);
console.log(newarray);
arr2=[56,34,78,56,34,89,70,12];
// make square of every element of an array store result in new array
// display old as well as new array
let newarr=[];
for(let ele of arr2){
    let temp=ele*ele;
    newarr.push(temp);
}
document.write("<hr>")
arr2.forEach(e=>document.write(e+" "));
document.write("<hr>")
newarr.forEach(e=>document.write(e+" "));
let sqrarry=arr2.map(e=>e*e);
document.write("<hr>")
document.write(arr2);
document.write("<hr>")
document.write(sqrarry);
// divide every element of an array by 2 store result in new array
// display old as well as new array

// n element : single out
// sum of array element : reduce
arr2=[56,34,78,56,34,89,70,12];
let sum=0;
for(let el of arr2){
    sum=sum+el;}
console.log(sum);
//initial values: acc= arr[0], ele=acc[1];
let sum1=arr2.reduce((acc, ele)=>acc+ele);
console.log(sum1);
// sum of array element + 350
sum=350;
for(let el of arr2){
    sum=sum+el;}
console.log(sum);
//initial values: acc= 350, ele=acc[0];
sum1=arr2.reduce((acc, ele)=>acc+ele, 350);
console.log(sum1);
// implement find method and filter method with arrow function callback
// show the difference between find and filter