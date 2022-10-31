var abc=()=>{
    console.log("inside function");
}
console.log("console 1");
setTimeout(() => {
console.log("timeout 1");
}, 0);
console.log("console 2");
setTimeout(() => {
    console.log("timeout 2");
}, 0);
console.log("console 3");
new Promise((resolve,reject)=>{
    resolve();
}).then(()=>{
    console.log("inside promise");
})
abc();