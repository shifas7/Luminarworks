var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]

//find():
var namebyid=mobiles.find(mob=>mob[0]==1000)
console.log(namebyid);


var redmimob=mobiles.find(mob=>mob[1]=="redmi")
console.log(redmimob);




//some():
// var isAval=mobiles.some(m1=>m1[3]==10000)
// console.log(isAval);


//is there any mobiles bw 10000-25000(some)
// var isAval=mobiles.some(m1=>m1[3]>10000 && m1[3]<25000)
// console.log(isAval);




//list all 5g mobile name
// var mobs=mobiles.filter(mob=>mob[6]=="5G")
// console.log(mobs);



//list all 5g mobiles available under 25000
// var mobs=mobiles.filter(mob=>mob[6]=="5G"&&mob[3]<25000)
// console.log(mobs);




//mobile details available in price range of 25k-30k
// var mobs=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000 )
// console.log(mobs);




//mobile names using arrow fn map
// var mobile_names=mobiles.map(mob=>mob[2])
// console.log(mobile_names);


// //mobile prices
// var mobile_prices=mobiles.map(mob=>mob[3])
// console.log(mobile_prices);


//samsung mobiles(filter)
// var sam_mob=mobiles.filter(mob=>mob[1]=="samsung")
// console.log(sam_mob);



// //mobiles under 25000
// var mobs=mobiles.filter(mob=>mob[3]<25000).map(mob=>mob[2])
// console.log(mobs);



// var mob_names=mobiles.filter(mob=>mob[1]=="samsung").map(mob=>mob[2])
// console.log(mob_names);


//costly mobile
// mobiles.sort((m1,m2)=>m2[3]-m1[3])
// console.log(mobiles[0]);



//snapdragon mobile processors
// for(let mobile of mobiles){
//     if(mobile[4]=="snapdragon"){
//         console.log(mobile[2]);
//     }
// }


//print costly mobile with processor snapdragon with 5g band
// var new_arr=[]
// for(let mobile of mobiles){
//     if(mobile[4]=="snapdragon" && mobile[6]=="5G"){
//         new_arr.push(mobile)
//     }
// }
// new_arr.sort((m1,m2)=>m2[3]-m1[3])
// console.log(new_arr[0]);


//q1 is there any mobile can i purchase below 10000
// var flag=0
// for(let mob of mobiles){
//     if(mob[3]<10000){
//         flag=1;
//     }
// }
// console.log(flag==0?false:true);



// //q2 print samsunga51 mobile details
// for(let mob of mobiles){
//     if(mob[2]=="samsung A51"){
//         console.log(mob);
//     }
// }



//highest price(reduce)
// var hprice=mobiles.reduce((m1,m2)=>m1[3]>m2[3]?m1:m2)
// console.log(hprice);

//low cost mobile(reduce)
// var low_price=mobiles.reduce((m1,m2)=>m1[3]<m2[3]?m1:m2)
// console.log(low_price);