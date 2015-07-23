"use strict";

app.controller('CustomerListCtrl', function ($scope, $location, CustomerDataService) {

    $scope.predicate = 'lastname';
    $scope.reverse = false;
    $scope.order = function (predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : true;
        $scope.predicate = predicate;
    };

    $scope.customers = CustomerDataService.getCustomers();

    $scope.goTo = function (path) {
        $location.path(path);
    };

    $scope.delete = function (id) {
        CustomerDataService.deleteCustomerById(id);
        $scope.customers = CustomerDataService.getCustomers();
    };

});
