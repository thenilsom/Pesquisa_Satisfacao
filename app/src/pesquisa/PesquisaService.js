(function(){

	angular.module('app')
	.service('pesquisaService',[PesquisaService]);

	function PesquisaService(){
		var pesquisa = {};
		pesquisa.pergunta1 = 
		{
			pergunta : '1. Como você avalia a simplicidade e a agilidade na contratação e operação dos seguros?'
		};
		pesquisa.pergunta2 = 
		{
			pergunta : '2. Como você avalia o atendimento, presteza, agilidade e cordialidade dos nossos comerciais (Carivaldo, Clemente, Gilmar e Leandro)?'
		};
		pesquisa.pergunta3 = 
		{
			pergunta : '3. Como você avalia o atendimento, presteza, agilidade e cordialidade dos nossos colaboradores internos?'
		};
		pesquisa.pergunta4 = 
		{
			pergunta : '4. Como você avalia nossos serviços e a parceria de uma maneira geral?'
		};
		pesquisa.pergunta5 = 
		{
			pergunta : '5. Qual a probabilidade de você recomendar a Maximiza Seguros para um amigo ou colega?'
		};

		return{
		getPesquisa : function(){
			return pesquisa;
			}
		}

	}
	
})();