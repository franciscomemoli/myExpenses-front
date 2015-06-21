'use strict';

angular.module('myExpenses').controller('HomeController', function($scope,ExpendTypeFactory,ExpendService){
	$scope.loadHome = function(){
		$scope.myExpenses = ExpendService.getExpsenses();
		$scope.types = ExpendTypeFactory.getExpendTypes();
	};
	$scope.balance = 123456;
});


