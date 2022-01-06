// var arr=[2,3,4,5]
// var sum=7
// var flag=0;
// for(let i of arr){
//     for(let j of arr){
//         if(i+j==sum){
//             console.log(`pairs (${i},${j})`);
//             flag=1;
//         }
//     }
    
// }



var arr=[2,3,4,5]
var element=1
var low=0,upp=arr.length-1;
flag=0;
while(low<upp){
    let cur_sum=arr[low]+arr[upp]
    if(element==cur_sum){
        flag++
    console.log(`pairs (${arr[low]},${arr[upp]})`);
    break;}
    else if(cur_sum<element){
        low++;
    }
    else if(cur_sum>element){
        upp--
    }

}
if(flag==0){
    console.log("no pairs");
}


//q1 common num in arrays