/**
 * Created by Ke Nguyen Phu on 4/26/2016.
 */
var linkedinControllers = angular.module('linkedinControllers', []);

linkedinControllers.controller('ProfileCardCtrl', function ($scope, $http) {
    $http.get('data/profilecard.json').success(function (data) {
        $scope.profileCard = data;
    });

    $http.get('data/background.json').success(function (data) {
        $scope.background = data;
    });
});

linkedinControllers.controller('BackgroundCtrl', function ($scope, $http) {
    $http.get('data/background.json').success(function (data) {
        $scope.background = data;
    });
});