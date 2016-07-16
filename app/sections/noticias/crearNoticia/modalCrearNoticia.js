'use strict';
angular.module('app')
.controller('ModalCrearNoticiaController', ['$uibModal', '$uibModalInstance', '$scope', '$window', 'apiService', function($uibModal, $uibModalInstance, $scope, $window, apiService){

	$scope.crearNoticia = function(){
		var newNoticia = {
			titulo : $scope.titulo,
			extracto: $scope.extracto,
			contenido : $scope.contenido,
			imagen: $scope.imagen,
			pretty_url: Math.floor(Math.random() * 100000000000)
		}

		apiService.addNode('noticias', newNoticia).then(function(data) {
			$uibModalInstance.close();
			$window.location.reload();
		})
	}

}]);

