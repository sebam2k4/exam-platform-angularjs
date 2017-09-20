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
        templateUrl: "templates/exams.html",
        controller: "PageExamsController"
      })
      .when('/login', {
        templateUrl: "templates/login.html",
        controller: "PageLoginController"
      })
      .when('/exams/exam-info', {
        templateUrl: "templates/exam-info.html",
        controller: "ExamInfo"
      })
      .otherwise({ redirectTo: '/' });
  })

  // SERVICES:
  // testing disappearing navigation on button click & toggle
  .factory('HideNav', function () {
    return { examInProgress: '' };
  })

  .factory('ExamList', function(){
    return [
        { 
          name: 'Sample Coding Exam',
          provider: 'Code Institute',
          path: 'exams/exam-info',
          image: 'img/300x200.png',
          type: 'coding' 
        },
        { name: 'Calculus', provider: 'The Mathmagicians', path: '#', image: 'img/300x200.png', type: 'math' },
        { name: 'Python', provider: 'The Monty Snake?', path: '#', image: 'img/300x200.png', type: 'coding' },
        { name: 'JavaScript Basics', provider: 'Code Institute', path: '#', image: 'img/300x200.png', type: 'coding' },
        { name: 'Routing & Switching', provider: 'Cisco', path: '#', image: 'img/300x200.png', type: 'it_tech' },
        { name: 'Office365', provider: 'Cool guys at Microsoft', path: '#', image: 'img/300x200.png', type: 'productivity' },
        { name: 'Machine Code', provider: 'CPU', path: '#', image: 'img/300x200.png', type: 'coding' },
        { name: 'Debugging', provider: 'Rubber Duckie', path: '#', image: 'img/300x200.png', type: 'coding' },
        { name: 'Proper Etiquetter', provider: 'Your Aunt Mary', path: '#', image: 'img/300x200.png', type: 'other' }
      ];
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