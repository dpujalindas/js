// const arrowfunc1=(a,b)=>{
//     c=a*b;
//     console.log(c);
// }
// arrowfunc1(4,8);
// let count=0;
// function check(s){
//     for(let i=0;i<=s.length;i++){
//         if (s[i]=='a' || s[i]=='e' || s[i]=='i' ||s[i]=='o' || s[i]=='u'){
//              count+=1;
//         }

//     }
//     console.log(count);
// }
// check("puja")


// let arr=[1,3,6,3,8,2];
// arr.forEach(function printVal(val){
//     console.log(val);
// })

// let arr=[3,5,7,8,3,15];
// arr.forEach((i)=>{
//     console.log(i*i)
// })

// let num=[67,52,39];
// let newArr=num.map((val)=>{
//     return val*val
// })
// console.log(newArr);
// console.log(num);

let arr=[6,8,9,2,3,4,9,5,7];
let newArr=arr.filter((val)=>{
    return val%2==0;
})
console.log(newArr);





