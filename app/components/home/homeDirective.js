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
});
angular.module('alapanApp').directive('sectionImage',function(){
	return{
		restrict : 'AEC',
		template : '<div class="secImg"><img src="{{imageurl}}" alt="{{imagealt}}" ></div>',
		scope : {
			imageurl : '@',
			imagealt : '@'
		},
	}
});

angular.module('alapanApp').directive('recentEvent',function(){
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
});

angular.module('alapanApp').directive('releasedCd',function(){
	return{
		restrict : 'AEC',
		templateUrl : 'app/components/home/releasedCD.html',
		scope : {
			imageUrl : '@',
			title : '@',
			shortDescription : '@'
		}
	}
});

angular.module('alapanApp').directive('recentVideo',function(){
	return{
		restrict : 'E',
		templateUrl : 'app/components/home/recentVideo.html',
		scope : {
			videoLink : '@',
			description : '@'
		}
	}
});

angular.module('alapanApp').directive('imageCarousel',function(){
	return{
		restrict : 'AEC',
		templateUrl : 'app/components/home/imageCarousel.html',
		link : function(scope, element, attribute){
			var elem = angular.element(document.querySelector('ul.studentList'));
			console.log('elem: '+JSON.stringify(elem));
            /* angular.element(elem).owlCarousel({
				items :8,
				itemsMobile: [479,2],
				itemsTablet: [768,4],
				itemsDesktopSmall: [979,6],
				itemsDesktop: [1199,8],
				navigation:true,
				pagination:false,
				navigationText : ["<",">"],
			});  */ 
		}
	}
});