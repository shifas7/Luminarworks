var num=3;
var low=8,upper=30;
for(let i=1;i<=upper;i++){
    let res=i**num
    if(res>=low && res<=upper){
        console.log(i);
    }
}