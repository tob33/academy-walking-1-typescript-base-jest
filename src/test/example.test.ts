import {BankAccount, IPrinter} from "../main/example";
import {mock} from 'jest-mock-extended'

describe('Bank Account', () => {
    it("should return a header row only for an unused account", () => {
        let printerMock = mock<IPrinter>();
        let account = new BankAccount(printerMock)
        account.printStatement()
        expect(printerMock.print).toHaveBeenCalledWith(["Date || Amount || Balance"])
    })

    it("should update the balance when a deposit is made", () => {
        let printerMock = mock<IPrinter>();
        let account: BankAccount = new BankAccount(printerMock);
        //spyOn(account, "printStatement").and.returnValues()
        account.deposit(1000);
        account.printStatement()
        expect(printerMock.print).toHaveBeenCalledWith(["Date || Amount || Balance", "10/01/2012 || 1000 || 1000"])
    })

    it("should update the balance when a withdrawal is made", () => {
        let printerMock = mock<IPrinter>();
        let account: BankAccount = new BankAccount(printerMock);
        //spyOn(account, "printStatement").and.returnValues()
        account.withdraw(100);
        account.printStatement()
        expect(printerMock.print).toHaveBeenCalledWith(["Date || Amount || Balance", "10/01/2012 || 100 || -100"])
    })
})