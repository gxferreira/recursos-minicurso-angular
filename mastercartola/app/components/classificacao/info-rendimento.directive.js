(function(){
	'use strict';

	angular.module('mastercartola')
		.directive("infoRendimento", InfoRendimentoDirective);

	function InfoRendimentoDirective(){
		return {
			restrict: 'EA',
			scope:{
				posicao:'='
			},
			templateUrl: 'app/components/classificacao/info-rendimento.template.html',
			link: function(scope, element, attrs){
				
			}
		};
	}

	//IMPLEMEMTAÇÃO DO CONSTRUTOR
})();