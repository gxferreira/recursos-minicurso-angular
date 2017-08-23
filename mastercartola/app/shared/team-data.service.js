(function(){
	'use strict';

	angular.module("teamDataModule")
		.service("TeamDataService", TeamDataService);

	TeamDataService.$inject = ["$http"];

	function TeamDataService($http){
		var self = this;

		self.getClassificacao = getClassificacao;
		self.getTeamData = getTeamData;
		self.getLeagueTable = getLeagueTable;
		

		function getTeamData(callback){
			getTeamDataHttpRequest()
					.then(function(response){
						callback(response.data)
					});
		}



		function getLeagueTable(){
			var requisicao = {
				"method":"GET",
				"url": "http://api.football-data.org/v1/competitions/444/leagueTable",
				headers:{
					"X-Auth-Token": "62fb66fe57ca4c07be4785938dc40a6e"
				}
			};

			return $http(requisicao)
				.then(function(response){
					var classificacao = response.data.standing;

					return classificacao;
				});
		}

		function getClassificacao(callback){
			getLeagueTable()
				.then(function(classificacao){
					getTeamDataHttpRequest()
						.then(function(response){
							processarClassificacao(classificacao, response.data);

							callback(classificacao);
						});
				}, function(error){
					callback();
				});
		}

		function processarClassificacao(classificacao, teamData){
			classificacao.forEach(function(posicao){
				posicao.id = getPosicaoId(posicao._links.team.href);
				posicao.time = teamData[posicao.id];
			});
		}

		function getPosicaoId(link){
			return link.split("http://api.football-data.org/v1/teams/")[1];
		}

		function getTeamDataHttpRequest(){
			var requisicao = {
				"method": "GET",
				"url": "app/shared/team-data.json"
			};

			return $http(requisicao);
		}
	}
})();