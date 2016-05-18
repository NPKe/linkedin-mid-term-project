'use strict';

var app = angular.module('linkedinLite', [
  'ngRoute',
  'ngSanitize',
  'firebase',
  'linkedinLite.signIn',
  'linkedinLite.profile'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/sign-in'
  });
}]);