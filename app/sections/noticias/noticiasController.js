'use strict';
angular.module('app')
.controller('NoticiasController', ['$uibModal', '$scope', 'noticias', function($uibModal, $scope, noticias){

	$scope.noticias = [];
	angular.forEach(noticias, function(value, key) {
		value.fecha_noticiaFormato = moment(value.fecha_noticia).format('DD/MM/YYYY HH:mm');
		$scope.noticias.push(value);
	});

	$scope.crearNoticia = function (size) {
	    var modalInstance = $uibModal.open({
	      animation: 'fadeIn',
	      templateUrl: '/sections/noticias/crearNoticia/modalCrearNoticia.html',
	      controller: 'ModalCrearNoticiaController',
	      size: size,
	      resolve: {
	      }
	    });
	    modalInstance.result.then(function () {
		}, function () {
		});	  
	}

	$scope.eliminarNoticia = function (size, noticia_id) {
	    var modalInstance = $uibModal.open({
	      animation: 'fadeIn',
	      templateUrl: '/sections/noticias/eliminarNoticia/modalEliminarNoticia.html',
	      controller: 'ModalEliminarNoticiaController',
	      size: size,
	      resolve: {
	      	noticia_id: function () {
	          return noticia_id;
	        }
	      }
	    });
	    modalInstance.result.then(function () {
		}, function () {
		});	  
	}
}]);
