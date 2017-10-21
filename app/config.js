'Use strict';

angular.module('alapanApp').config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){
	$stateProvider.state('home',{
		url: '/home',
		templateUrl : 'app/components/home/home.html',
		controller : 'HomeController'
	}).state('about',{
		url: '/about',
		template : '<single-page></single-page>',
		controller : 'AboutController'
	});
	$urlRouterProvider.otherwise('home'); 
}])