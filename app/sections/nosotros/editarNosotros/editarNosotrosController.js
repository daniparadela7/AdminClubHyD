'use strict';
angular.module('app')
.controller('EditarNosotrosController', ['$scope', '$location', 'nosotros', 'apiService', function($scope, $location, nosotros, apiService){
	
	$scope.nosotros = nosotros;

	$scope.editarNosotros = function(){
		console.log("entro")
		var nosotrosEditado = {
			nombre : $scope.nosotros.nombre,
			descripcion : $scope.nosotros.descripcion,
			funcion : $scope.nosotros.funcion,
			imagen: $scope.nosotros.imagen
		}
		apiService.updateNode('nosotros', $scope.nosotros._id, nosotrosEditado).then(function(data) {
			$location.path('/nosotros');
		})
	}

}]);
