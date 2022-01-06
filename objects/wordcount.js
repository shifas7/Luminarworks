var text="hello hai hello hai"
// var words=text.split(" ")
var wc={} 
// for(let word of words){
//     if(word in wc){
//         wc[word]+=1
//     }
//     else{
//         wc[word]=1
//     }
// }
// console.log(wc);


var word=text.split(" ").map(word=>word in wc?wc[word]+=1:wc[word]=1)
console.log(wc);