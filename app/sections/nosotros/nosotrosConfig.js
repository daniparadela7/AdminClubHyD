'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/nosotros', {
		controller: 'NosotrosController',
		templateUrl: 'sections/nosotros/nosotrosView.html',
		resolve: {
			nosotros: function(apiService) {
			    return apiService.getNodes('nosotros');
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	})
	.when('/nosotros/:pretty', {
		controller: 'EditarNosotrosController',
		templateUrl: 'sections/nosotros/editarNosotros/editarNosotrosView.html',
		resolve: {
			nosotros: function(apiService, $route){
				return apiService.getNode('nosotroslink', $route.current.params.pretty)
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	});
}]);
