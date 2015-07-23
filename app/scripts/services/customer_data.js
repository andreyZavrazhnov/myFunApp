"use strict";

app.factory('CustomerDataService', function () {

    var customers = [
        {
            id: '1',
            firstname: 'Peter',
            lastname: 'Smith',
            birthday: '1996-10-12',
            gender: 'm',
            lastContact: '2013-06-01',
            lifetimeValue: '191,12'
        },
        {
            id: '2',
            firstname: 'Anna',
            lastname: 'Hopp',
            birthday: '1987-05-03',
            gender: 'w',
            lastContact: '2013-07-08',
            lifetimeValue: '50,99'
        },
        {
            id: '3',
            firstname: 'Christian',
            lastname: 'Cox',
            birthday: '1991-02-21',
            gender: 'm',
            lastContact: '2013-08-01',
            lifetimeValue: '0'
        },
        {
            id: '4',
            firstname: 'Roxy',
            lastname: 'Fox',
            birthday: '1979-06-30',
            gender: 'w',
            lastContact: '2012-01-29',
            lifetimeValue: '213,12'
        },
        {
            id: '5',
            firstname: 'Eric',
            lastname: 'Adam',
            birthday: '1969-11-21',
            gender: 'm',
            lastContact: '2013-03-18',
            lifetimeValue: '1019,91'
        }
    ];

    // Service implementation
    function getCustomers() {
        // not to expose the internal data structure
        return angular.copy(customers);
    }

    function getCustomerById(id) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                // not to expose the internal data structure
                return angular.copy(customers[i]);
            }
        }
        return null;
    }

    function storeCustomer(customer) {
        customers.push(customer);
    }

    function updateCustomer(customer) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === customer.id) {
                angular.extend(customers[i], customer);
            }
        }
    }

    function deleteCustomerById(id) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                customers.splice(i, 1);
            }
        }
    }

    // Public API
    return {
        getCustomerById: getCustomerById,
        getCustomers: getCustomers,
        storeCustomer: storeCustomer,
        updateCustomer: updateCustomer,
        deleteCustomerById: deleteCustomerById
    };
});