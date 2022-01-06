var num1=8,num2=24;
var i=1;
var hcf=0;
while(i<=num1){
    if(num1%i==0 && num2%i==0){
    hcf=i
    // console.log(hcf);
    }
    i++
}
console.log(hcf);
