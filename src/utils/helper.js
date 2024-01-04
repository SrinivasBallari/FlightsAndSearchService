function compareTime(datetimeString1 , datetimeString2){
    const time1 = new Date(datetimeString1);
    const time2 = new Date(datetimeString2);

    return time1 < time2;
}

module.exports = {
    compareTime
}