// Problem 19
// Counting Sundays

function isLeapYear(year) {
    if (year % 4 !== 0) return false;
    if (year % 100 !== 0) return true;
    return year % 400 === 0;
}

function countSundaysOnFirstOfMonth(startYear, endYear) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dayOfWeek = 1;
    let sundaysCount = 0;


    dayOfWeek = (dayOfWeek + 365) % 7;

    for (let year = startYear; year <= endYear; year++) {
        for (let month = 0; month < 12; month++) {
            if (dayOfWeek === 0) {
                sundaysCount++;
            }

            if (month === 1 && isLeapYear(year)) {
                dayOfWeek = (dayOfWeek + 29) % 7;
            } else {
                dayOfWeek = (dayOfWeek + daysInMonth[month]) % 7;
            }
        }
    }

    return sundaysCount;
}

console.log(countSundaysOnFirstOfMonth(1901, 2000));
