'Use strict';
angular.module('alapanApp').directive('sectionBlock',function(){
	return{
		restrict : 'AEC',
		templateUrl : 'app/components/home/blockSec.html',
		scope : {
			heading : '@',
			content : '@',
			style : '@'
		}
	}
})
.directive('sectionImage',function(){
	return{
		restrict : 'AEC',
		template : '<div class="secImg"><img src="{{imageurl}}" alt="{{imagealt}}" ></div>',
		scope : {
			imageurl : '@',
			imagealt : '@'
		},
	}
})
.directive('recentEvent',function(){
	return{
		restrict : 'AEC',
		templateUrl : 'app/components/home/recentEvent.html',
		replace : true,
		scope : {
			date : '@',
			month : '@',
			year : '@',
			title : '@',
			shortDescription : '@' 
		}
	}
})
.directive('releasedCd',function(){
	return{
		restrict : 'AEC',
		templateUrl : 'app/components/home/releasedCD.html',
		scope : {
			/*imageUrl : '@',
			title : '@',
			shortDescription : '@',*/
			folder : '@',
			content : '='
		}
	}
})
.directive('recentVideo',function(){
	return{
		restrict : 'E',
		templateUrl : 'app/components/home/recentVideo.html',
		scope : {
			content : '=',
		}
	}
})
.directive('imageCarousel',function($timeout){
	return{
		restrict : 'A',
		//replace : true,
		templateUrl : 'app/components/home/imageCarousel.html',
		scope : {
			carousel : '=',
			folder : '@'
		},
		link : function(scope, element, attribute){
			var elem = $(element);
			$timeout(function () {
		        elem.owlCarousel(scope.$eval(attribute.imageCarousel));
		    }, 2000);
		}
	}
})
.directive('testimonialCarousel',function($timeout){
	return{
		restrict : 'A',
		templateUrl : 'app/components/home/testimonial.html',
		scope : {
			carousel : '=',
			folder : '@'
		},
		link : function(scope, element, attribute){
			var elem = $(element);
			$timeout(function () {
		        elem.owlCarousel(scope.$eval(attribute.testimonialCarousel));
		    }, 2000);
		}
	}
})
.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])
;