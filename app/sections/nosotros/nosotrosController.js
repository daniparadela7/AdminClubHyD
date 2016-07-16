'use strict';
angular.module('app')
.controller('NosotrosController', ['$uibModal', '$scope', 'nosotros', function($uibModal, $scope, nosotros){

	$scope.nosotros = nosotros;


	$scope.crearNosotros = function (size) {
	    var modalInstance = $uibModal.open({
	      animation: 'fadeIn',
	      templateUrl: '/sections/nosotros/crearNosotros/modalCrearNosotros.html',
	      controller: 'ModalCrearNosotrosController',
	      size: size,
	      resolve: {
	      }
	    });
	    modalInstance.result.then(function () {
		}, function () {
		});	  
	}

	$scope.eliminarNosotros = function (size, nosotros_id) {
	    var modalInstance = $uibModal.open({
	      animation: 'fadeIn',
	      templateUrl: '/sections/nosotros/eliminarNosotros/modalEliminarNosotros.html',
	      controller: 'ModalEliminarNosotrosController',
	      size: size,
	      resolve: {
	      	nosotros_id: function () {
	          return nosotros_id;
	        }
	      }
	    });
	    modalInstance.result.then(function () {
		}, function () {
		});	  
	}
}]);
