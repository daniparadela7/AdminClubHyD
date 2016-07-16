'use strict';
angular.module('app')
.run(['$rootScope', '$location', '$routeParams', '$timeout', '$analytics', '$appConfig', 'apiService', 'wdkFunctions', 'screenSize', function($rootScope, $location, $routeParams, $timeout, $analytics, $appConfig, apiService, wdkFunctions, screenSize) {
	$rootScope.wdkFunctions = wdkFunctions;
	$rootScope.$appConfig = $appConfig;

	$(window).on('resize', function(){
		var windowHeight = $(window).outerHeight();
		$('.headerBG').outerHeight(windowHeight);
	});

	$rootScope.toggleVisible = function() {
		$rootScope.visibleMenu = !$rootScope.visibleMenu;
		$('.c-hamburger').toggleClass('is-active');
		if($rootScope.visibleMenu) {
			$('body, html').addClass('menu-mobile-in');
			if((screenSize.is('xs')) || (screenSize.is('sm'))){
				var windowHeight = $(window).outerHeight();
				$('.headerBG').outerHeight(windowHeight);
			}
		} else {
			$('body, html').removeClass('menu-mobile-in');
		}
	};

	$rootScope.hadasODuendes = function(){
		var ruta = $location.path();
		if((ruta.includes('login'))|| (ruta.includes('recover'))){
			$('#wrapper').addClass('wrapper-login');
			$('.left_col').css('display', 'none');
		}
		else{
			$('#wrapper').removeClass('wrapper-login');
			if(!apiService.isAuthentificated()){
				$location.path('/login');
				swal("Debes iniciar sesión para acceder a esta sección", "", "error");
			}
			else{
				apiService.getId();
				$rootScope.authentificated = true;
			}
		}
	}

	$rootScope.$on('$routeChangeStart', function(){
		NProgress.start();
		$rootScope.hadasODuendes();
	});
	$rootScope.$on('$routeChangeSuccess', function(){
		NProgress.done();
		$rootScope.hadasODuendes();
		wdkFunctions.init();
		$analytics.pageTrack($location.path());
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		$('.navbar-toggle').removeClass('is-active');
		$rootScope.htmlReady();
	});

	$rootScope.$on('$routeChangeError', function(){
		NProgress.done();
		console.error('$routeChangeError');
	});

}]);
