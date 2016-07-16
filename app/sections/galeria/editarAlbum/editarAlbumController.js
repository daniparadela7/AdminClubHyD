'use strict';
angular.module('app')
.controller('EditarAlbumController', ['$uibModal', '$scope', '$location', '$window', 'album', 'imagenes_album', 'apiService', function($uibModal, $scope, $location, $window, album, imagenes_album, apiService){
	
	$scope.album = album;
	$scope.imagenesAlbum = imagenes_album;

	$scope.addImagen = function (size, album_id) {
	    var modalInstance = $uibModal.open({
	      animation: 'fadeIn',
	      templateUrl: '/sections/galeria/añadirImagen/modalAñadirImagen.html',
	      controller: 'ModalAñadirImagenController',
	      size: size,
	      resolve: {
	      	album_id: function () {
	          return album_id;
	        }
	      }
	    });
	    modalInstance.result.then(function () {
		}, function () {
		});	  
	}

	$scope.eliminarImagen = function (imagen_id) {
		var imagenId = imagen_id;
	    apiService.deleteNode('imagen', imagenId).then(function(data) {
			$window.location.reload();
		})	  
	}

	$scope.editarAlbum = function(){
		var albumEditado = {
			nombre : $scope.album.nombre,
			imagen: $scope.album.imagen
		}
		apiService.updateNode('album', $scope.album._id, albumEditado).then(function(data) {
			$location.path('/galeria');
		})
	}

}]);
