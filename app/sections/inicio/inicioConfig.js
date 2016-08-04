'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/inicio', {
		controller: 'InicioController',
		templateUrl: 'sections/inicio/inicioView.html',
		resolve: {
			inicio: function(apiService) {
			    return apiService.getNodes('inicio');
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	})
	.when('/inicio/:pretty', {
		controller: 'EditarInicioController',
		templateUrl: 'sections/inicio/editarInicio/editarInicioView.html',
		resolve: {
			evento: function(apiService, $route){
				return apiService.getNode('iniciolink', $route.current.params.pretty)
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	});
}]);
