import {LeapYear} from "../main/example";

describe('whether a year is a leapYear', () => {
    describe('For an atypical year which is divisible by 4 and 100, should always return false', () => {
        it.each`
        input | output | description
        ${100} |${false} | ${"year 100 is not a leap year"}  
        ${200} |${false} | ${"year 200 is not a leap year"}  
        ${1900} |${false} | ${"year 1900 is not a leap year"}  
        `(
            "should output $output when input is $input $description",
            ({ input, output}) => {

                let leapYear: LeapYear = new LeapYear();
                expect(leapYear.isLeapYear(input)).toBe(output);
            }
        );
    })

    describe('For a typical year which is not divisible by 4, should always return false', () => {
        it.each`
        input | output | description
        ${15} |${false} | ${"year 15 is not a leap year"}  
        ${17} |${false} | ${"year 17 is not a leap year"}  
        ${2001} |${false} | ${"year 2001 is not a leap year"}  
        `(
            "should output $output when input is $input $description",
            ({ input, output}) => {

                let leapYear: LeapYear = new LeapYear();
                expect(leapYear.isLeapYear(input)).toBe(output);
            }
        );
    })

    describe('For a typical leap year which is divisible by 4, should always return true', () => {
        it.each`
            input | output | description
            ${16} |${true} | ${"year 16 is a leap year"}  
            ${1996} |${true} | ${"year 1996 is a leap year"}  
        `(
            "should output $output when input is $input $description",
            ({ input, output}) => {

                let leapYear: LeapYear = new LeapYear();
                expect(leapYear.isLeapYear(input)).toBe(output);
            }
        );
    })

    describe('For an atypical leap year which is divisible by 4 and 400, should always return true', () => {
        it.each`
            input | output | description
            ${400} |${true} | ${"year 400 is a leap year"}  
            ${1600} |${true} | ${"year 1600 is a leap year"} 
            ${2000} |${true} | ${"year 2000 is a leap year"} 
        `(
            "should output $output when input is $input $description",
            ({ input, output}) => {

                let leapYear: LeapYear = new LeapYear();
                expect(leapYear.isLeapYear(input)).toBe(output);
            }
        );
    })
})