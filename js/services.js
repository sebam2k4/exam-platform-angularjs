angular.module('AppServices', [])

  // SERVICES:
  // testing disappearing navigation on button click & toggle
  // needed to pass either 'true' or 'false' value from ng-view controllers to trigger ng-hide in HideController.
  .factory('HideNav', function () {
    return { 
      examInProgress: '',
      removeNav: '' 
    };
  })

  // pass data collected in registration form to other views. Includes some default values for placeholder if user hasn't done the form.
  .factory('UserDetails', function () {
    return {
      userName: 'Username',
      accountType: 'User Type'
    };
  })

  // Get Exam list from json
  .factory('ExamList', function ($http) {
    return {
      getExamList: function(url) {
        return $http.get(url) // return promise to controller
      }
    };
  })
  

  .factory('ExamMetrics', function() {
    return {
      correctCount: null,
      scorePercent: '',
      scoreResult: '',
    };
  })

  // Get Exam Data from json
  .factory('ExamData', function ($http) {
    return {
      getExamData: function(url) {
        return $http.get(url) // return promise to controller
      }
    };
  })
