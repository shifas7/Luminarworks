var num=123;
var res=0;
while(num!=0){
    let last=num%10;  
    res+=last**3  //last*last*last
    num=Math.floor(num/10) 
}
console.log(res);