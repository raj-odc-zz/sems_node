app.controller('UserClrt',['$scope',' $uibModal', 'Restangular', function($scope, $uibModalInstance,Restangular) {
  $scope.usersList = Restangular.all('/api/users').getList().$object;
  $scope.open = function (){
    // var modalInstance = $uibModal.open({
    //   animation: $scope.animationsEnabled,
    //   templateUrl: 'myModalContent.html',
    //   controller: 'ModalInstanceCtrl',
    //   size: size,
    //   resolve: {
    //     items: function () {
    //       return $scope.items;
    //     }
    //   }
    // });
  }
  }]

);
