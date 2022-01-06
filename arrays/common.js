// var arr1 = [10, 11, 20,21]
// var arr2 = [11,12,20,21]
// var count=0,flag=0
// for (let i of arr1) {
//     for (j of arr2) {
//         if (i == j) {
//             console.log(i);
//             flag=1
//             break
//         }
//     }

//     }
// if(flag==1){

// }
// else{
//     console.log("no common number");
// }







var arr1=[10,11,20,21]
var arr2=[11,12,20,21]
var p1=0,p2=0;
var count=0
while(p1<arr1.length && p2<arr2.length){
    if(arr1[p1]==arr2[p2]){
        console.log(arr1[p1]);
        p1++
        p2++
    }
    else if(arr1[p1]>arr2[p2]){
        p2++
    }
    else if(arr1[p1]<arr2[p2]){
        p1++
    }
    count++
}
console.log(count);