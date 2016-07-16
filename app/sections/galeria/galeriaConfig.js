'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/galeria', {
		controller: 'GaleriaController',
		templateUrl: 'sections/galeria/galeriaView.html',
		resolve: {
			album: function(apiService) {
			    return apiService.getNodes('album');
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	})
	.when('/galeria/:pretty', {
		controller: 'EditarAlbumController',
		templateUrl: 'sections/galeria/editarAlbum/editarAlbumView.html',
		resolve: {
			album: function(apiService, $route){
				return apiService.getNode('albumlink', $route.current.params.pretty)
			},
			imagenes_album: function(apiService, $route){
				return apiService.getNodesById('imagenlink', $route.current.params.pretty)
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	});
}]);
