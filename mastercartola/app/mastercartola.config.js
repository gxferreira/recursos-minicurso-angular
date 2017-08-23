(function(){
	'use strict';

	angular.module('mastercartola')
		.config(MastercartolaConfig);

	function MastercartolaConfig($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'app/components/classificacao/classificacao.view.html',
			controller: 'ClassificacaoController as classificacaoController'
		})
		.when('/artilharia', {
			templateUrl: 'app/components/artilharia/artilharia.view.html',
			controller: 'ArtilhariaController'
		});
	}
})();