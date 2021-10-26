
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
    return outputString
}