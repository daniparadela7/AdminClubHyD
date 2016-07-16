'use strict';
angular.module('app')
.controller('ModalEliminarNoticiaController', ['$uibModal', '$uibModalInstance', '$scope', '$window', 'noticia_id', 'apiService', function($uibModal, $uibModalInstance, $scope, $window, noticia_id, apiService){
	
	apiService.getNode('noticias', noticia_id).then(function(data) {
		$scope.noticia = data;
	})

	$scope.cancelar = function(){
		$uibModalInstance.close();
	}

	$scope.eliminarNoticia = function(){
		apiService.deleteNode('noticias', noticia_id).then(function(data) {
			$uibModalInstance.close();
			$window.location.reload();
		})
	}
}]);

