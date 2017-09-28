angular.module('examApp', ['ngRoute', 'AppRouteControllers', 'AppDirectives', 'AppServices','ngAnimate', 'ui.materialize'])
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
        templateUrl: "templates/exams.html",
        controller: "PageExamsController"
      })
      .when('/login', {
        templateUrl: "templates/login.html",
        controller: "PageLoginController"
      })
      .when('/register', {
        templateUrl: "templates/register.html",
        controller: "PageRegisterController"
      })
      .when('/exams/exam-info', {
        templateUrl: "templates/exam-info.html",
        controller: "ExamInfo"
      })
      .when('/exams/exam-start', {
        templateUrl: "templates/exam-start.html",
        controller: "ExamStart"
      })
      .when('/exams/exam-inprogress', {
        templateUrl: "templates/exam-inprogress.html",
        controller: "ExamInProgress"
      })
      .otherwise({ redirectTo: '/' });
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