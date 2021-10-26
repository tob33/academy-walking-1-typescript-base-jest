
export function printRomanNumber(num:number):string{
    let outputString:string = ""
    if(num>0){
        for (let index = 1; index <= num; index++) {
            outputString += "I"
        }
    }
    return outputString
}