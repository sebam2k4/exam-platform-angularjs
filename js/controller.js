angular.module('RouteControllers', [])

  //parent controller
  // .controller('ParentController', function($scope) {
  //   $scope.name = 'Sebastian';
  // })

  // Navigation Controller
  .controller('NavController', function ($scope, HideNav) {
    $scope.hideNav = HideNav;
  })

  // ngView controllers
  .controller('HomeController', function ($scope) {
    $scope.pageClass = 'page-home';
    $scope.heading = 'Validating Your Skills';
    $scope.subheading = 'Expert Examination Platform';
    $scope.images = [];
  })
  .controller('Page1Controller', function ($scope) {
    $scope.pageClass = 'page-page1';
    $scope.heading = 'Page 1';
    $scope.subheading = 'Subheading of Page 1';
  })
  .controller('Page2Controller', function ($scope, $http, HideNav) {
    $scope.pageClass = 'page-exams';
    $scope.heading = 'Exams';
    $scope.subheading = 'Test Your Super Powers';
    $scope.hideNav = HideNav;

    $http({
      method: 'GET',
      url: '/data/exam1.json'
    }).then(function successCallback(response) {
      $scope.exam = response.data;
    },
    function errorCallback(response) {
      console.log("Couldn't load JSON file");
    });



  })
