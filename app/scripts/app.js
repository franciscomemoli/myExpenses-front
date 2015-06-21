'use strict';

angular.module('myExpenses',['ngRoute','pascalprecht.translate'])
	.config(function($routeProvider){
		$routeProvider.when('/expense/new',{templateUrl:'view/expense/new.html', controller:'ExpenseController'});
		$routeProvider.otherwise({templateUrl:'view/default/home.html', controller:'HomeController'});
	});
