var login = angular.module('linkedinLite.login', []);

login.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/signin', {
        templateUrl: 'view/login.html',
        controller: 'LoginCtrl'
    });
}])


login.controller('LoginCtrl', function ($scope) {

    var ref = new Firebase('https://linkedin-1312276.firebaseio.com');

    $scope.email = "kenguyen@gmail.com";

    $scope.signUp = function () {
        ref.createUser({
            email: $scope.email,
            password: $scope.password
        }, function (error, userData) {
            if (error)
                console.log('Error creating user: ', error);
            else
                console.log('Successfully created user account with ID: ', userData.uid);
        })
    };

    $scope.signIn = function () {
        ref.authWithPassword(
            {
                email: $scope.email,
                password: $scope.password
            },
            function (error, authData) {
                if (error)
                    console.log('Login failed');
                else
                    console.log('Authenticated successfully with payload:', authData);
            }
        );
    }
});