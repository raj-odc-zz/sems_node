app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeClrt'
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
