'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/cafeteria', {
		controller: 'CafeteriaController',
		templateUrl: 'sections/cafeteria/cafeteriaView.html',
		resolve: {
			cafeteria: function(apiService) {
			    return apiService.getNodes('cafeteria');
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	});
}]);
