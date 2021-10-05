import {FizzBuzz} from "../main/fizzBuzz";

describe('Fizz test', () => {
    it("should give Fizz when a number can be divided by 3", () => {
        let fizzBuzz: FizzBuzz = new FizzBuzz();
        expect(fizzBuzz.print(3)).toBe("Fizz");
    })
})