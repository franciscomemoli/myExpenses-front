'use strict';

angular.module('myExpenses').filter('getAttributeById', function() {
	return function(id, array, attribute ) {
		var i=0, len = array.length;
		for (; i<len; i++) {
			if (array[i].id === id) {
				return array[i][attribute];
			}
		}
		return null;
	};
});
angular.module('myExpenses').filter('Capitalize', function(){
	return function (input){
		return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }) : '';
	};
});
