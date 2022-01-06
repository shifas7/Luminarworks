// var expenses=[20000,25000,30000,35000,35000]
// for(let i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
// }

//amount greater than 25000:
// for(let amount of expenses){
//     if(amount>25000){
//     console.log(amount);
//     }
// }

//total expense:
// sum=0;
// for(let amount of expenses){
//     sum+=amount
// }
// console.log(sum);


//maximum expense
// max_exp=0;
// for(let amount of expenses){
//     if(amount>max_exp){
//         max_exp=amount;
//     }
// }
// console.log(max_exp);


//minumum expense:
// min_exp=expenses[0];
// for(let amount of expenses){
//     if(amount<min_exp){
//         min_exp=amount
//     }
// }
// console.log(min_exp);

//adding new element
// expenses.push(35000)
// console.log(expenses);

//removing duplicate:
// var st=new Set();
// for(let amount of expenses){
//     st.add(amount)
// }
// console.log(st);


//another method dupli:
// var unique=[]
// for(let amount of expenses){
//     if(unique.includes(amount)){

//     }
//     else{
//         unique.push(amount)
//     }
// }
// console.log(unique);



//var arr=[9,6,7,8,3,2]
//if num<5  num-1
//if num>5  num+1
var arr=[9,6,7,8,3,2]
var op=0;
for(let num of arr){
    num>5?op.push(num+1):op.push(num-1)
}