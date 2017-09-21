angular.module('examApp', ['ngRoute', 'AppRouteControllers', 'AppDirectives', 'ngAnimate', 'ui.materialize'])
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

  // SERVICES:
  // testing disappearing navigation on button click & toggle
  .factory('HideNav', function () {
    return { examInProgress: '' };
  })

  .factory('ExamList', function(){
    return [
        { 
          examId: '1',
          name: 'Sample Coding Exam',
          provider: 'Code Institute',
          path: 'exams/exam-info',
          image: 'img/300x200.png',
          type: 'coding' 
        },
        { examId: '2', name: 'Calculus', provider: 'The Mathmagicians', path: 'exams/exam-info', image: 'img/300x200.png', type: 'math' },
        { examId: '3', name: 'Python', provider: 'The Monty Snake?', path: 'exams/exam-info', image: 'img/300x200.png', type: 'coding' },
        { examId: '4', name: 'JavaScript Basics', provider: 'Code Institute', path: 'exams/exam-info', image: 'img/300x200.png', type: 'coding' },
        { examId: '5', name: 'Routing & Switching', provider: 'Cisco', path: 'exams/exam-info', image: 'img/300x200.png', type: 'it_tech' },
        { examId: '6', name: 'Office365', provider: 'Cool guys at Microsoft', path: 'exams/exam-info', image: 'img/300x200.png', type: 'productivity' },
        { examId: '7', name: 'Machine Code', provider: 'CPU', path: 'exams/exam-info', image: 'img/300x200.png', type: 'coding' },
        { examId: '8', name: 'Debugging', provider: 'Rubber Duckie', path: 'exams/exam-info', image: 'img/300x200.png', type: 'coding' },
        { examId: '9', name: 'Proper Etiquetter', provider: 'Your Aunt Mary', path: 'exams/exam-info', image: 'img/300x200.png', type: 'other' }
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