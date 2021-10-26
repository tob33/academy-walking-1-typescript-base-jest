import {printRomanNumber} from "../main/RomanNumbers";

describe('romanNumbers',()=>{
    it.each([
        [1,"I"],
        [2,"II"],
        [3,"III"],
        [4,"IV"],
    ])('given number %i should output a roman number %s',(value:number, expected:string)=>{
        expect(printRomanNumber(value)).toBe(expected)
    })
  
})