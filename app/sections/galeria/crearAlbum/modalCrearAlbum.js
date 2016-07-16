'use strict';
angular.module('app')
.controller('ModalCrearAlbumController', ['$uibModal', '$uibModalInstance', '$scope', '$window', 'apiService', function($uibModal, $uibModalInstance, $scope, $window, apiService){

	$scope.crearAlbum = function(){
		var newAlbum = {
			nombre: $scope.nombre,
			imagen: $scope.imagen,
			pretty_url: Math.floor(Math.random() * 100000000000)
		}

		apiService.addNode('album', newAlbum).then(function(data) {
			$uibModalInstance.close();
			$window.location.reload();
		})
	}

}]);

