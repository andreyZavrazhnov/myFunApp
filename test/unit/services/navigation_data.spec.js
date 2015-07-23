'use strict';

describe('Service: NavigationDataService', function () {

    var NavigationDataService;

    // load the application module
    beforeEach(module('app'));

    // get a reference to the service
    beforeEach(inject(function (_NavigationDataService_) {
        NavigationDataService = _NavigationDataService_;
    }));

    describe('Public API', function () {
        it('should include a getNavigationsByCustomerId() function', function () {
            expect(NavigationDataService.getNavigationsByCustomerId).toBeDefined();
        });

    });

    describe('Public API usage', function () {
        describe('getNavigationsByCustomerId()', function () {
            it('should return the proper navigations (valid id)', function () {
                var id = '4',
                    navigations = NavigationDataService.getNavigationsByCustomerId(id);
                expect(navigations).toEqual([{
                    customerId: '4',
                    page: 'D',
                    timestamp: '2013-07-08 09:19:11'
                }, {
                    customerId: '4',
                    page: 'A',
                    timestamp: '2013-07-08 09:19:12'
                }]);
            });

            it('should return [] (invalid id)', function () {
                var id = 'test',
                    navigations = NavigationDataService.getNavigationsByCustomerId(id);
                expect(navigations).toEqual([]);
            });
        });
    });
});
