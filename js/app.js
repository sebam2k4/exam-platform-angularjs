angular.module('examApp', ['ngRoute', 'RouteControllers', 'ngAnimate', 'ui.materialize'])
  .config(function ($locationProvider, $routeProvider) {
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


  // testing disappearing navigation on button click & toggle
  .factory('HideNav', function () {
    return { examInProgress: '' };
  })

  // ngView autoscroll delay(due to css transition property) fix:
  // set timeout for scroll-to-top to 0 seconds to remove delay
  .run(function ($rootScope, $timeout, $window) {
    $rootScope.$on('$routeChangeSuccess', function () {
      $timeout(function () {
        $window.scrollTo(0, 0);
      }, 0);
    });
  })