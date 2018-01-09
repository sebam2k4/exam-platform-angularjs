angular.module('AppRouteControllers', [])

  // Navigation (top/side-nav & footer) Controller outside of ngView
  .controller('NavigationController', function ($scope, HideNav, UserDetails) {
    $scope.hideNav = HideNav;
    $scope.userDetails = UserDetails;
  })

  // ngView controllers
  .controller('PageHomeController', function ($scope) {
    $scope.heading = 'Validating Your Skills';
  })

  .controller('PageFaqController', function ($scope) {
    $scope.heading = 'Want Some Answers?!?';
  })

  .controller('PagePricingController', function ($scope) {
    $scope.heading = 'Subscription Options';
  })

  .controller('PageExamsController', function ($scope, ExamList, HideNav) {
    $scope.heading = 'Test Your Super Powers';
    $scope.hideNav = HideNav;
    // make sure the navigation reappears when user uses back in browser during exam
    $scope.hideNav.examInProgress = false;

    // retrieve promise from ExamList service
    // and assign response data to scope variable
    ExamList.getExamList('data/exam-list.json')
    .then(function successCallback(response) {
      $scope.examList = response.data;
    },
    function errorCallback() {
      console.warn("Couldn't load JSON file - check if exam-list.json file exists in /data directory");
      $scope.showErrorMessage = true;
    });
  })

  .controller('ExamInfo', function ($scope, HideNav) {
    /* hardcoding the value for view's heading as all exams load the same 'Coding Exam'
      if there were more than 1 exam then inject ExamList factory, retrieve a response via a promise
      and use a for loop to assign coresponding heading for each exam for view 
    */
    $scope.heading = "Coding Exam";
    // bring back navigation on going back in browser
    $scope.hideNav = HideNav;
    $scope.hideNav.examInProgress = false;  // hides navigation in view
  })

  .controller('ExamStart', function ($scope, HideNav) {
    $scope.hideNav = HideNav;
    $scope.hideNav.examInProgress = true;  // hides navigation in view
  })

  .controller('ExamInProgress', function ($scope, ExamList, HideNav, ExamData, ExamMetrics) {
    $scope.hideNav = HideNav;
    $scope.examList = ExamList;
    $scope.examMetrics = ExamMetrics;

    // retrieve promise from ExamData service
    // and assign response data to scope variable
    ExamData.getExamData('data/exam1.json')
    .then(function successCallback(response) {
      $scope.examData = shuffle(response.data);  //shuffles question order everytime exam data is loaded
    },
    function errorCallback() {
      console.warn("Couldn't load JSON file - check if exam1.json file exists in /data directory");
    });

    // Function runs on submitting exam:
    // checks answers and creates metrics
    $scope.submitExam = function(){

      $scope.examFinished = true;  // shows 'Next' button in view after submitting exam
      var correctCount = 0;
      var examLength = $scope.examData.length;

      // check answers and keep count of correct answers:
      for(var i=0; i<examLength; i++){
        if($scope.examData[i].selected == $scope.examData[i].answer) {
          $scope.examData[i].isCorrect = true;  // used to give user feedback of correct answers after submiting exam
          correctCount += 1;
        } else if ($scope.examData[i].selected !== $scope.examData[i].answer) {
          $scope.examData[i].isCorrect = false;  // used to give user feedback of incorrect answers after submiting exam
        }
      };
      // Get some exam metrics:
      $scope.examMetrics.correctCount = correctCount;
      var scorePercent = calcPercentage(correctCount, examLength);
      $scope.examMetrics.scorePercent = scorePercent + '%';
      $scope.examMetrics.scoreResult = getResult(scorePercent);
      
    };

    // convert score to percentage value
    calcPercentage = function(correct, total) {
      return (correct/total * 100).toFixed(2);
    };

    // return pass or fail result depending on score percentage
    getResult = function(percentage) {
      if (percentage >= 70) {
        return 'pass';
      } else {
        return 'fail';
      }
    };

    // shuffle an array's order
    shuffle = function (array) {
      var currentIndex = array.length;
      var temp;
      var randomIndex;

      while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temp = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temp;
      }
      return array;
    };
  })
  
  .controller('CertificateController', function ($scope, HideNav, ExamList, UserDetails, ExamMetrics) {
    $scope.hideNav = HideNav;
    $scope.examList = ExamList;
    $scope.userDetails = UserDetails;
    $scope.examMetrics = ExamMetrics;
    $scope.hideNav.removeNav = "remove-nav";
  })

  .controller('PageLoginController', function ($scope) {
    $scope.heading = 'Access Your Dashboard';
    // Function runs on validated login form submit:
    $scope.submitForm = function(isValid) {
      if (isValid) {
        $scope.validated = true;  // show validation message in view
      }
    };
  })

  .controller('PageRegisterController', function ($scope, UserDetails) {
    $scope.userDetails = UserDetails;
    $scope.heading = 'Register a New Account';
    $scope.openModal = false;
    $scope.countries = ['United Kingdom', 'Ireland', 'USA', 'Spain', 'Sweden', 'Poland', 'Norway'];
    // Function runs on validated registration form submit:
    $scope.submitForm = function(isValid) {
      if (isValid) {
        $scope.validated = true;  // shows validation message in view
        $scope.openModal = true;  // triggers info modal in view

        // Make collected in view account.name and account.type available to other controllers:
        $scope.userDetails.userName = $scope.account.name;
        if ($scope.account.type === 'user'){
          $scope.userDetails.accountType = 'Exam Taker';
        } else if ($scope.account.type === 'org'){
          $scope.userDetails.accountType = 'Organization';
        }
      }
    };

    // Required for MaterializeCSS input-date directive to work - copied from official documentation
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
  })
