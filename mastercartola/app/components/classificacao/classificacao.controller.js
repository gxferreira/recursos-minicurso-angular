(function(){

	'use strict';

	angular.module('mastercartola').controller("ClassificacaoController", 
			ClassificacaoController);

	ClassificacaoController.$inject = ["$scope", "TeamDataService"];

	function ClassificacaoController($scope, teamDataService){
		//DECLARAÇÕES
		$scope.viewData = {};

		$scope.viewData.classificacao = [];
		$scope.viewData.posicoesDetalhada = {};

		$scope.viewData.dadosCarregados;

		this.actionButtonInfo = actionButtonInfo;

		
		//AÇÕES DO CONSTRUTOR
		teamDataService.getClassificacao(setClassificacaoData)


		//IMPLEMENTAÇÕES DE FUNÇÃO
		function actionButtonInfo(posicao){
			$scope.viewData.posicoesDetalhada[posicao.id] = !$scope.viewData.posicoesDetalhada[posicao.id];
		}

		function setClassificacaoData(data){
			$scope.viewData.classificacao = data;

			$scope.viewData.dadosCarregados = "Dados Carregados com sucesso!";
		}
	}	
})();


