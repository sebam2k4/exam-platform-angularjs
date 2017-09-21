angular.module('AppDirectives', [])
  .directive('header', function() {
    return {
      restrict: 'A',    // A -> attribute
      templateUrl: 'templates/directives/header.html'
    };
  })