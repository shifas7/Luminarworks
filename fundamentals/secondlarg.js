var num1=10,num2=15,num3=20;
if((num1>num2) && (num1>num3)){
    if(num2>num3){
        //console.log("num2 is second largest");
        console.log(num1,num2,num3);
    }
    else{
       // console.log("num3 second largest ");
        console.log(num1,num3,num2);

    }
}
else if((num2>num1)&&(num2>num3)){
    if(num1>num3){
        //console.log("num1 is second largest");
        console.log(num2,num1,num3);

    }
    else{
        //console.log("num3 second largest ");
        console.log(num2,num3,num1);

    }

}
else if((num3>num1)&&(num3>num2)){
    if(num1>num2){
        //console.log("num1 is second largest");
        console.log(num3,num1,num2);

    }
    else{
        //console.log("num2 second largest ");
        console.log(num3,num2,num1);

    }

}
