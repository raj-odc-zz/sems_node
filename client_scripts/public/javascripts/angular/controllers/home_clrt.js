app.controller('HomeClrt',['$scope', 'Restangular', function($scope, Restangular) {
		$scope.slideshows = [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
			"/images/4.jpg",
		];
    // $scope.usersList = Restangular.all('/api/users').getList().$object;
  }]
);
