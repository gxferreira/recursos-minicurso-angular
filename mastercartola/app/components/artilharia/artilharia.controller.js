(function(){
	'use strict';

	angular.module('mastercartola')	
		.controller('ArtilhariaController', ArtilhariaController);

	ArtilhariaController.$inject = ["$scope", "TeamDataService"]

	function ArtilhariaController($scope, teamDataService){
		$scope.viewData = {};


		teamDataService.getTeamData(setListaArtilheiros);

		
		function setListaArtilheiros(data){
			var artilheiros = [];

			//PROCESSAMENTO
			for(var key in data){
				var time = data[key];

				time.artilheiros.forEach(function(art){
					art.time = time.escudos.pequeno;
					artilheiros.push(art);
				});
			}

			$scope.viewData.artilheiros = artilheiros;
		}
	}
})();