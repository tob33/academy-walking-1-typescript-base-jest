export class LeapYear {
    isLeapYear(year: number) {
        if (LeapYear.isAnAtypicalCommonYear(year))
        {
            return LeapYear.isAnAtypicalLeapYear(year);

        }
        return LeapYear.isALeapYear(year);
    }

    private static isALeapYear(year: number) {
        return year % 4 === 0;
    }

    private static isAnAtypicalCommonYear(year: number) {
        return year % 100 === 0;
    }

    private static isAnAtypicalLeapYear(year: number) {
        return year % 400 === 0;
    }
}