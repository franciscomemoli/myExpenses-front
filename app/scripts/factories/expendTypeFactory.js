'use strict';

angular.module('myExpenses').factory('ExpendTypeFactory',function(){
	var service = {};
	service.getExpendTypes = function (){
		return [{id:1 , name:'Market place',},
				{id:2 , name:'Gasoil',},
				{id:3 , name:'Services',},
				{id:4 , name:'Phone'}];
	};
	return service;
});