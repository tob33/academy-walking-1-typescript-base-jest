interface AccountService{
    deposit(amount: number): void;
     withdraw(amount: number): void;
     printStatement() : void;
}

export interface IPrinter {
    print(row:string[]):void
}

export class BankAccount implements AccountService {
    printer:IPrinter;
    private balance :number =0;
    private amount :number =0;

    constructor(printer:IPrinter) {
        this.printer = printer
    }

    deposit(amount: number): void{
        this.balance = this.balance + amount;
        this.amount = amount;
    };

    withdraw(amount: number): void{

    };
    printStatement() : void{
        const statementLine = "10/01/2012" + " || " + this.amount + " || " + this.balance;
        this.printer.print(["Date || Amount || Balance", statementLine])
    };
}