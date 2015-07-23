"use strict";

app.controller('EditCustomerCtrl', function ($scope, $routeParams, $location, CustomerDataService) {

    var id = $routeParams.id;
    $scope.customer = CustomerDataService.getCustomerById(id);

    $scope.submitAction = function() {
        CustomerDataService.updateCustomer($scope.customer);
        goToListView();
    };

    $scope.cancelAction = function() {
        goToListView();
    };

    var goToListView = function() {
        $location.path('/customers');
    };
});
