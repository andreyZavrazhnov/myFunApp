"use strict";

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/customers', {
            templateUrl: 'templates/customer_list.html',
            controller: 'CustomerListCtrl'
        })
        .when('/customers/new', {
            templateUrl: 'templates/customer_form.html',
            controller: 'NewCustomerCtrl'
        })
        .when('/customers/:id/edit', {
            templateUrl: 'templates/customer_form.html',
            controller: 'EditCustomerCtrl'
        })
        .when('/customers/:id/navi', {
            templateUrl: 'templates/navigation_list.html',
            controller: 'NavigationListCtrl'
        })
        /* Default route */
        .otherwise({
            redirectTo: '/customers'
        });
});
