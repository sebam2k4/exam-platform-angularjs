angular.module('examApp', ['ngRoute', 'RouteControllers', 'ngAnimate', 'ui.materialize'])
.config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true); // Enable href routing without hashes

    $routeProvider
    .when('/', {
    templateUrl: "templates/home.html",
    controller: "HomeController"
    })
    .when('/page1', {
        templateUrl: "templates/page1.html",
        controller: "Page1Controller"
    })
    .when('/exams', {
        templateUrl: "templates/page2.html",
        controller: "Page2Controller"
    })
    .otherwise({ redirectTo: '/' });
})