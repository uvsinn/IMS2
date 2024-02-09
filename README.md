# AVL - Web Application Starter Kit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0. For a quick development cycle we would recommend to use [NodeJS](https://nodejs.org/en/) as the preferred development environment.

## Installation

### Prerequisites
1. Install latest version of [node.js](https://nodejs.org) - minimum version 6.13.4 (check with `npm -v`)

For code scaffolding, install the [Angular CLI](https://github.com/angular/angular-cli) globally with `npm install -g @angular/cli`

### Build
1. Run `npm install` to install all dependencies and packages used by the starter kit.
   This can take quite some time the first time (2-5 minutes). Virus Scanning of 
   thousands of artifacts slows down here significantly.
### Run/Serve the Application
1. Run `npm run start` or for short `npm start` which will start `npm run dev` to actually start a local develpment server. To use open the browser at:  `http://localhost:4200/`

## Development
### Development Server
1. Run `npm run start` or `npm start` for a local dev server (configured on `http://localhost:4200/`). Note that the application will automatically reload/rebuild if you change any of the source files.

### Code Generation and Templating
Using [Angular CLI](https://github.com/angular/angular-cli) one can create new components / modules and services blueprints. 
The Angular CLI (`ng generate component|directive|pipe|service|class|module name-of-blueprint`) will then create a new folder 
and necessary artifacts in that folder which can be used to code a new functionality.

### Build for different Environments
- DEV: Run `npm run build` to build the project for development. The build artifacts will be stored in the `dist/` directory. - - PROD: Run `npm run build:prod` for a production build.

### Running unit tests
- Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io). All test will re-run automatically if you change any of the source files.

- Run `npm run test:single` to execute the unit tests only once.

- Run `npm run coverage` to create a test coverage report for your unit tests.
- Run `npm run coverage:show` and open `http://localhost:8080/docs` to show the created coverage report.

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Cypress](https://docs.cypress.io/).

### Linting

Run `npm run lint` to run [TSLint](https://palantir.github.io/tslint/) on your source files.

### Clean up

Run `npm run clean` which will trigger rimraf (please install globally with `npm install rimraf -g`), an
asynchronouse delete tool for the node_modules folder. (Much faster than delete manually!)


### Hints for NPM

Do not manipulate package.json manually 
- preserve lock file by npm uninstall + npm install -> package-lock.json is preserved and updated.


### Hints for App Development

In short, if you use template-driven forms, add FormsModule to your @NgModule. <== supported

If you use model-driven forms,add ReactiveFormsModule to your @NgModule. <== not supported from VizBox