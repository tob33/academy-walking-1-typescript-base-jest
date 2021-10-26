import {printRomanNumber} from "../main/RomanNumbers";

describe('romanNumbers',()=>{
    it('given number 1 should output a roman number',()=>{
        expect(printRomanNumber(1)).toBe("I")
    })
    it('given number 2 should output a roman number',()=>{ 
    expect(printRomanNumber(2)).toBe("II")
    })
})