'Use strict';

angular.module('alapanApp').controller('HomeController',['$scope','HomeFactory',function($scope,HomeFactory){

	$scope.home = 'this is home page';

	var callBannerApi = function(){
		HomeFactory.bannerApiFn().then(
			function(){
				var bannerAPI = localStorage.getItem('bannerAPI');
				bannerAPI = JSON.parse(bannerAPI);
				$scope.bannerImages = bannerAPI.result;
			},
			function(){
				console.log('data can not be retrieved');
			}
		)
	}
	var bannerImages = callBannerApi();

	var callArtistApi = function(){
		HomeFactory.artistApiFn().then(
			function(){
				var artistApi = localStorage.getItem('artistApi');
				artistApi = JSON.parse(artistApi);
				$scope.artistDetail = artistApi.result;
			},
			function(){
				console.log('data can not be retrieved');
			}
		)
	}
	var artistDetail = callArtistApi();

	var callTestimonialApi = function(){
		HomeFactory.testimonialFn().then(
			function(){
				var testimonialApi = localStorage.getItem('testimonialApi');
				$scope.testimonialDetail = JSON.parse(testimonialApi).result;
			},
			function(){
				console.log('Data cannot be retrieved');
			}
		)
	}
	callTestimonialApi();

	var callWelcomeApi = function(){
		HomeFactory.welcomeFn().then(
			function(){
				var welcomeApi = localStorage.getItem('welcomeApi');
				$scope.welcomeText = JSON.parse(welcomeApi).result;
			},
			function(){
				console.log('Data can not be retrieved');
			}
		)
	}
	callWelcomeApi();

	var callOwnerApi = function(){
		HomeFactory.ownerFn().then(
			function(){
				var ownerApi = localStorage.getItem('ownerApi');
				$scope.ownerText = JSON.parse(ownerApi).result;
			},
			function(){
				console.log('Data can not be retrieved');
			}
		)
	}
	callOwnerApi();

	var callProgrammeApi = function(){
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
	callProgrammeApi();

	var callCdApi = function(){
		HomeFactory.cdReleaseFn().then(
			function(){
				var cdReleaseApi = localStorage.getItem('cdReleaseAPI');
				$scope.cdRelease = JSON.parse(cdReleaseApi).result;
			},
			function(){
				console.log('data can not be retrieved');
			}
		)
	}
	callCdApi();

	var callVideoApi = function(){
		HomeFactory.videoFn().then(function(){
			var videoApi = localStorage.getItem('videoAPI');
			$scope.allVideo = JSON.parse(videoApi).result;
			var videoAry = $scope.allVideo;
			for(var i = 0; i<videoAry.length; i++){
				var videoLink = videoAry[i].video_link.split('\/watch?v=').join('/embed/');
				videoAry[i].video_link = videoLink;
			}
		},
		function(){
			console.log('data can not be retrieved');
		});
	}
	callVideoApi();

}]);