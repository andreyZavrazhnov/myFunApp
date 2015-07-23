'use strict';

describe('Filter: ageFilter', function () {

    var filter;

    // load the application module
    beforeEach(module('app'));

    // get a reference to the filter
    beforeEach(inject(function ($filter) {
        filter = $filter('ageFilter');
    }));


    describe('Filter ageFilter when given a birthday, it', function () {
        it('should handle format yyyy-mm-dd  correctly', function () {
            expect(filter('1996-10-12')).toBe(18);
        });
    });
    describe('Filter ageFilter when given null, it', function () {
        it('should handle it to empty string', function () {
            expect(filter(null)).toBe("");
        });
    });
});
