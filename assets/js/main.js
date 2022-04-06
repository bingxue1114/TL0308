function HowLongSince(startyear, startmonth, startdate) {
    var DaysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var today = new Date()
    var thisyear = today.getFullYear();
    var thismonth = today.getMonth();
    var thisdate = today.getDate();
    mstart = new Date(startyear, startmonth, 1);
    mend = new Date(thisyear, thismonth, 1);
    ydiff = thisyear - mstart.getFullYear();
    mdiff = thismonth - mstart.getMonth();
    days1 = (mstart - new Date(startyear, startmonth - 1, startdate)) / (24 * 60 * 60 * 1000) - 1;
    days2 = (new Date(thisyear, thismonth, thisdate) - mend) / (24 * 60 * 60 * 1000) + 1;
    dayst = days1 + days2;
    if (dayst >= DaysInMonth[startmonth - 1]) {
        mdiff += 1;
        dayst -= DaysInMonth[startmonth - 1];
    }
    if (ydiff == 0 && mdiff == 0 && dayst == 0)
        message = "今天";
    else {
        if (mdiff > 11) { mdiff = 0;
            ydiff++; }
        if (mdiff < 0) { mdiff = mdiff + 12;
            ydiff--; }
        message = (ydiff != 0 ? ydiff + " 年" : "");
        message += (mdiff != 0 ? " " + mdiff + " 個月" : "");
        if (ydiff != 0 && mdiff != 0) message += "又";
        message += (dayst != 0 ? " " + dayst + " 天" : "");
    }
    return message;
}