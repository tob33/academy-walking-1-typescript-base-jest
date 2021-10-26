
export function printRomanNumber(num:number):string{
    let outputString:string = ""
    if(num>0 && num <=3){
        for (let index = 1; index <= num; index++) {
            outputString += "I"
        }
    }
    if (num ===4) {
            outputString = "IV"
        }

    if (num > 4 && num <= 8) {
        outputString += "V";
        for (let index = 5; index < num; index++) {
            outputString += "I"
        }
    }

    return outputString
}