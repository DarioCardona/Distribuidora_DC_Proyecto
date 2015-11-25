angular.module('AngularScaffold.Controllers')
  .controller('usuarioController', ['$state','$scope', 'usuarioService', function ($state,$scope, usuarioService) {

      $scope.user_name = {};
      $scope.user_password = {};
      $scope.user_dire = {};
      $scope.user_cel = {};
      $scope.user_user = {};
      $scope.user_zona = {};
      $scope.user_fijo = {};
      $scope.user_tabla = [];



  }]);
