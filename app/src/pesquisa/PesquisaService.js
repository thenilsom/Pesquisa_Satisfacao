(function(){

	angular.module('app')
	.service('pesquisaService',[PesquisaService]);

	function PesquisaService(){
		var pesquisa = {};
		pesquisa.pesquisa1 = 
		{
			pergunta : '1. Como você avalia a simplicidade e a agilidade na contratação e operação dos seguros?'
		}

		return{
		getPesquisa : function(){
			return pesquisa;
			}
		}

	}
	
})();