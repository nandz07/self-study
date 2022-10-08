//+++++++ self ++++++++++

// export var sum=(...c)=>{
//     var s=0;
//     c.forEach((i)=>{
//         s+=i;
//     })
//     return s;
// }
// export var mul=(...c)=>{
//     var m=1;
//     c.forEach(function(i){
//         m*=i;
//     })
//     return m;
// }
// export function diff(...c){
//     var d=c[0];
//     c.shift();
//     c.forEach((j)=>{
//         d-=j;
//     })
//     return d;
// }
// export var div=(...c)=>{

//     var d=c[0];
//     c.shift();
//     c.forEach((i)=>{
//         d/=i;
//     })
//     return d;
// }


//++++++++++ or it can be simply (video method) +++++++++


// export function sum(a,b){
//     return a+b;
// }
// export function diff(a,b){
//     return a-b;
// }
// export function mul(a,b){
//     return a*b;
// }
// export function div(a,b){
//     return a/b;
// }
//function ratio(a,b){
    //     return a+b;
    // }
    //export {ratio} or export {ratio as exponent} 

//======== in class method =======
export default class operations {
    sum=(...c)=>{
            var s=0;
            c.forEach((i)=>{
                s+=i;
            })
            return s;
        }
}


