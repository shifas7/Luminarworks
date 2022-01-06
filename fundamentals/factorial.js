var num=4,i=1;
fact=1;
var str=""
while(i<=num){
    str+=`${i}*`
    fact*=i;
    i++;
}

console.log(`${str}=${fact}`);