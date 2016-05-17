'use strict';

var app = angular.module('linkedinLite', [
  'ngRoute',
  'ngSanitize',
  'firebase',
  'linkedinLite.login',
  'linkedinLite.content'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/signin'
  });
}]);
