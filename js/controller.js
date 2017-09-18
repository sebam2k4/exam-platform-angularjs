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
  .controller('PageHomeController', function ($scope) {
    $scope.pageClass = '';
    $scope.heading = 'Validating Your Skills';
    $scope.subheading = 'Expert Examination Platform';
    $scope.images = [];
  })
  .controller('PageFaqController', function ($scope) {
    $scope.pageClass = '';
    $scope.heading = 'Page 1';
    $scope.subheading = 'Subheading of Page 1';
  })
  .controller('PagePricingController', function ($scope) {
    $scope.pageClass = '';
    $scope.heading = 'Page 1';
    $scope.subheading = 'Subheading of Page 1';
  })
  .controller('PageExamsController', function ($scope, $http, HideNav) {
    $scope.pageClass = '';
    $scope.heading = 'Exams';
    $scope.subheading = 'Test Your Super Powers';
    $scope.hideNav = HideNav;

    $http({
      method: 'GET',
      url: 'data/exam1.json'
    }).then(function successCallback(response) {
      $scope.exam = response.data;
    },
    function errorCallback(response) {
      console.log("Couldn't load JSON file from /data/");
    });
  })
  .controller('PageLoginController', function ($scope) {
    $scope.pageClass = '';
    $scope.heading = 'Page 1';
    $scope.subheading = 'Subheading of Page 1';
  })