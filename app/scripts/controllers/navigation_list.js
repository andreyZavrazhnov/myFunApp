"use strict";

app.controller('NavigationListCtrl', function ($scope, $routeParams, $location, NavigationDataService, CustomerDataService) {

    $scope.predicate = 'timestamp';
    $scope.reverse = false;
    $scope.order = function (predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : true;
        $scope.predicate = predicate;
    };

    var id = $routeParams.id;
    $scope.customer = CustomerDataService.getCustomerById(id);
    $scope.currentCustomerNavis = NavigationDataService.getNavigationsByCustomerId(id);

    $scope.cancelAction = function () {
        goToListView();
    };

    var goToListView = function () {
        $location.path('/customers');
    };
});
