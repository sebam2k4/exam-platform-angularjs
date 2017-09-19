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
  .controller('PageExamsController', function ($scope, $http, HideNav) {
    $scope.pageClass = '';
    $scope.heading = 'Test Your Super Powers';
    $scope.hideNav = HideNav;

    $scope.examList = [
      { name: 'Sample Coding Exam', provider: 'Code Institute', path: '#', image: 'img/300x200.png' },
      { name: 'Calculus', provider: 'The Mathmagicians', path: '#', image: 'img/300x200.png' },
      { name: 'Python', provider: 'The Monty Snake?', path: '#', image: 'img/300x200.png' },
      { name: 'JavaScript Basics', provider: 'Code Institute', path: '#', image: 'img/300x200.png' },
      { name: 'Routing & Switching', provider: 'Cisco', path: '#', image: 'img/300x200.png' },
      { name: 'Office365', provider: 'Cool guys at Microsoft', path: '#', image: 'img/300x200.png' },
      { name: 'Machine Code', provider: 'CPU', path: '#', image: 'img/300x200.png' },
      { name: 'Debugging', provider: 'Rubber Duckie', path: '#', image: 'img/300x200.png' },
      { name: 'Proper Etiquetter', provider: 'Your Aunt Mary', path: '#', image: 'img/300x200.png' }
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