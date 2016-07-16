'use strict';
angular.module('app')
.controller('LoginController', ['$uibModal', '$rootScope', '$scope', '$auth', '$window', function($uibModal, $rootScope, $scope, $auth, $window){
	var vm = this;
    this.login = function(){
        $auth.login({
            email: vm.email,
            contraseña: vm.password
        })
        .then(function(response){
            $rootScope.authentificated = true;
            var url = "http://" + $window.location.host;
            $window.location.href = url;
        })
        .catch(function(response){
            // Si ha habido errores llegamos a esta parte
            $scope.errorLogin = response.data.message;
            swal("Error al entrar", $scope.errorLogin, "error");
        });
    }
}]);
