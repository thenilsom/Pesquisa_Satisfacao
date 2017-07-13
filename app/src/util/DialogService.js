angular.module('app').factory('dialogService', ['$mdDialog', function($mdDialog){

	var service = {};

	service.showAlert = function(msg) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Alerta')
        .textContent(msg)
        .ariaLabel('Alert')
        .ok('Ok')
    );
  };

  return service;

}]);



