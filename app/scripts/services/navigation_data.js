"use strict";

app.factory('NavigationDataService', function () {

    var navigations = [
        {
            customerId: '1',
            page: 'A',
            timestamp: '2013-06-01 10:10:12'
        },
        {
            customerId: '1',
            page: 'B',
            timestamp: '2013-06-01 10:11:12'
        },
        {
            customerId: '1',
            page: 'A',
            timestamp: '2013-06-01 10:12:12'
        },
        {
            customerId: '2',
            page: 'C',
            timestamp: '2013-07-08 09:03:09'
        },
        {
            customerId: '2',
            page: 'A',
            timestamp: '2013-07-08 09:09:09'
        },
        {
            customerId: '2',
            page: 'D',
            timestamp: '2013-07-08 09:19:09'
        },
        {
            customerId: '3',
            page: 'B',
            timestamp: '2013-07-08 09:19:09'
        },
        {
            customerId: '3',
            page: 'A',
            timestamp: '2013-07-08 09:19:10'
        },
        {
            customerId: '4',
            page: 'D',
            timestamp: '2013-07-08 09:19:11'
        },
        {
            customerId: '4',
            page: 'A',
            timestamp: '2013-07-08 09:19:12'
        },
        {
            customerId: '5',
            page: 'X',
            timestamp: '2013-07-08 09:19:13'
        },
        {
            customerId: '5',
            page: 'A',
            timestamp: '2013-07-08 09:19:14'
        },
        {
            customerId: '5',
            page: 'B',
            timestamp: '2013-07-08 09:19:15'
        }
    ];

    // Service implementation
    function getNavigationsByCustomerId(id) {
        var currentCustomerNavigations = [];
        for (var i = 0; i < navigations.length; i++) {
            if (navigations[i].customerId === id) {
                currentCustomerNavigations.push(navigations[i]);
            }
        }
        return currentCustomerNavigations;
    }

    // Public API
    return {
        getNavigationsByCustomerId: getNavigationsByCustomerId
    };
});