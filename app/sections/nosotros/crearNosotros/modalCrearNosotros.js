'use strict';
angular.module('app')
.controller('ModalCrearNosotrosController', ['$uibModal', '$uibModalInstance', '$scope', '$window', 'apiService', function($uibModal, $uibModalInstance, $scope, $window, apiService){

	$scope.crearNosotros = function(){
		var newNosotros = {
			nombre : $scope.nombre,
			descripcion : $scope.descripcion,
			funcion : $scope.funcion,
			imagen: $scope.imagen,
			pretty_url: Math.floor(Math.random() * 100000000000)
		}

		apiService.addNode('nosotros', newNosotros).then(function(data) {
			$uibModalInstance.close();
			$window.location.reload();
		})
	}

}]);

