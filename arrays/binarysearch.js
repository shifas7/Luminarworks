var arr=[2,5,6,8,9,10,12]
arr.sort((n1,n2)=>n1-n2)
var element=6;
var flag=0;
var low=0,upp=arr.length-1
while(low<=upp){
    let mid=Math.floor((low+upp)/2)
    if(element==arr[mid]){
        flag=1
        break;
    }
    else if(element>arr[mid]){
        low=mid+1
    }
    else if(element<arr[mid]){
        upp=mid-1
    }
}
console.log(flag==1?"found":"not found");