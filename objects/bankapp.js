class Bank{
     accounts = {
        1000: { accno: 1000, personName: "ram", balance: 5000, password: "userone",transactions:{
            debitTransaction:[],
            creditTransaction:[]
        } },
        1001: { accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",transactions:{
            debitTransaction:[],
            creditTransaction:[]
     
        } },
        1002: { accno: 1002, personName: "raju", balance: 8000, password: "userthree",transactions:{
            debitTransaction:[],
            creditTransaction:[]
    
        } },
        1003: { accno: 1003, personName: "vivek", balance: 15000, password: "userfour",transactions:{
            debitTransaction:[],
            creditTransaction:[]
    
        } },
    
    }
    session={}

    validateAccountNumber(acno){
        return acno in this.accounts ?true:false
    }

    authenticate(acno,password){
        if(this.validateAccountNumber(acno)){
            let pwd=this.accounts[acno].password
            if(password==pwd){
                console.log("acess granted");
                this.session["user"]=acno
            }
            else{
                console.log("password incorrect");
            }

        }
        else{
            console.log("invalid account number");
        }
    }
    
    getBalance(acno){
        return this.accounts[acno].balance
    }
    balanceEnquiry(){
        if("user" in this.session){
            let loggeduser=this.session["user"]
            console.log(this.getBalance(loggeduser));

        }
        else{
            console.log("invalid session u must login");
        }
    }

    loginRequired(){
        return "user" in this.session?true:false
    }

    loggedUser(){
        if(this.loginRequired()){
            return this.session["user"]
        }

    }

    fundTransfer(to_acno,amount){
        if(this.loginRequired()){
            if(this.validateAccountNumber(to_acno)){
                let loggeduser=this.session["user"]
                let curBal=this.getBalance(loggeduser)
                if(amount>curBal){
                    console.log("insufficient balance");
                }
                else{
                    this.accounts[loggeduser].balance-=amount
                    let from_ac_bal=this.getBalance(loggeduser)
                    console.log(`your account has been debited with ${amount} , your current balance is ${from_ac_bal}`);
                    
                    this.accounts[to_acno].balance+=amount
                    let to_ac_bal=this.getBalance(to_acno)
                    console.log(`account ${to_acno} has been credited with ${amount} ,current balance is ${to_ac_bal}`);
                    console.log("transaction completed");

                    let dbtransaction={to_account:to_acno,amount:amount}
                    let crtransaction={from_account:this.loggeduser,amount:this.amount}
                    this.accounts[to_acno].transactions.creditTransaction.push(crtransaction)
                    this.accounts[loggeduser].transactions.debitTransaction.push(dbtransaction)
                }

            }
            else{
                console.log("invalid account number");
            }

        }
        else{
            console.log("invalid session u must login");
        }
      
    }

    getDebitTransaction(){
        let user=this.loggedUser()
        this.accounts[user].transactions.debitTransaction.forEach(t=>console.log(t))
    }

    getCreditTransaction(){
        let user=this.loggedUser()
        this.accounts[user].transactions.creditTransaction.forEach(t=>console.log(t))
    }

    getTransactionHistory(){
        let user=this.loggedUser()
        console.log(this.accounts[user].transactions);

    }
    


}

var bank=new Bank()
    // console.log(bank.validateAccountNumber(1000));
    bank.authenticate(1000,"userone")
    //  bank.balanceEnquiry()
    bank.fundTransfer(1002,3000)
    bank.getDebitTransaction()
    bank.getTransactionHistory()
