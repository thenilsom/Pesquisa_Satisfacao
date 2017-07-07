(function(){

  angular
       .module('app')
       .controller('PesquisaController', ['pesquisaService', '$http',PesquisaController]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function PesquisaController(pesquisaService, $http) {
	  var self = this;

    self.pesquisa = pesquisaService.getPesquisa();
       
    }

})();
