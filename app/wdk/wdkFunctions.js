'use strict';
angular.module('app').service('wdkFunctions', ['$rootScope', '$route', '$location', function($rootScope, $route, $location) {
	
	this.init = function(){
		this.isActive();
		this.tamañoPantalla();
	};

	this.animate = function(element, inview, inviewpart, transition, duration, delay) {
		if(!screenSize.is('xs')){
			if(inview && (inviewpart === 'top' || inviewpart === 'bottom' || inviewpart === 'both') && !$(element).hasClass(transition)) {
				$(element).css('animation-delay', delay + 's');
					$(element).css('animation-duration', duration + 's');
					$(element).addClass('animated ' + transition);
			}
		}
	};

	this.isActive = function(route) {
        $rootScope.ruta = $route;
    };

    this.tamañoPantalla = function(){
		var windowHeight = $(window).height();
		//$('.sliderInicio').css('height', windowHeight);
	};

}]);
