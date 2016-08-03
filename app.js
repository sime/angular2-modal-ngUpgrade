/*global angular, document*/
var app = angular.module('app', []);

app.controller('MyController', [function () {
  this.name = 'Simon';
}]);

app.component('helloWorld', {
  template: '<p>This is a Angular 1.5 component</p>'
});

// angular.element(document).ready(function () {
//   angular.bootstrap(document, ['app'], {strictDi: true});
// });

