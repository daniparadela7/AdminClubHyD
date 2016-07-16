'use strict';
angular.module('app')
.controller('CafeteriaController', ['$uibModal', '$scope', 'cafeteria', function($uibModal, $scope, cafeteria){

	$scope.cafeteria = cafeteria;

	$scope.crearCafeteria = function (size) {
	    var modalInstance = $uibModal.open({
	      animation: 'fadeIn',
	      templateUrl: '/sections/cafeteria/crearCafeteria/modalCrearCafeteria.html',
	      controller: 'ModalCrearCafeteriaController',
	      size: size,
	      resolve: {
	      }
	    });
	    modalInstance.result.then(function () {
		}, function () {
		});	  
	}

	$scope.eliminarCafeteria = function (size, cafeteria_id) {
	    var modalInstance = $uibModal.open({
	      animation: 'fadeIn',
	      templateUrl: '/sections/cafeteria/eliminarCafeteria/modalEliminarCafeteria.html',
	      controller: 'ModalEliminarCafeteriaController',
	      size: size,
	      resolve: {
	      	cafeteria_id: function () {
	          return cafeteria_id;
	        }
	      }
	    });
	    modalInstance.result.then(function () {
		}, function () {
		});	  
	}
}]);
