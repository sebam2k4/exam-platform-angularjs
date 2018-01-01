# Examination Platform - Front End Project

## Overview

### What is this app for?

A front end for a general purpose quizzing or examination application. It can be used for skill assesment, training, certification exams, mock tests, gathering data, and surveys.

### What does it do?

It contains page views about the application and services offered, such as: faq, pricing, exam list, and login/registration forms.

It also uses two-way data binding and AngularJS directives to load and display multiple choice questions and answer choices from a JSON file.

The idea is that the complete full-stack app would allow organizations to build and host their multiple choice exams/quizzes and users could register to take them. However, no backend for this to be possible is implemented. This is more of a proof of concept with focus on front end and set of AngualrJS templates, controllers, routes, services, and directives.

### How does it work

This is a Single Page Application on AngularJS framework and uses JSON data to generate exam questions and answers. The site is styled with MaterializeCSS and custom CSS.

### Why AngularJS?

- AngularJS Featurs:
  - Improved User Experience
  - HTTP Communication with XHR [(XML Http Request)](https://en.wikipedia.org/wiki/XMLHttpRequest)
  - DOM Manipulation
  - State and Routing
  - MVC (MVVM in this case)
- Benefits:
  - Two-Way Data Binding
  - Many ways to do things
  - Good Documentation: [Developer Guide](https://docs.angularjs.org/guide) & [API Reference](https://docs.angularjs.org/api)
  - Large Community
  - Can get very productive
- Some Downsides:
  - Steep Learning Curve (At least I thinks so :)
  - Lots of unfamiliar terms
  - Many ways to do things
  - SEO ?    

## App Features
 
### Existing Features
- Pages
  - Home page
  - FAQ page
  - Pricing page
  - Exams list page
  - Exam info page
  - Exam start page
  - Exam in-progress page
  - Exam certificate page
- Forms 
  - Login with HTML5 validation.
  - Registration with HTML5 validation.
    - On Submit: Binds user input values for name and account type (via 2-way data binding) which are then used in side dashboard and `exam-certificate` view.
- Navigation
  - Top Nav
  - Side dashboard (trigger by user icon)
  - Mobile slide out navigation (tap/click hamburger button or swipe from right to left)
- Exam
  - Generate questions and answer choices from json data
  - On Submit:
    - Indicate correct and incorrect answer choices
    - Calculate number of correct answers & show result
    - Calculate score percentage correct
    - Determine pass/fail result based on score percentage
- Certificate
  - provide different feedback on certificate page depending on pass/fail result from exam
  - Show percentage score
  - Show pass/fail result
  - Provide editable name input

## Tech Used

### Some of the tech used includes:
- **[AngularJS](https://angularjs.org/)**
  - To handle page routing
  - Single Page Application
  - cuz it's awesome!
- **[MaterializeCSS](http://materializecss.com/)**
  - To give the project a minimalist, responsive layout based on Google's Material Design.
- **[Angular-materialize](https://krescruz.github.io/angular-materialize)**
  - Plugin that includes few directives to ensure certain components of materializeCSS work properly within angularJS framework.
- **[npm](https://www.npmjs.com/)**
  - Helps manage all of the dependencies in the application

## Demo

[**Working Demo**](https://sebam2k4.github.io/exam-platform-angularjs) deployed to Github Pages

And here is an interactive [Adobe Xd prototype](https://xd.adobe.com/view/d2c984c5-1fc0-49ce-b6e2-c75375493a07/) that was used in the design process of the application.

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone https://github.com/sebam2k4/exam-platform-angularjs``` command
2. After you've that, you'll need to make sure that you have **npm** installed - You can get **npm** by installing Node from [here](https://nodejs.org/en/)
3. Once **npm** is installed, you'll need to install all of the dependencies in *package.json* by running this command from the app's root directory:
  ```
  npm install
  ```
4. This will install the following dependencies:
  - angular
  - angular-animate 
  - angular-route
  - angular-materialize
  - materialize-css
  - http-server (dev dependancy)

5. After those dependencies have been installed, you can then run
  ```
  npm run server
  ```
6. This will start the http-server to allow you to preview the website.
7. The project will now run on [localhost:8080](http://127.0.0.1:8080)
8. Make changes to the code and refresh the browser window to see your changes.
9. Happy days!

### Deployment

The application has been deployed to GitHub Pages from gh-pages branch. 

## Testing

### Manual Testing
(Note To Self: write actual manual tests performed)
#### Compatibility
- Website looks consistent in both layout and style on different desktop browsers on Windows 10 operating system, including Chrome 61, Firefox 56, Opera 48, Vivaldi 1.12, MS Edge 40, and IE 11 and their mobile preview modes if available.
- Also consistent on latest android and windows mobile devices. (not tested on apple iOS)

#### Registration Form
- Accessing:
  - From homepage: go to 'Pricing' page in top navigation and click on 'Register' button below pricing table.
  - From homepage: go to login in top navigation and click 'register' link
  - From homepage: go to login in top navigation and try to log in. Error message will appear containing a link to registration page.
  - On mobile device, swipe from right edge to left or use hamburger icon in top bar to open side navigation and tap on 'Register' link
- Form Validation - Password Field:
  - Requires min 8 character length - no max limit.
  - Does not validate with just letters, numbers, or special characters
  - Valid special characters tested: :/#[]@!$&'()*+,;=.<>"?
  - Accepts space characters

#### Exam taking
- Functionality
  - From exams page, clicking on 'info' or 'take exam' takes user to informational page about the sample exam. From here user has to click 'Take This Exam' button and then finally click on 'Start Exam Now' to start the actual sample exam.
  - Questions display in different order everytime new exam is started.
  - Clicking 'Finish Exam' checks answer selections for correct and incorrect and provides score feedback.
  - User then clicks 'Next' to continue on to the scorecard/certificate.
  - Score card provides percent score and a pass or fail result.
- Scoring
  - Getting 8 correct answers out of 11 results in 72% score and a pass.
  - Getting 7 correct answers out of 11 results in 63% score and a fail.
  - Getting 7 of fewer correct answers results in fail.
  - Getting 8 or more correct answers results in pass.

## Resolved Bugs
1. The filterable list of exams on /exams page would create big horizontal gaps between the cards on certain browser widths due to overflowing content making some cards grow in size. This was fixed by replacing the MaterializeCSS grid with flexbox for positioning the cards.
2. `autoscroll="true` attribute is used to scroll the viewport to top after the view is updated, however, it would only trigger after the view is updated and the transition is played causing undesirable delay and noticable page jump to top.

This is due to the ng-view's css animation classes having a transition property set on them. 

I used a `run()` function with `scrollTo` method with a timeout set to 0. This was found as an answer to similar issue on Stack Overflow(add source)

This seems fix the problem, however, now when user tries to scroll down before the transition is finished, the viewport jumps back to top. It is a partial fix.

## Bugs

- Slide-out side navigation doesn't close when clicked too far away from its container on medium and large screens. Works correctly on mobile/small. This seems to be an issue with MaterializeCSS itself.

## Other Issues and notes

* The JSON file from which the exam's data is being loaded from includes the answer to every question in the `answer` property. This would not be safe for a real exam as it exposes the answer to the front end. Ideally, the user's answers would be saved to another JSON and compared to an answer key on the back end. This could be accomplished by moding the existing `SubmitExam` function in the `ExamInProgress` controller or modifying the `exam-inprogress` view to use a form and use the `onSubmit` method.

## Contributing

- As this is a graded project for a course, no contributions are accepted at this moment :) I suppose after it's been graded then it can be opened to contributions. However, feel free to download the project and experiment!

