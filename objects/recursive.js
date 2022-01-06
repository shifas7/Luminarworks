var text="ABABBC"
// var recur={}
// for(let char of text){
//     if(char in recur){
//         console.log("first recursive character is:",char);
//         break
//     }
//     else{
//         recur[char]=1
//     }
// }



var wc={}
var op=[]
Array.from(text).map(char=>char in wc?op.push(char):wc[char]=1)
console.log(op[0]);