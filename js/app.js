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
  // needed to pass either 'true' or 'false' value from ng-view controllers to trigger ng-hide in HideController.
  .factory('HideNav', function () {
    return { examInProgress: '' };
  })

  // Exam list in object array. (Want to keep the list and exam data seperate. Both could be json though, loaded from external file.)
  .factory('ExamList', function(){
    return [
        { 
          examId: '1',
          name: 'Sample Coding Exam',
          provider: 'Code Institute',
          path: 'exams/exam-info',
          image: 'img/300x200.png',
          addedDate: '2017-09-22',
          type: 'coding' 
        },
        { examId: '2', name: 'Calculus', provider: 'The Mathmagicians', path: 'exams/exam-info', image: 'img/300x200.png', addedDate: '2017-03-01', type: 'math' },
        { examId: '3', name: 'Python', provider: 'The Monty Snake?', path: 'exams/exam-info', image: 'img/300x200.png', addedDate: '2017-04-23', type: 'coding' },
        { examId: '4', name: 'JavaScript Basics', provider: 'Code Institute', path: 'exams/exam-info', image: 'img/300x200.png', addedDate: '2017-08-12', type: 'coding' },
        { examId: '5', name: 'Routing & Switching', provider: 'Cisco', path: 'exams/exam-info', image: 'img/300x200.png', addedDate: '2017-03-27', type: 'it_tech' },
        { examId: '6', name: 'Office365', provider: 'Cool guys at Microsoft', path: 'exams/exam-info', image: 'img/300x200.png', addedDate: '2017-07-06', type: 'productivity' },
        { examId: '7', name: 'Secutity', provider: 'CompTIA', path: 'exams/exam-info', image: 'img/300x200.png', addedDate: '2017-09-21', type: 'it_tech' },
        { examId: '8', name: 'Debugging', provider: 'Rubber Duckie', path: 'exams/exam-info', image: 'img/300x200.png', addedDate: '2017-09-16', type: 'coding' },
        { examId: '9', name: 'Proper Etiquette', provider: 'Your Aunt Mary', path: 'exams/exam-info', image: 'img/300x200.png', addedDate: '2017-09-02', type: 'other' },
        { examId: '10', name: 'Machine Code', provider: 'CPU', path: 'exams/exam-info', image: 'img/300x200.png', addedDate: '2017-08-11', type: 'coding' },
        { examId: '11', name: 'UE4', provider: 'Unreal', path: 'exams/exam-info', image: 'img/300x200.png', addedDate: '2017-05-23', type: 'other' },
        { examId: '12', name: 'Six Sigma', provider: 'Black Belt Coach', path: 'exams/exam-info', image: 'img/300x200.png', addedDate: '2017-02-28', type: 'productivity' }
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