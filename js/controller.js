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
    $scope.examList = ExamList;
<<<<<<< HEAD
    $scope.hideNav = HideNav;
    $scope.hideNav.removeNav = "";                      // remove .remove-nav class from top navigation and footer
=======
>>>>>>> Updated controllers
  })

  .controller('ExamInfo', function ($scope, ExamList) {
    $scope.examList = ExamList;
    $scope.heading = $scope.examList[0].name;
  })

  .controller('ExamStart', function ($scope, ExamList, HideNav) {
    $scope.hideNav = HideNav;
    $scope.examList = ExamList;
    $scope.hideNav.examInProgress = true;               // hides navigation
  })

  .controller('ExamInProgress', function ($scope, ExamList, HideNav, ExamData, ExamMetrics) {
    $scope.hideNav = HideNav;
    $scope.examList = ExamList;
    $scope.examMetrics = ExamMetrics;
    $scope.hideNav.removeNav = "remove-nav";

    // retrieve promise from ExamData service
    // and assign response data to scope variable
    ExamData.getExamData('data/exam1.json')
    .then(function successCallback(response) {
      $scope.examData = response.data;
      console.log($scope.examData);                     //test
      $scope.examData = shuffle($scope.examData);       //shuffles question order everytime exam data is loaded
      console.log('after shuffle: ', $scope.examData);  //test
    },
    function errorCallback(response) {
      console.log("Couldn't load JSON file - check if exam1.json file exists in /data directory");
    });

    // Function runs on submitting exam:
    // checks answers and creates metrics
    $scope.submitExam = function(){
      console.log($scope.examData);                     // test
      $scope.examFinished = true;                       // shows 'Next' button in view after submitting exam
      var correctCount = 0;
      var examLength = $scope.examData.length;
      console.log('number of questions:', examLength);  // test;

      // check answers and keep count of correct answers:
      for(var i=0; i<examLength; i++){
        if($scope.examData[i].selected == $scope.examData[i].answer) {
          console.log("You answered a question correctly! ");                     // test
          $scope.examData[i].isCorrect = true;
          correctCount += 1;
        } else if ($scope.examData[i].selected !== $scope.examData[i].answer) {
          console.log("You answered incorrectly :(");                             // test
          $scope.examData[i].isCorrect = false;
        } else console.log("You didn't answer a question");                       // test
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
    }
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
        console.log('This Login form validated');           // Test
        $scope.validated = true;                            // show message on page
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
        console.log('This Registration form validated!');   // Test
        $scope.validated = true;                            // shows message in view
        $scope.openModal = true;                            // triggers info modal in view

        // Make account.name and account.type collected in view available to other controllers:
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
