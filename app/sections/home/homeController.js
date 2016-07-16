'use strict';
angular.module('app')
.controller('HomeController', ['$scope', 'apiService', 'user', function($scope, apiService, user){
	$scope.user = user;
}]);
