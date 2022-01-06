var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district
// var hdist=covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
// console.log(hdist);



// q2 district with higest 1 dose vaccination rate
// var dose1=covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)[5]
// console.log(dose1);
// var ds=covid_data.filter(dis=>dis[5]==dose1)
// console.log(ds);




// q3 district with lowest death cases
// var low_cov=covid_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)
// console.log(low_cov);




// q4 sort district with +ve cases
// var positive=covid_data.sort((d1,d2)=>d2[2]-d1[2])
// console.log(positive);



// q5 sort the districts based on 1st dose
// var first_dose=covid_data.sort((d1,d2)=>d2[5]-d1[5]).map(d1=>d1[1])
// console.log(first_dose);



// q6 is there any states with +ve cases > 60000
// var isThere=covid_data.some(d1=>d1[2]>60000)
// console.log(isThere);



// q7 print trissur details
// var tsr=covid_data.find(d1=>d1[1]=="thrissur")
// console.log(tsr);



// q8 total number of +ve cases
// var total_pos=covid_data.map(d=>d[2]).reduce((p1,p2)=>p1+p2)
// console.log(total_pos);


// q9 total number of cured cases
// var total_cured=covid_data.map(d=>d[4]).reduce((p1,p2)=>p1+p2)
// console.log(total_cured);



// q10 cured numbers of iduky
// var cured=covid_data.find(d1=>d1[1]=="iduky")[4]
// console.log(cured);



// q11 total number of death cases
// var total_death=covid_data.map(d=>d[3]).reduce((dc1,dc2)=>dc1+dc2)
// console.log(total_death);
