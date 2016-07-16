'use strict';
angular.module('app')
.controller('ModalEliminarCafeteriaController', ['$uibModal', '$uibModalInstance', '$scope', '$window', 'cafeteria_id', 'apiService', function($uibModal, $uibModalInstance, $scope, $window, cafeteria_id, apiService){

	apiService.getNode('cafeteria', cafeteria_id).then(function(data) {
		$scope.cafeteria = data;
	})

	$scope.cancelar = function(){
		$uibModalInstance.close();
	}

	$scope.eliminarCafeteria = function(){
		apiService.deleteNode('cafeteria', cafeteria_id).then(function(data) {
			$uibModalInstance.close();
			$window.location.reload();
		})
	}
}]);

