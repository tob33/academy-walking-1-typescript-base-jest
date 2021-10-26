
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

    if (num >= 5 && num <= 8) {
        outputString += "V";
        for (let index = 5; index < num; index++) {
            outputString += "I"
        }
    }

    if(num>=9 && num <=13){
        outputString += "X";
        if(num===9){
            outputString="IX"
        }else{
            for (let index = 11; index <= num; index++) {
                outputString += "I"
            }
        } 
    }

    if (num >= 14 && num <= 19){
        outputString += "X";
        outputString += printRomanNumber(num-10);
    }

    return outputString
}