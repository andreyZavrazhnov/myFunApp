"use strict";

app.controller('NewCustomerCtrl', function ($scope, $location, CustomerDataService) {

    var id = (new Date()).getTime().toString();

    $scope.customer = {
        id: id
    };

    $scope.submitAction = function () {
        CustomerDataService.storeCustomer($scope.customer);
        goToListView();
    };

    $scope.cancelAction = function () {
        goToListView();
    };

    var goToListView = function () {
        $location.path('/customers');
    };
});
