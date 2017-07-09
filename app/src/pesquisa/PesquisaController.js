  angular
       .module('app')
       .controller('PesquisaController', ['$scope','pesquisaService', '$http', '$timeout', 
        function($scope, pesquisaService, $http, $timeout){

         $scope.pesquisa = pesquisaService.getPesquisa();

         $scope.enviar = function(){
          resetarVariavelValidacao();
          if(validar(this.pesquisa)){

          }
        }

        $scope.sumirMsgValidacao = function(tag){
          $scope[tag] = false;
        }

          function validar(){
            var isValid = true;
            if(!$scope.pesquisa.pergunta2.opcao){
              $scope.isInvalidQ2 = true;
              focarElement('#validQ2');
              isValid = false;
            }

            if(!$scope.pesquisa.pergunta1.opcao){
              $scope.isInvalidQ1 = true;
              focarElement('#validQ1');
              isValid = false;
            }
            
            return isValid;
          }

          resetarVariavelValidacao = function(){
            $scope.isInvalidQ1 = false;
            $scope.isInvalidQ2 = false;
          }

          focarElement = function(element){
            $timeout(function(){
              $(element).attr("tabindex",-1).focus();
            });
          }
    


       }]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   
  function PesquisaController(pesquisaService, $http) {
	  var self = this;

    self.pesquisa = pesquisaService.getPesquisa();
    self.isInvalidQ1 = true;
    self.enviar = enviar;

    function enviar(){
      if(validar(this.pesquisa)){

      }
    }

    function validar(pesquisa){
      if(!pesquisa.pergunta1.opcao){
        self.isInvalidQ1 = true;
         $('#validQ1').attr("tabindex",-1).focus();
         return false;
      }
    }

          
    }

})();
*/