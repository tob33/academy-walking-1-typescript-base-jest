import {Fibonacci} from "../main/fibonacci";

describe('For a position, should return the correct fibonacci number', () => {
    it.each`
    position | output 
    ${0} |${0} 
    ${1} |${1} 
    ${2} |${1} 
    ${3} |${2} 
    ${4} |${3} 
    ${5} |${5} 
    ${6} |${8} 
    ${7} |${13} 
    ${8} |${21} 
    ${9} |${34} 
    ${10} |${55} 
    ${11} |${89} 
    ${12} |${144} 
    ${13} |${233} 
    ${14} |${377} 
    ${15} |${610} 
    ${16} |${987} 
    ${17} |${1597} 
    `(
        "should return $output when position is $position in the fibonacci series",
        ({ position, output}) => {

            let fibonacci: Fibonacci = new Fibonacci();
            expect(fibonacci.getOutput(position)).toBe(output);
        }
    );
})