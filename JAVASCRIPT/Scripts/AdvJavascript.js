let id ;
let stud={
    studId:345,
    studName:'Poonam',
    studPercentage:78.9
}


class Employee{
    empId; empName; empSalary;
}
let employee1=new Employee(); // default constructor
console.log(employee1.empId);
console.log(employee1.empName);
console.log(employee1.empSalary);
console.log(id);
let employee2=new Employee(); // default constructor
console.log(employee2.empId);
console.log(employee2.empName);
console.log(employee2.empSalary);
employee1.empId=345;
employee1.empName="Hari";
employee1.empSalary=20000;
console.log(JSON.stringify(employee1));
employee2.empId=234;
employee2.empName="Hari";
employee2.empSalary=20000;
console.log(JSON.stringify(employee2));
employee2.empName="Shree";
console.log(JSON.stringify(employee1));
console.log(JSON.stringify(employee2));

class BankAccount{
    accNum; custId; accBalance;
    constructor(accNo,cId,balance){
        this.accNum=accNo;
        this.custId=cId;
        this.accBalance=balance;
        console.log("in constructor");
    }
    deposit(depAmt){
        this.accBalance=this.accBalance+depAmt;
    }
    withdraw(wdAmt){
        this.accBalance=this.accBalance-wdAmt;
    }
}
let account1=new BankAccount(1111111,23232323,56000);
let account2=new BankAccount(2222222,12121212,56000);
let account3=new BankAccount(3333333,45454455,57000);
let account4=new BankAccount(4444444,23244321,89000);
console.log(JSON.stringify(account1));
console.log(JSON.stringify(account2));
account2.accBalance=789000;
console.log(JSON.stringify(account1));
console.log(JSON.stringify(account2));

account3.deposit(23000);
console.log(JSON.stringify(account3));
account4.withdraw(10000);
console.log(JSON.stringify(account4));
account1.withdraw(10000);
console.log(JSON.stringify(account1));
for (key in account1){
    console.log(key);  // variables
    console.log(account1[key]); // values
}