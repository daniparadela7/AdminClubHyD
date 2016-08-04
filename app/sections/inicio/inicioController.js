'use strict';
angular.module('app')
.controller('InicioController', ['$uibModal', '$scope', 'inicio', function($uibModal, $scope, inicio){
	$scope.inicio = inicio;
}]);
