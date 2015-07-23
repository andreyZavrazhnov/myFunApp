"use strict";

app.filter('ageFilter', function () {
    return function (birthday) {
        if (!birthday) {
            return "";
        }
        var date = new Date(birthday);
        var ageDifMs = Date.now() - date.getTime();
        // miliseconds from epoch
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
});


