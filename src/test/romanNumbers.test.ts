import {printRomanNumber} from "../main/RomanNumbers";

describe('romanNumbers',()=>{
    it('given number should output a roman number',()=>{
        expect(printRomanNumber(1)).toBe("I")
    })
})

