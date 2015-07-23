'use strict';

describe('Service: CustomerDataService', function () {

    var CustomerDataService;

    // load the application module
    beforeEach(module('app'));

    // get a reference to the service
    beforeEach(inject(function (_CustomerDataService_) {
        CustomerDataService = _CustomerDataService_;
    }));

    describe('Public API', function () {
        it('should include a getCustomerById() function', function () {
            expect(CustomerDataService.getCustomerById).toBeDefined();
        });

        it('should include a getCustomers() function', function () {
            expect(CustomerDataService.getCustomers).toBeDefined();
        });

        it('should include a storeCustomer() function', function () {
            expect(CustomerDataService.storeCustomer).toBeDefined();
        });

        it('should include a updateCustomer() function', function () {
            expect(CustomerDataService.updateCustomer).toBeDefined();
        });

        it('should include a deleteCustomerById() function', function () {
            expect(CustomerDataService.deleteCustomerById).toBeDefined();
        });
    });

    describe('Public API usage', function () {
        describe('getCustomerById()', function () {
            it('should return the proper customer object (valid id)', function () {
                var id = '3',
                    customer = CustomerDataService.getCustomerById(id);
                expect(customer.firstname).toBe('Christian');
            });

            it('should return null (invalid id)', function () {
                var id = 'test',
                    customer = CustomerDataService.getCustomerById(id);
                expect(customer).toBeNull();
            });
        });

        describe('getCustomers()', function () {
            it('should return a proper array of customer objects', function () {
                var customers = CustomerDataService.getCustomers();
                expect(customers.length).toBe(5);
            });
        });

        describe('storeCustomer()', function () {
            it('should properly store the passed customer object', function () {
                var beforeCount = CustomerDataService.getCustomers().length;

                // store an example customer
                var customer = storeExampleCustomer();

                expect(CustomerDataService.getCustomers().length).toBe(beforeCount + 1);
                expect(CustomerDataService.getCustomerById(customer.id)).not.toBeNull();
            });
        });

        describe('updateCustomer()', function () {
            it('should properly update the customer object', function () {
                // store an example customer
                var customer = storeExampleCustomer();

                // change it
                customer.firstname = 'TEST';

                // update the example customer
                CustomerDataService.updateCustomer(customer);

                expect(CustomerDataService.getCustomerById(customer.id).firstname).toBe(customer.firstname);
            });
        });

        describe('deleteCustomerById()', function () {
            it('should properly delete the customer object with the passed id', function () {
                // store an example customer
                var customer = storeExampleCustomer();

                // delete the example customer
                CustomerDataService.deleteCustomerById(customer.id);

                expect(CustomerDataService.getCustomerById(customer.id)).toBeNull();
            });
        });
    });

    // Helper functions
    var storeExampleCustomer = function () {
        var id = '8',
            customer = {
                id: id,
                firstname: 'Andre',
                lastname: 'Wins',
                birthday: '1996-09-13',
                gender: 'm',
                lastContact: '2013-03-04',
                lifetimeValue: '146,13'
            };

        CustomerDataService.storeCustomer(customer);

        return customer;
    };

});
