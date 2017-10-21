'Use strict';

angular.module('alapanApp').controller('HeaderController',['$scope',function($scope){

		$scope.brand = 'Alapan Abrittee Sangstha';

		$scope.searchEvent = function(x){
			console.log('value of text box: '+ x);
		}

}]);		