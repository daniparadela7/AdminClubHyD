'use strict';
angular.module('app')
.controller('ModalCrearCafeteriaController', ['$uibModal', '$uibModalInstance', '$scope', '$window', 'apiService', function($uibModal, $uibModalInstance, $scope, $window, apiService){

	$scope.crearCafeteria = function(){
		var newImagen = {
			imagen: $scope.imagen
		}

		apiService.addNode('cafeteria', newImagen).then(function(data) {
			$uibModalInstance.close();
			$window.location.reload();
		})
	}

}]);

