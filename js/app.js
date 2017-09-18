angular.module('examApp', ['ngRoute', 'RouteControllers', 'ngAnimate', 'ui.materialize'])
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true); // Enable href routing without hashes

    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        controller: "PageHomeController"
      })
      .when('/faq', {
        templateUrl: "templates/faq.html",
        controller: "PageFaqController"
      })
      .when('/pricing', {
        templateUrl: "templates/pricing.html",
        controller: "PagePricingController"
      })
      .when('/exams', {
        templateUrl: "templates/exams-list.html",
        controller: "PageExamsController"
      })
      .when('/login', {
        templateUrl: "templates/login.html",
        controller: "PageLoginController"
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