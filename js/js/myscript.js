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
console.log(c.bold());
p=document.getElementById("title").innerText;
//alert(p);

function CalcAdd(){
    document.getElementById("title").innerText = "Welcome to JavaScript".bold();
}
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