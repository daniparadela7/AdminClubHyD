'use strict';
angular.module('app')
.controller('ModalEliminarNosotrosController', ['$uibModal', '$uibModalInstance', '$scope', '$window', 'nosotros_id', 'apiService', function($uibModal, $uibModalInstance, $scope, $window, nosotros_id, apiService){

	apiService.getNode('nosotros', nosotros_id).then(function(data) {
		$scope.nosotros = data;
	})

	$scope.cancelar = function(){
		$uibModalInstance.close();
	}

	$scope.eliminarNosotros = function(){
		apiService.deleteNode('nosotros', nosotros_id).then(function(data) {
			$uibModalInstance.close();
			$window.location.reload();
		})
	}
}]);

