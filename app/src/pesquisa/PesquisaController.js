(function(){

  angular
       .module('app')
       .controller('PesquisaController', ['pesquisaService',PesquisaController]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function PesquisaController(pesquisaService) {
	  var self = this;

    self.pesquisa = pesquisaService.getPesquisa();
    }

})();
