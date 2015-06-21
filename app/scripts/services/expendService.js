'use strict';

angular.module('myExpenses').service('ExpendService',function(){
	var expenses = [{
					description: 'Compra del mes de febrero',
					typeId:1,
					total:3451,
					date:'11/02/2015'
				},
				{
					description: 'Compra del mes de marzo',
					typeId:2,
					total:3451,
					date:'30/03/2015'
				}];
	this.getExpsenses = function(){
		return expenses;
	};
	this.addExpense = function (expense){
		expenses.push(expense);
	};
});