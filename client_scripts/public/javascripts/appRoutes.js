app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/users', {
            templateUrl: 'templates/users.ejs',
            controller: 'UserClrt'
        })

        // nerds page that will use the NerdController
        .when('/about', {
            templateUrl: 'templates/about.ejs',
            controller: 'aboutClrt'
        });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

}]);
