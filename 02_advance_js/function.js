// const arrowfunc1=(a,b)=>{
//     c=a*b;
//     console.log(c);
// }
// arrowfunc1(4,8);
let count=0;
function check(s){
    for(let i=0;i<=s.length;i++){
        if (s[i]=='a' || s[i]=='e' || s[i]=='i' ||s[i]=='o' || s[i]=='u'){
             count+=1;
        }

    }
    console.log(count);
}
check("puja")