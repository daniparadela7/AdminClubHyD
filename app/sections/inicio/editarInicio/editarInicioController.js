'use strict';
angular.module('app')
.controller('EditarInicioController', ['$scope', '$location', 'evento', 'apiService', function($scope, $location, evento, apiService){
	
	$scope.evento = evento;

	$scope.editarInicio = function(){
		var eventoEditado = {
			nombre : $scope.evento.nombre,
			texto : $scope.evento.texto,
			imagen: $scope.evento.imagen,
			orden : $scope.evento.orden
		}
		apiService.updateNode('inicio', $scope.evento._id, eventoEditado).then(function(data) {
			$location.path('/inicio');
		})
	}

}]);
