"use strict";

app.filter('genderFilter', function () {
    return function (gender) {
        if (gender === 'm') {
            return 'Male';
        } else if (gender === 'w') {
            return 'Female';
        }
        return "";
    };
});


