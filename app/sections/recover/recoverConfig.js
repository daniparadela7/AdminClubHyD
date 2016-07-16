'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/recover', {
		controller: 'RecoverController',
		controllerAs: "login",
		templateUrl: 'sections/recover/recoverView.html',
		resolve: {
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	});
}]);
