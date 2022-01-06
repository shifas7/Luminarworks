 var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

//q1 total number of accounts
// console.log(accounts.length);


//q2 print all account numbers whose ac-type=savings
// accounts.filter(ac=>ac.ac_type=="savings").forEach(data=>console.log(data.acno));


//q3 print balance of acno=1000
// var bal=accounts.find(data=>data.acno==1000).balance
// console.log(bal);


//q4 print all g-pay transactions
// var trans=accounts.map(data=>data.transactions).flat()
// trans.filter(data=>data.method=="g-pay").forEach(data=>console.log(data))


//q5 print credit transaction of 1002
// accounts.map(data=>data.transactions).flat().filter(trs=>trs.to==1002).forEach(data=>console.log(data))


//q6 print highest balance account details
// var high=accounts.sort((d1,d2)=>d2.balance-d1.balance)
// console.log(high[0]);


//print transaction history of 1002
// var creditTransactions=accounts.map(data=>data.transactions).flat().filter(trs=>trs.to==1002)
// var debitTransactions=accounts.find(data=>data.acno==1002).transactions
// var transactionHistory={"debitTransaction":debitTransactions,"creditTransaction":creditTransactions}
// console.log(transactionHistory);v