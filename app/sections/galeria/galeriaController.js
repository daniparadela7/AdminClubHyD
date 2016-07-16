'use strict';
angular.module('app')
.controller('GaleriaController', ['$uibModal', '$scope', 'album', function($uibModal, $scope, album){

	$scope.albumes = album;

	$scope.crearAlbum = function (size) {
	    var modalInstance = $uibModal.open({
	      animation: 'fadeIn',
	      templateUrl: '/sections/galeria/crearAlbum/modalCrearAlbum.html',
	      controller: 'ModalCrearAlbumController',
	      size: size,
	      resolve: {
	      }
	    });
	    modalInstance.result.then(function () {
		}, function () {
		});	  
	}

	$scope.eliminarAlbum = function (size, album_id) {
	    var modalInstance = $uibModal.open({
	      animation: 'fadeIn',
	      templateUrl: '/sections/galeria/eliminarAlbum/modalEliminarAlbum.html',
	      controller: 'ModalEliminarAlbumController',
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
}]);
