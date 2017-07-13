  angular
       .module('app')
       .controller('PesquisaController', ['$scope','pesquisaService', '$http', '$timeout', 
        function($scope, pesquisaService, $http, $timeout){

         $scope.pesquisa = pesquisaService.getPesquisa();

         $scope.enviar = function(){
          resetarVariavelValidacao();
          if(validar(this.pesquisa)){
            $http.post('/php/teste.php/testePost', $scope.pesquisa).then(function(data){
              console.log(data.data);
            }, function(erro){

            });
          }
        }

        $scope.sumirMsgValidacao = function(tag){
          $scope[tag] = false;
        }

          function validar(){
            var isValid = true;
            if(!$scope.pesquisa.pergunta5.opcao){
              $scope.isInvalidQ5 = true;
              focarElement('#validQ5');
              isValid = false;
            }

            if(!$scope.pesquisa.pergunta4.opcao){
              $scope.isInvalidQ4 = true;
              focarElement('#validQ4');
              isValid = false;
            }

            if(!$scope.pesquisa.pergunta3.opcao){
              $scope.isInvalidQ3 = true;
              focarElement('#validQ3');
              isValid = false;
            }
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
            $scope.isInvalidQ3 = false;
            $scope.isInvalidQ4 = false;
            $scope.isInvalidQ5 = false;
          }

          focarElement = function(element){
            $timeout(function(){
              $(element).attr("tabindex",-1).focus();
            });
          }
       }]);