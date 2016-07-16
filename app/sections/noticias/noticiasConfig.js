'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/noticias', {
		controller: 'NoticiasController',
		templateUrl: 'sections/noticias/noticiasView.html',
		resolve: {
			noticias: function(apiService) {
			    return apiService.getNodes('noticias');
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	})
	.when('/noticias/:pretty', {
		controller: 'EditarNoticiaController',
		templateUrl: 'sections/noticias/editarNoticia/editarNoticiaView.html',
		resolve: {
			noticia: function(apiService, $route){
				return apiService.getNode('noticialink', $route.current.params.pretty)
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	});
}]);
