//nested objects
var users = {
    1000: { accno: 1000, personName: "ram", balance: 5000, password: "userone",transactions:{
        debitTransaction:[],creditTransaction:[]
    } },
    1001: { accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",transactions:{
        debitTransaction:[],creditTransaction:[]
 
    } },
    1002: { accno: 1002, personName: "raju", balance: 8000, password: "userthree",transactions:{
        debitTransaction:[],creditTransaction:[]

    } },
    1003: { accno: 1003, personName: "vivek", balance: 15000, password: "userfour",transactions:{
        debitTransaction:[],creditTransaction:[]

    } },

}


//print 1003 name
// console.log(users[1003].personName);


//1005 exist or not
// console.log("1005" in users);


// function authenticate(accno,password){
//     //check accno exist
//     if(accno in users){
//         //check pass
//         let pwd=users[accno].password
//         if(pwd==password){
//             return 1
//         }
//         else{
//             return -1
//         }

//     }
//     else{
//         return 0
//     }
// }
// console.log(authenticate(1000,"userone"));



function validateaccount(acno) {
    return acno in users ? true : false
}

function fundTransfer(from_acno, to_acno, amount) {
    if (validateaccount(from_acno) && validateaccount(to_acno)) {
        let bal = users[from_acno].balance;
        if (amount > bal) {
            console.log("insufficient balance");
        }
        else {
            users[from_acno].balance -= amount
            let from_acno_balance=balanceEnquiry(from_acno)
            console.log(`your acno ${from_acno} has been debited with ${amount} avalable bal ${from_acno_balance}`);
            users[to_acno].balance += amount
            let to_acno_balance=balanceEnquiry(to_acno)
            console.log(`your acno ${to_acno} has been credited with ${amount} avalable bal ${to_acno_balance}`);
            let creditTrans={from:from_acno,amount:amount}
            let debitTrans={to:to_acno,amount:amount}
            users[from_acno].transactions.debitTransaction.push(debitTrans)
            users[to_acno].transactions.creditTransaction.push(creditTrans)
            console.log(users[from_acno].transactions.debitTransaction);
            console.log(users[to_acno].transactions.creditTransaction);

        }
    }
    else {
        console.log("invalid account no");
    }
}
fundTransfer(1003, 1001, 1000);




function balanceEnquiry(acno){
    if(acno in users){
    return users[acno].balance        
    }
    else{
        console.log("invalid account");
    }
}
// console.log(balanceAmount("1000"));



