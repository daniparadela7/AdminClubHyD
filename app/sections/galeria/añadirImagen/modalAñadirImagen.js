'use strict';
angular.module('app')
.controller('ModalAñadirImagenController', ['$uibModal', '$uibModalInstance', '$scope', '$window', 'album_id', 'apiService', function($uibModal, $uibModalInstance, $scope, $window, album_id, apiService){

	$scope.addImagenAlbum = function(){
		var newImagen = {
			imagen: $scope.imagen,
			album: album_id
		}
		apiService.addNode('imagen', newImagen).then(function(data) {
			$uibModalInstance.close();
			$window.location.reload();
		})
	}

}]);

