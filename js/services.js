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

  // Exam list.
  .factory('ExamList', function () {
    return [
      {
        examId: '1',
        name: 'General Coding',
        provider: 'Code Institute',
        path: 'exams/exam-info',
        image: 'img/sample-exam.jpg',
        imageAlt: 'writing on paper',
        addedDate: '2017-09-22',
        type: 'coding'
      },
      { examId: '2', name: 'Calculus', provider: 'The Mathmagicians', path: 'exams/exam-info', image: 'img/math.jpg', imageAlt: 'math Formulas on brown wall', addedDate: '2017-03-01', type: 'math' },
      { examId: '3', name: 'Python', provider: 'The Monty Snake?', path: 'exams/exam-info', image: 'img/python.jpg', imageAlt: 'python snake', addedDate: '2017-04-23', type: 'coding' },
      { examId: '4', name: 'JavaScript Basics', provider: 'Code Institute', path: 'exams/exam-info', image: 'img/javascript-v2.jpg', imageAlt: 'javascript syntax on screen', addedDate: '2017-08-12', type: 'coding' },
      { examId: '5', name: 'Routing & Switching', provider: 'Cisco', path: 'exams/exam-info', image: 'img/routing.jpg', imageAlt: 'network of wires', addedDate: '2017-03-27', type: 'it_tech' },
      { examId: '6', name: 'Office365', provider: 'Cool guys at Microsoft', path: 'exams/exam-info', image: 'img/office.jpg', imageAlt: 'office interior with desk and shelves', addedDate: '2017-07-06', type: 'productivity' },
      { examId: '7', name: 'Security', provider: 'CompTIA', path: 'exams/exam-info', image: 'img/security.jpg', imageAlt: 'pin input screen on mobile device', addedDate: '2017-09-21', type: 'it_tech' },
      { examId: '8', name: 'Debugging', provider: 'Rubber Duckie', path: 'exams/exam-info', image: 'img/debugging.jpg', imageAlt: 'ladybug in grass', addedDate: '2017-09-16', type: 'coding' },
      { examId: '9', name: 'Proper Etiquette', provider: 'Your Aunt Mary', path: 'exams/exam-info', image: 'img/etiquette.jpg', imageAlt: 'tea on table', addedDate: '2017-09-02', type: 'other' },
      { examId: '10', name: 'Machine Code', provider: 'CPU', path: 'exams/exam-info', image: 'img/machine-code.jpg', imageAlt: 'number board', addedDate: '2017-08-11', type: 'coding' },
      { examId: '11', name: 'UE4', provider: 'Unreal', path: 'exams/exam-info', image: 'img/ue4.jpg', imageAlt: 'ahnds holding a gamepad', addedDate: '2017-05-23', type: 'other' },
      { examId: '12', name: 'Six Sigma', provider: 'Black Belt Coach', path: 'exams/exam-info', image: 'img/six-sigma.jpg', imageAlt: 'man wearing tuxedo on a motorbike', addedDate: '2017-02-28', type: 'productivity' }
    ];
  })

  .factory('ExamMetrics', function() {
    return {
      correctCount: null,
      scorePercent: '',
      scoreResult: '',
    };
  })

  // Retrieve Exam Data from json
  .factory('ExamData', function ($http) {
    return {
      getExamData: function(url) {
        return $http.get(url) // return promise
      }
    };
  })
