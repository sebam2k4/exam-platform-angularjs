# Code Institute

## Stream 1 Project

Examination Platform on AngularJS + MaterializeCSS

Check out the interactive [Adobe Xd prototype](https://xd.adobe.com/view/d2c984c5-1fc0-49ce-b6e2-c75375493a07/) to get an idea of what the design and ui are going to be like.


Working demo of the progress so far (May be behind Master branch though): [https://sebam2k4.github.io/stream1-project/](https://sebam2k4.github.io/stream1-project/exams)

## Overview

### What is this app for?

This is a front-end web development project for a hypothetical examination/testing platform/app.

### What does it do?

It contains informational pages about the platfor: features, faq, sample exam you can take, and login/registration forms. 

The idea is that the complete app would allows organizations to host their multiple choice exams and users could register to take them. However, no backen for this to be possible is going to be implemented at this stage.

### How does it work

This app is built on AngularJS and uses JSON data to generate exam questions and answers. The site is styled with MaterializeCSS.

## Features
 
### Existing Features
- None yet :)
 
### Features Left to Implement
- Pages (html, css)
    - Home
    - Faq
    - Exams list
    - Exam info
    - Exam review
    - Score report
    - login form
    - registration form
- Exam (javascript)
    - questions and answers loaded form JSON
    - shuffle/randomize questions order
    - shuffle answer position
    - keep score
    - keep time/duration and record time-stamp
    - remove main navigation on test start

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
3. Once **npm** is installed, you'll need to install all of the dependencies in *package.json*:
  ```
  npm install
  ```
4. After those dependencies have been installed, you can run
  ```
  npm run server
  ```
to start http-server and preview the website.
5. The project will now run on [localhost:8080](http://127.0.0.1:8080)
6. Make changes to the code and refresh the browser window to see your changes.
7. Happy days!


## Notes & current issues (For myself):

* need to figure out how to copy scripts and css from node_modules to app directory and update the index.html file with new paths. Probably need a build tool like grunt?
