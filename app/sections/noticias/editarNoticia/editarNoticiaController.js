'use strict';
angular.module('app')
.controller('EditarNoticiaController', ['$scope', '$location', 'noticia', 'apiService', function($scope, $location, noticia, apiService){
	
	$scope.noticia = noticia;

	$scope.editarNoticia = function(){
		var noticiaEditada = {
			titulo : $scope.noticia.titulo,
			extracto: $scope.noticia.extracto,
			contenido : $scope.noticia.contenido,
			imagen: $scope.noticia.imagen
		}
		apiService.updateNode('noticias', $scope.noticia._id, noticiaEditada).then(function(data) {
			$location.path('/noticias');
		})
	}

	$scope.tinymceOptions = {
		inline: false,
	    plugins : 'advlist autolink link image lists charmap print preview',
	    skin: 'lightgray',
	    theme : 'modern',
	    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
	};


}]);
