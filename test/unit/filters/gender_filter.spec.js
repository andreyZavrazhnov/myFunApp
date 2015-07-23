'use strict';

describe('Filter: genderFilter', function () {

    var filter;

    // load the application module
    beforeEach(module('app'));

    // get a reference to the filter
    beforeEach(inject(function ($filter) {
        filter = $filter('genderFilter');
    }));


    describe('Filter genderFilter when given a "w", it', function () {
        it('should transform it to the "Female', function () {
            expect(filter('w')).toBe('Female');
        });
    });
    describe('Filter genderFilter when given a "m", it', function () {
        it('should transform it to the "Male', function () {
            expect(filter('m')).toBe('Male');
        });
    });
    describe('Filter genderFilter when given null, it', function () {
        it('should handle it to empty string', function () {
            expect(filter(null)).toBe("");
        });
    });
});
