'use strict';

angular.module('myExpenses').
		controller('ExpenseController', ['$scope','ExpendService','ExpendTypeFactory','$location',
								 function($scope,  ExpendService,  ExpendTypeFactory,  $location){
	$scope.saveNewExpense = function(expense){
		ExpendService.addExpense(expense);
		$location.path('/');
	};
	$scope.saveNewExpenseAndContinue = function(expense){
		ExpendService.addExpense(expense);
		$scope.newExpend = {};
	};
	$scope.loadNewExpend = function(){
		$scope.types = ExpendTypeFactory.getExpendTypes();
		$scope.newExpend = {};
	};
}]);