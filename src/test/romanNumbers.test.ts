import {printRomanNumber} from "../main/RomanNumbers";

describe('romanNumbers',()=>{
    it.each([
        [1,"I"],
        [2,"II"],
        [3,"III"],
        [4,"IV"],
        [5,"V"],
        [6,"VI"],
        [7,"VII"],
        [8,"VIII"],
        [9,"IX"],
        [10,"X"],
        [11,"XI"],
        [12,"XII"],
        [13,"XIII"],
        [14,"XIV"],
        [15,"XV"],
        [16,"XVI"],
        [17,"XVII"],
        [18,"XVIII"],
        [19,"XIX"],
        [20,"XX"],
    ])('given number %i should output a roman number %s',(value:number, expected:string)=>{
        expect(printRomanNumber(value)).toBe(expected)
    })
  
})