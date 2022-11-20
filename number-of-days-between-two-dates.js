 var daysBetweenDates = function(date1, date2) {
    const days = (new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24)
    return Math.round(Math.abs(days))
};
console.log(daysBetweenDates("2019-06-29", "2017-06-30"));