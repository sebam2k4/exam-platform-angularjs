angular.module('RouteControllers', [])

//parent controller
// .controller('ParentController', function($scope) {
//   $scope.name = 'Sebastian';
// })

// Navigation Controller
.controller('NavController' , function($scope,) {

})

// ngView controllers
.controller('HomeController', function($scope,) {
    $scope.pageClass = 'page-home';
    $scope.heading = 'Validating Your Skills';
    $scope.subheading = 'Expert Examination Platform';
})
.controller('Page1Controller', function($scope) {
    $scope.pageClass = 'page-page1';
    $scope.heading = 'Page 1';
    $scope.subheading = 'Subheading of Page 1';
})
.controller('Page2Controller', function($scope) {
    $scope.pageClass = 'page-exams';
    $scope.heading = 'Exams';
    $scope.subheading = 'Test Your Super Powers';

})
