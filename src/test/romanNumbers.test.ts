import {printRomanNumber} from "../main/RomanNumbers";

describe('romanNumbers',()=>{
    it('given number 1 should output a roman number I',()=>{
        expect(printRomanNumber(1)).toBe("I")
    })
    it('given number 2 should output a roman number II',()=>{
    expect(printRomanNumber(2)).toBe("II")
    })
    it('given number 3 should output a roman number III',()=>{
    expect(printRomanNumber(3)).toBe("III")
    })
})