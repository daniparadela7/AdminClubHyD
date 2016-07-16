'use strict';
angular.module('app')
.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url + ')',
            'background-position': '50% 50%',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'height': attrs.height + 'px' || '100px'
        });
    };
})
.directive('prettyp', function(){
    return function(scope, element, attrs){
        $("[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools: false, allow_expand: false});
    } 
});
