'Use strict';
angular.module('alapanApp').controller('EventController',['$scope','HomeFactory',function($scope,HomeFactory){

	$scope.heading = 'Recent Programmes';
/*var callProgrammeApi = function(){
		HomeFactory.programmeFn().then(
			function(){
				var programmeApi = localStorage.getItem('programmeApi');
				$scope.programme = JSON.parse(programmeApi).result;
				var day = [];
				var dayC,monthC,yearC;
				var progAry = $scope.programme;
				for (var i = 0; i < progAry.length; i++) {
					var progAryDt = progAry[i].date.split('-').reverse();
					dayC = progAryDt[0];
					monthC = progAryDt[1];
					yearC = progAryDt[2];
					if(progAryDt[1]==01){
						monthC = 'Jan';
					}else if(progAryDt[1]==02){
						monthC = 'Feb';
					}else if(progAryDt[1]==03){
						monthC = 'March';
					}else if(progAryDt[1]==04){
						monthC = 'Apr';
					}else if(progAryDt[1]==05){
						monthC = 'May';
					}else if(progAryDt[1]==06){
						monthC = 'June';
					}else if(progAryDt[1]==07){
						monthC = 'July';
					}else if(progAryDt[1]==08){
						monthC = 'Aug';
					}else if(progAryDt[1]==09){
						monthC = 'Sept';
					}else if(progAryDt[1]==10){
						monthC = 'Oct';
					}else if(progAryDt[1]==11){
						monthC = 'Nov';
					}else if(progAryDt[1]==12){
						monthC = 'Dec';
					}
					progAry[i].day = dayC;
					progAry[i].month = monthC;
					progAry[i].year = yearC;
				};
			},
			function(){
				console.log('Data can not be retrieved');
			}
		)
	}
	callProgrammeApi();*/
}]);