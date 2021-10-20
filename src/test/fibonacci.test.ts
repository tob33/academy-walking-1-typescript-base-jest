import {Fibonacci} from "../main/fibonacci";

describe('For a position, should return the correct fibonacci number', () => {
    it.each`
    position | output 
    ${0} |${0} 
    ${1} |${1} 
    ${2} |${1} 
    `(
        "should return $output when position is $position in the fibonacci series",
        ({ position, output}) => {

            let fibonacci: Fibonacci = new Fibonacci();
            expect(fibonacci.getOutput(position)).toBe(output);
        }
    );
})