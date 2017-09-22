angular.module('AppRouteControllers', [])

  //parent controller
  // .controller('ParentController', function($scope) {
  //   $scope.name = 'Sebastian';
  // })

  // Hide Controller outside of ngView
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
    // run on validated login form submit:
    $scope.submitForm = function(isValid) {
      if (isValid) {
        //$scope.submitted = true;
        console.log('This Login form validated'); // Test
        $scope.validated = true; // show message on page
      }
    }
  })

  .controller('PageRegisterController', function ($scope) {
    $scope.pageClass = '';
    $scope.heading = 'Register a New Account';
    $scope.openModal = false;
    $scope.countries = ['United Kingdom', 'Ireland', 'USA', 'Spain', 'Sweden', 'Poland', 'Norway']
    // run on validated register form submit:
    $scope.submitForm = function(isValid) {
      if (isValid) {
        //$scope.submitted = true;
        console.log('This Registration form validated!'); // Test
        $scope.validated = true;  // show message on page
        $scope.openModal = true;  // trigger modal
      }
    }

    // Required for MaterializeCSS input-date directive
    var currentTime = new Date();
    $scope.currentTime = currentTime;
    $scope.month = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    $scope.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    $scope.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    $scope.disable = [false];
    $scope.today = 'Today';
    $scope.clear = 'Clear';
    $scope.close = 'Close';
    var days = 2190; // show 6 years
    $scope.minDate = (new Date($scope.currentTime.getTime() - ( 0 ))).toISOString(); // show only dates in future
    $scope.maxDate = (new Date($scope.currentTime.getTime() + ( 1000 * 60 * 60 *24 * days ))).toISOString();
    $scope.onStart = function () {
        console.log('onStart');
    };
    $scope.onRender = function () {
        console.log('onRender');
    };
    $scope.onOpen = function () {
        console.log('onOpen');
    };
    $scope.onClose = function () {
        console.log('onClose');
    };
    $scope.onSet = function () {
        console.log('onSet');
    };
    $scope.onStop = function () {
        console.log('onStop');
    };
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