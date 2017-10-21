'Use strict';

angular.module('alapanApp').directive('mainFooter',function(){
	return{
		restrict : 'AEC',
	    replace : true,
	    templateUrl : 'app/shared/footer/footer.html'
	}
});

angular.module('alapanApp').directive('socialMedia',function(){
	return{
		restrict : 'AEC',
		templateUrl : 'app/shared/footer/social.html'
	}
});

angular.module('alapanApp').directive('contactUs',function(){
	return{
		restrict : 'AEC',
		templateUrl : 'app/shared/footer/contact.html',
		scope : {
			phone : '@',
			postal : '@',
			email : '@'
		}
	}
});