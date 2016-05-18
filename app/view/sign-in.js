var signIn = angular.module('linkedinLite.signIn', []);

signIn.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/sign-in', {
        templateUrl: 'view/sign-in.html',
        controller: 'SignInCtrl'
    });
}])

signIn.controller('SignInCtrl', function ($scope, $location) {

    var ref = new Firebase('https://linkedin-1312276.firebaseio.com');

    if (ref.getAuth())
    {
        window.location = "#linkedin-profile";
        return;
    }

    $scope.message = "Please <strong>Sign In</strong> to view this page. If you don't have an account please <strong>Sign Up</strong>.";

    $scope.signUp = function () {

        $scope.message = "Please wait...";

        if (!$scope.email || !$scope.password) {
            $scope.message = "Please fill out email and password then click <strong>Sign Up</strong>";
            return;
        }

        ref.createUser(
            {
                email: $scope.email,
                password: $scope.password
            },
            function (error, userData) {
                if (error)
                {
                    $scope.message = error;
                    console.log('Error creating user: ', error);
                    $scope.$digest();
                }
                else
                {
                    $scope.message = "Successfully created user account. You can sign in now!";
                    $scope.$digest();
                    console.log('Successfully created user account with ID: ', userData.uid);
                }

            }
        )
    };

    $scope.signIn = function () {

        if (!$scope.email || !$scope.password) {
            $scope.message = "Please use your email and password to sign in!";
            return;
        }

        $scope.message = "Authenticating...";

        ref.authWithPassword(
            {
                email: $scope.email,
                password: $scope.password
            },
            function (error, authData) {
                if (error)
                {
                    $scope.message = "Login failed. Try again! " + error;
                    $scope.$digest();
                    console.log('Login failed');
                }

                else
                {
                    console.log('Authenticated successfully with payload:', authData);
                    $scope.message = "Authenticated successfully. Redirecting...";
                    $scope.$digest();
                    window.location = "#linkedin-profile";
                }
            }
        );
    }
});