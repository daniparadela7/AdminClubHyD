'use strict';
angular.module('app')
.controller('ModalEliminarAlbumController', ['$uibModal', '$uibModalInstance', '$scope', '$window', 'album_id', 'apiService', function($uibModal, $uibModalInstance, $scope, $window, album_id, apiService){

	apiService.getNode('album', album_id).then(function(data) {
		$scope.album = data;
	})

	$scope.cancelar = function(){
		$uibModalInstance.close();
	}

	$scope.eliminarAlbum = function(){
		apiService.deleteNode('album', album_id).then(function(data) {
			$uibModalInstance.close();
			$window.location.reload();
		})
	}
}]);

