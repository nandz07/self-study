a='10';
b=20;
c=a+b;//string concatenation
console.log("value of c "+c);
names=['appu','anu','abi','mani','anvar'];
console.log("names in array are "+names);
console.log("anna".toUpperCase())
console.log(names[0].toUpperCase());
d="abcd".toUpperCase().length //method chaining
console.log(d);
console.log(c.bold());//ith nokkanda njan oru parrekshanam nadathiyatha(Don't Care)
p=document.getElementById("title").innerText;//Don't Care(DC)
//alert(p);

const myImage = document.querySelector('img');
const head=document.querySelector('h1');
const body=document.querySelector('body');

myImage.onclick = () => {
  
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/smile.jpg') {
    document.getElementById("h1").innerHTML="Why Did You Click..!"
    head.setAttribute('style','color:red')
    myImage.setAttribute('src','images/angry.jpg');
    body.setAttribute('style','background-color:black; color:white;')

  } else {
    myImage.setAttribute('src','images/smile.jpg');
    document.getElementById("h1").innerHTML="Never Click On Image"
    head.setAttribute('style','color:black')
    body.setAttribute('style','background-color:white; color:black;')
  }
}


// document.querySelector('html').addEventListener('click', function () {
//   alert('Ouch! Stop poking me!');
// });
let myVariable = document.querySelector('html');//will fetch all code of html
console.log(myVariable)
 
var aa=1//Dc
function CalcAdd(){//(DC)
  
  if(aa==1){
    document.getElementById("title").innerText = "Welcome to JavaScript";//(DC)
    aa=0
  }else{
    document.getElementById("title").innerText = "title";//(DC)
    aa=1
  }

}
//************Srting******* */
j="hello    "
console.log("before trim "+j.length);
console.log("after trim "+j.trim().length);

str="welcome to js";
ss=str.substr(0,3);
console.log("sub string "+ss);

str1="apple is my fav"
console.log("before replace ->"+str1);
str1=str1.replace("apple","orange")
console.log("after replace ->"+str1)

str2="india is my country"
console.log(str2.startsWith("india"));
console.log(str2.startsWith("america"));
//trimLeft(),trimRight()

str3="appu,ammu,anu";
str3=str3.split(",");
console.log("splited str3 => "+str3);
str4=str3.join(",")
console.log("join wit ',' => "+str4)
str4=str3.join("/")
console.log("join with '/' => "+str4)

str5=str.split(" ").join("/");
console.log(str5)

// *********Array***********

ar=[10,20,30,40,50,60,70,80,90,100]
console.log(ar);
console.log("index of 50 => "+ar.indexOf(50));
console.log("index of 200 => "+ar.indexOf(200))

ar.push("test")//insert into last position of array
console.log("insert new value at end => "+ar);

ar[4]=500
console.log("ar[4]=500 => "+ar)

ar.pop()
console.log("delete last value = >"+ar);//delete last one onthe array
//can do operation on the concept of stack

ar.shift()
console.log("delete vale from front => "+ar)

ar.unshift(1000)
console.log("added value to front of an array => "+ar);

ar.splice(0,2)
console.log("remove 0-2 indexed numbers => "+ar);


//######### Extra #########
let x = 1;

if (x === 1) {
  let x = 2;

  console.log("valueof x inside the if => "+x);
  // expected output: 2
}

console.log("valueof x outside the if => "+x);
// expected output: 1

//****** Objects **** */

ob={"name": "nandu","age":24,"mark":75}
console.log(ob);
console.log(ob.name);
console.log(ob.age);
console.log(ob.mark);
person = [{name:"appu",age:25},{name:"nandu",age:24}]//this format is called json format
console.log(person[0])
console.log(person[1])
console.log(person[0].name);
//JavaScript Object Notation (JSON) 
p=JSON.stringify(person)//convert object to string
console.log(p)
o=JSON.parse(p)
console.log(o)

//***********loop*********** */
// if(boolian value){

// }else{

// }
a=100
if(a<200){
  console.log(a+" is less than 200");
} 
var fruite="apple";
if(fruite=="banana"){
  console.log("fruit is banana")
}else if(fruite== "mango"){
  console.log("fruit is mango");
}else{
  console.log("fruit is "+fruite);
}
// function sample(){//Experiment
//   var data=''+$('#sample').val();
//   if(data.length<8){
//     $('#phone_number_span').text(" need valid phone number ..!");
//     phone_number_status=false;
//     console.log(data)
//     //alert("phone"+data.length);
// }else{
//   $('#phone_number_span').text(" ");
//   //alert(name_status);
//    phone_number_status=true;
//    console.log(data)
// }
// }
function sample(){
  var data=''+$('#sample').val();
  switch(data){
    case "mango":console.log("mango");
    break
    case "orange":console.log("orange");
    default: console.log("some other fruit");
  }
}
function sample1(){
  var data=''+$('#sample').val();
  // //console.log(typeof(data))
  // //i=parseInt(data);
  // string=""
  // a=data
  // i=0
  // while(i<a){
  //   //console.log("*");
  //   string+="*"
  //   //document.write("*");
  //   ++i;
  // }
  // console.log(string);
  let n = data; // row or column count
// defining an empty string
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
}

//dowhile********
var i=11
do{
  console.log(i)
  i++
}while(i<13)
