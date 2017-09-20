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

  .controller('PageExamsController', function ($scope, ExamList) {
    $scope.pageClass = '';
    $scope.heading = 'Test Your Super Powers';

    $scope.examList = ExamList;


    
  })

  .controller('PageLoginController', function ($scope) {
    $scope.pageClass = '';
    $scope.heading = 'Access Your Dashboard';
  })

  .controller('ExamInfo', function ($scope, ExamList) {
    $scope.examList = ExamList;
    var examName = $scope.examList[0].name;
    $scope.heading = examName;
    // how to select the current exam's data from the ExamList Service?
  })

  .controller('ExamStart', function ($scope, ExamList, HideNav) {
    $scope.hideNav = HideNav;
    $scope.examList = ExamList;
  })

  .controller('ExamInProgress', function ($scope, ExamList, HideNav, $http) {
    $scope.hideNav = HideNav;
    $scope.examList = ExamList;

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