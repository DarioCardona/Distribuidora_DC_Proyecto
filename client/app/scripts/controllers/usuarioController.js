angular.module('AngularScaffold.Controllers')
  .controller('usuarioController', ['$state','$scope', 'usuarioService', function ($state,$scope, usuarioService) {
      $scope.title = "Lista de Usuarios"
      $scope.user={};
      $scope.user_selected={};
      $scope.user_name = {};
      $scope.user_password = {};
      $scope.user_dire = {};
      $scope.user_cel = {};
      $scope.user_user = {};
      $scope.user_zona = {};
      $scope.user_fijo = {};
      $scope.user_mail = {};
      $scope.user_tabla = [];
      $scope.users=[];

      $scope.setusuario = function(){
          $scope.user_selected = $("select_user").val();
          if (user_selected=='Seleccione usuario') {
            $("#nombre").val("");
            $("#password").val("");
            $("#direccion").val("");
            $("#telefono_personal").val("");
            $("#telefono_empresa").val("");
            $("#correo").val("");
          } else {
            $("#nombre").val(user_selected.user_name);
            $("#password").val(user_selected.user_password);
            $("#direccion").val(user_selected.user_dire);
            $("#telefono_personal").val(user_selected.user_cel);
            $("#telefono_empresa").val(user_selected.user_fijo);
            $("#correo").val(user_selected.user_mail);
          }

      }


      $scope.getusuario = function(){
        usuarioService.Getusuario().then(function(response){
          alert("llego bien to /usuario");
          $scope.users = response.data;
          console.log($scope.users);
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }



      $scope.Postusuario = function(){
        console.log($scope.user);
        usuarioService.Postusuario($scope.user).then(function(response){
          alert("Posted to /usuario");

        }).catch(function(err){
          alert("Error posting to usuario");
        });
      }


  }]);
