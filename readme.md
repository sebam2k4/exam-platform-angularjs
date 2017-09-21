# Code Institute - Stream 1 Project

## Demo

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> updated
Check out the interactive [Adobe Xd prototype](https://xd.adobe.com/view/d2c984c5-1fc0-49ce-b6e2-c75375493a07/) to get an idea of what the design and ui are going to be like.

Working demo of the progress so far (May be slightly behind Master branch though): [https://sebam2k4.github.io/stream1-project/](https://sebam2k4.github.io/stream1-project)

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
## Overview

### What is this app for?

It's for all your multiple choice quizzing and examination needs :) This is a front-end web development project for a hypothetical examination app.

### What does it do?

It contains informational views about the application and services offered, such as: faq, pricing, exam list, & login/registration forms.
It also allows you to take a sample interactive exam and provide be provided with score report at end

The idea is that the complete app would allows organizations to host their multiple choice exams/quizzes and users could register to take them. However, no backend for this to be possible is going to be implemented at this stage. This is more of a proof of concept with focus on front end and set of of AngualrJS templates, controllers, routes, and services.

### How does it work

This is a Single Page Application on AngularJS and uses JSON data to generate exam questions and answers. The site is styled with MaterializeCSS.

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
- Downsides:
  - Steep Learning Curve (At least I thinks so :)
  - Lots of unfamiliar terms
  - Many ways to do things
  - SEO ?    

Overall, benefits outweigh the downsides!

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
  - Login with validation
  - Registration with validation. On Submit:
    - Binds user input values for name and account type (via 2-way data binding)
- Navigation
  - Top Nav
  - Side dashboard (trigger by user icon)
  - Mobile slide out navigation (tap/click hamburger button or swipe from right to left)
- Exam
  - Generate quesions and answer choices from json data
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

### Features Left to Implement
- Home Page content

## Tech Used

### Some of the tech used includes:
- **[AngularJS](https://angularjs.org/)**
  - To handle page routing
  - Single Page Application
  - cuz it's awesome!
- **[MaterializeCSS](http://materializecss.com/)**
  - To give the project a minimalist, responsive layout based on Google's Material Design.
- **[Angular-materialize](https://krescruz.github.io/angular-materialize)**
  - Plugin that includes few directives to ensure materialize plays nice with angular framework.
- **[npm](https://www.npmjs.com/)**
  - Helps manage most of the dependencies in the application

## Contributing

- As this is a graded project for a course, no contributions are accepted at this moment :) I suppose after it's been graded then it can be opened to contributions. I will keep ya posted :) However feel free to download the project and experiment!

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
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


## Resolved Bugs
1. The filterable list of exams on /exams page would create big horizontal gaps between the cards on certain browser widths due to overflowing content making some cards grow in size. This was fixed by ditching the MaterializeCSS grid and using flexbox for positioning the cards.

## Bugs

* Slide-out side navigation doesn't close when clicked too far away from its container on medium and large screens. Works correctly on mobile/small. This seems to be an issue with MaterializeCSS itself.

## Notes (For myself):

* need to figure out how to copy scripts and css from node_modules to app directory and update the index.html file with new paths. Probably need a build tool like grunt?

## To Do:

Low priority taks listed here so I don't forget about them.

<<<<<<< HEAD
* Format css and html files (indentation, etc.)
=======
1. Fix examList flex display. Don't use space-between.
2. add alt text to images
3. organize CSS styles
4. Format css and html files (indentation, etc.)
=======
=======
=======
Deployed working demo of the progress so far:

[https://sebam2k4.github.io/stream1-project/](https://sebam2k4.github.io/stream1-project/exams)

Go to main branch for project info: 

>>>>>>> updated
>>>>>>> updated
>>>>>>> updated
[Main Branch](https://github.com/sebam2k4/stream1-project)
