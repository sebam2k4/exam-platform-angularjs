angular.module('AppRouteControllers', [])

  // parent controller - Controller of all controllers
  .controller('ParentController', function($scope) {
    $scope.subheading = 'Expert Examination Platform';
  })

  // Navigation (top/side-nav & footer) Controller outside of ngView
  .controller('NavigationController', function ($scope, HideNav, UserDetails ) {
    $scope.hideNav = HideNav;
    $scope.userDetails = UserDetails;
  })

  // ngView controllers
  .controller('PageHomeController', function ($scope) {
    $scope.heading = 'Validating Your Skills';
    $scope.images = ['img/img1.jpg', 'img/img4.jpg', 'img/img5.jpg'];
  })

  .controller('PageFaqController', function ($scope) {
    $scope.heading = 'Want Some Answers?!?';
  })

  .controller('PagePricingController', function ($scope) {
    $scope.heading = 'Subscription Options';
  })

  .controller('PageExamsController', function ($scope, ExamList) {
    $scope.heading = 'Test Your Super Powers';

    $scope.examList = ExamList;
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

  .controller('ExamInProgress', function ($scope, ExamList, HideNav, ExamData) {
    $scope.hideNav = HideNav;
    $scope.examList = ExamList;
    $scope.examAnswers = {};
    ExamData.getExamData().then(function successCallback(response) { // Resolve promise
      console.log(response);  // Test
      $scope.examData = response.data; //get the data property of response
    },
      function errorCallback(response) {
        console.log("Couldn't load JSON file from ./data/");
      });
  })

  .controller('TestsController', function ($scope, ExamList, HideNav, ExamData) {
    $scope.hideNav = HideNav;
    $scope.examList = ExamList;

    ExamData.getExamData().then(function successCallback(response) { // Resolve promise
      console.log(response);  // Test
      $scope.examData = response.data; //get the data property of response
    },
      function errorCallback(response) {
        console.log("Couldn't load JSON file from ./data/");
      });
  })

  .controller('PageLoginController', function ($scope) {
    $scope.heading = 'Access Your Dashboard';
    // run on validated login form submit:
    $scope.submitForm = function(isValid) {
      if (isValid) {
        console.log('This Login form validated'); // Test
        $scope.validated = true; // show message on page
      }
    };
  })

  .controller('PageRegisterController', function ($scope, UserDetails) {
    $scope.userDetails = UserDetails;
    $scope.heading = 'Register a New Account';
    $scope.openModal = false;
    $scope.countries = ['United Kingdom', 'Ireland', 'USA', 'Spain', 'Sweden', 'Poland', 'Norway'];
    // run on validated register form submit:
    $scope.submitForm = function(isValid) {
      if (isValid) {
        console.log('This Registration form validated!'); // Test
        $scope.validated = true;  // show message on page
        $scope.openModal = true;  // trigger info modal

        // pass some user details to other controllers:
        $scope.userDetails.userName = $scope.account.name;
        if ($scope.account.type === 'user'){
          $scope.userDetails.accountType = 'Exam Taker';
        } else {
          $scope.userDetails.accountType = 'Organization';
        }
      }
    };

    // Required for MaterializeCSS input-date directive to work
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
