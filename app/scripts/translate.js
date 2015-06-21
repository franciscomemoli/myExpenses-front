angular.module("myExpenses").config(['$translateProvider', function ($translateProvider) {
          $translateProvider.translations('en', {
		  });
		  $translateProvider.translations('es', {
		  	'My expenses' : ' Mis gastos',
			'name' : 'nombre',
			'type' : 'tipo',
			'total' : 'total',
			'date' : 'día',
			'actual balance:': 'balance actual'
		  });
		  $translateProvider.preferredLanguage('es');
    }]);