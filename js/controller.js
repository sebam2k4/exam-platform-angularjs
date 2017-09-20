angular.module('RouteControllers', [])

  //parent controller
  // .controller('ParentController', function($scope) {
  //   $scope.name = 'Sebastian';
  // })

  // Navigation Controller
  .controller('HideController', function ($scope, HideNav) {
    $scope.hideNav = HideNav;
  })

  // ngView controllers
  .controller('PageHomeController', function ($scope, $rootScope) {
    $scope.pageClass = '';
    $scope.heading = 'Validating Your Skills';
    $rootScope.subheading = 'Expert Examination Platform'
    $scope.images = [];
  })

  .controller('PageFaqController', function ($scope) {
    $scope.pageClass = '';
    $scope.heading = 'Want Some Answers?!?';
  })

  .controller('PagePricingController', function ($scope) {
    $scope.pageClass = '';
    $scope.heading = 'Subscription Options';
  })

  .controller('PageExamsController', function ($scope, $http) {
    $scope.pageClass = '';
    $scope.heading = 'Test Your Super Powers';

    $scope.examList = [
      { name: 'Sample Coding Exam', provider: 'Code Institute', path: 'exams/exam-info', image: 'img/300x200.png', type: 'coding' },
      { name: 'Calculus', provider: 'The Mathmagicians', path: '#', image: 'img/300x200.png', type: 'math' },
      { name: 'Python', provider: 'The Monty Snake?', path: '#', image: 'img/300x200.png', type: 'coding' },
      { name: 'JavaScript Basics', provider: 'Code Institute', path: '#', image: 'img/300x200.png', type: 'coding' },
      { name: 'Routing & Switching', provider: 'Cisco', path: '#', image: 'img/300x200.png', type: 'it_tech' },
      { name: 'Office365', provider: 'Cool guys at Microsoft', path: '#', image: 'img/300x200.png', type: 'productivity' },
      { name: 'Machine Code', provider: 'CPU', path: '#', image: 'img/300x200.png', type: 'coding' },
      { name: 'Debugging', provider: 'Rubber Duckie', path: '#', image: 'img/300x200.png', type: 'coding' },
      { name: 'Proper Etiquetter', provider: 'Your Aunt Mary', path: '#', image: 'img/300x200.png', type: 'other' }
      ];

    $http({
      method: 'GET',
      url: 'data/exam1.json'
    }).then(function successCallback(response) {
      $scope.exam = response.data;
    },
    function errorCallback(response) {
      console.log("Couldn't load JSON file from ./data/");
    });
  })

  .controller('PageLoginController', function ($scope) {
    $scope.pageClass = '';
    $scope.heading = 'Access Your Dashboard';
  })

  .controller('ExamInfo', function ($scope, HideNav) {
    $scope.hideNav = HideNav;
  })