# Experimentone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



Experiment Commands

npm install -g @angular/cli (install the command line for angular)
ng new projectName (generate the sample project and and install the dependencies)
ng serve (run the service)
ng g c component-name -il -is (generate component name with inline template and inline style)
ng g s nameOfService (generate service, this generate the new service but do not include in the provider, explicitly need to be added in the app module.) 

/// State Management 

1. RxJs/ngrx/store

Observable - object

//Important
router-outlet - Acts as a placeholder that Angular dynamically fills based on the current router state.
https://angular.io/docs/ts/latest/api/router/index/RouterOutlet-directive.html

npm install ngx-bootstrap bootstrap --save
import the min.css 