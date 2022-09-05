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

function CalcAdd(){//(DC)
    document.getElementById("title").innerText = "Welcome to JavaScript".bold();//(DC)
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
