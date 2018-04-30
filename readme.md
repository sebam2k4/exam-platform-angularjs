# Examination Platform - Front End Project

## Overview

### What is this app for

A front end for a general purpose quizzing or examination application. It can be used for skill assesment, training, certification exams, mock tests, gathering data, and surveys.

### What does it do

It contains page views about the application and services offered, such as: faq, pricing, exam list, and login/registration forms.

It also uses two-way data binding and AngularJS directives to load and display multiple choice questions and answer choices from a JSON file.

The idea is that the complete full-stack app would allow organizations to build and host their multiple choice exams/quizzes and users could register to take them. However, no backend for this to be possible is implemented. This is more of a proof of concept with focus on front end and set of AngualrJS templates, controllers, routes, services, and directives.

### How does it work

This is a Single Page Application on AngularJS framework and uses JSON data to generate exam questions and answers. The site is styled with MaterializeCSS and custom CSS.

### Planning

Adobe Xd was used for initial visual planning and design of the application before any actual development started. The Adobe XD interactive prototype that was finally produced is availabe [here](https://xd.adobe.com/view/d2c984c5-1fc0-49ce-b6e2-c75375493a07/)

### Why AngularJS

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
  - SEO

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

[**Working Demo**](https://sebam2k4.github.io/exam-platform-angularjs) deployed on Github Pages

### Getting the code up and running

1. First, you will need to clone this repository by running the `git clone https://github.com/sebam2k4/exam-platform-angularjs` command
2. After you've that, you'll need to make sure that you have **npm** installed - You can get **npm** by installing Node from [here](https://nodejs.org/en/)
3. Once **npm** is installed, you'll need to install all of the dependencies in *package.json* by running this command from the app's root directory:

  ```shell
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

  ```shell
  npm run server
  ```

6. This will start the http-server to allow you to preview the website.

7. The project will now run on [localhost:8080](http://127.0.0.1:8080)

8. Make changes to the code and refresh the browser window to see your changes.

9. Happy days!

### Deployment

The application has been deployed to GitHub Pages from gh-pages branch. This required few changes to be made on the gh-pages branch for the deployed application to work correctly.

1. Changed all absolute paths in html to relative paths.
2. Updated the base tag in index.html to the repository's name.
3. Added a 404.html page to force redirecting to homepage on page refresh and page not found.

## Testing

### Manual Testing

A number of different manual tests were performed to make sure application and many of its features are working as expected

Views and routes were tested by clicking on application links in navigation, footer, and other placements throughout the site to make sure the user is routed to the correct page.

I tested the registration form's password input field validation in the following ways:

- Entered less than 8 lowercase letters to get a minimum length, number required, and uppercase letter required validation errors
- Entered the following special characters :/#[]@!$&'()*+,;=.<>"? along with one lowercase letter, uppercase letter, and number to pass password validation (`:/#[]@!$&'()*+,;=.<>"?aB1`)

I tested the exam taking functionality in the following ways:

- on the 'exams' page, I clicked on 'info' or 'take exam' to make sure the app takes me to the exam info view. Then to get the exam started I tested the 'Take This Exam' button and then the 'Start Exam Now'.
- I have started the exam multiple times to check that the question order is randomized everytime new exam is started.
- I have started and ended the exam multiple times to check that the navigation and footer disappear on exam start, and then reapper on exam finish.
- Made sure clicking 'Finish Exam' checks answer selections for correct and incorrect and provides score feedback.
- Tested the exam result page that is show a pass or fail result depending on the score.
- Checked multiple times that scores over 8 correct answers result in a pass screen.
- Checked multiple times that scores under 8 correct answers result in a fail result screen.

For testing layout responsiveness I have used both an Android and Windows phone as well as Chrome Developer Tools' device toolbar. The application's responsiveness was checked against different mobile orientations (portrait/landscape) as well as different screen sizes on desktop. I've also tested on different desktop borowsers: Chrome, Mozilla, Brave, and Edge.

## Bugs

- Slide-out side navigation doesn't close when clicked too far away from its container on medium and large screens. Works correctly on mobile. This seems to be an issue with MaterializeCSS itself.

## Resolved Bugs

1. The filterable list of exams on /exams page would create big horizontal gaps between the cards on certain browser widths due to overflowing content making some cards grow in size. This was fixed by replacing the MaterializeCSS grid with flexbox for positioning the cards.

2. `autoscroll="true` attribute is used to scroll the viewport to top after the view is updated (accessing another page), however, it would only trigger after the view is updated and the transition is played causing undesirable delay and noticable page jump to top. This is due to the ng-view's css animation classes having a transition property set on them. I used a `run()` function with `scrollTo` method with a timeout set to 0. This seems fix the problem, however, now when user tries to scroll down before the transition is finished, the viewport jumps back to top. It is a partial fix.

## Other Issues and notes

- The JSON file from which the exam's data is being loaded from includes the answer to every question in the `answer` property. This would not be safe for a real exam as it exposes the answer to the client (front-end). Ideally, the user's answers would be saved to another JSON and compared to an answer key stored on the server (back-end). This could be accomplished by modifying the existing `SubmitExam` function in the `ExamInProgress` controller or modifying the `exam-inprogress` view to use a form and use the `onSubmit` method to send user answers to the server.

## Contributing

- As this is a graded project for a course, no contributions are accepted at this moment :) I suppose after it's been graded then it can be opened to contributions. However, feel free to download the project and experiment!
