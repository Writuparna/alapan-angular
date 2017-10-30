'Use strict';

angular.module('alapanApp').factory('HomeFactory',['$http','$q',function($http,$q){

	var homeObject = {
		bannerApiFn : bannerApiFn,
		artistApiFn : artistApiFn,
		testimonialFn : testimonialFn,
		welcomeFn : welcomeFn,
		ownerFn : ownerFn,
		programmeFn : programmeFn,
		cdReleaseFn : cdReleaseFn,
		videoFn : videoFn
	}

	function bannerApiFn(){
		var defer = $q.defer();
		$http({
			url : 'http://alapanabritteesangstha.com/api/alapon/banner',
			method : 'GET'
		}).success(function(data){
			defer.resolve(data);
			localStorage.setItem('bannerAPI', JSON.stringify(data));
		}).error(function(){
			defer.reject();
		});
		return defer.promise;
	}

	function artistApiFn(){
		var defer = $q.defer();
		$http({
			url : 'http://alapanabritteesangstha.com/api/alapon/welwisher',
			method : 'GET'
		}).success(function(data){
			defer.resolve(data);
			localStorage.setItem('artistApi', JSON.stringify(data));
		}).error(function(){
			defer.reject();
		});
		return defer.promise;
	}

	function testimonialFn(){
		var defer = $q.defer();
		$http({
			method : 'GET',
			url : 'http://alapanabritteesangstha.com/api/alapon/testimonial',
		}).success(function(data){
			defer.resolve(data);
			localStorage.setItem('testimonialApi', JSON.stringify(data));
		}
		).error(function(){
			defer.reject();
		});
		return defer.promise;
	}

	function welcomeFn(){
		var defer = $q.defer();
		$http({
			method : 'GET',
			url : 'http://alapanabritteesangstha.com/api/alapon/welcome'
		}).success(function(data){
			defer.resolve(data);
			localStorage.setItem('welcomeApi', JSON.stringify(data));
		}).error(function(){
			defer.reject();
		});
		return defer.promise;
	}

	function ownerFn(){
		var defer = $q.defer();
		$http({
			method : 'GET',
			url : 'http://alapanabritteesangstha.com/api/alapon/about_owner'
		}).success(function(data){
			defer.resolve(data);
			localStorage.setItem('ownerApi', JSON.stringify(data));
		}).error(function(){
			defer.reject();
		});
		return defer.promise;
	}

	function programmeFn(){
		var defer = $q.defer();
		$http({
			method : 'GET',
			url : 'http://alapanabritteesangstha.com/api/alapon/programm'
		}).success(function(data){
			defer.resolve(data);
			localStorage.setItem('programmeApi', JSON.stringify(data));
		}).error(function(){
			defer.reject();
		});
		return defer.promise;
	}

	function cdReleaseFn(){
		var defer = $q.defer();
		$http({
			method : 'GET',
			url : 'http://alapanabritteesangstha.com/api/alapon/cd_release'
		}).success(function(data){
			defer.resolve(data);
			localStorage.setItem('cdReleaseAPI', JSON.stringify(data));
		}).error(function(){
			defer.reject();
		});
		return defer.promise;
	}

	function videoFn(){
		var defer = $q.defer();
		$http({
			method : 'GET',
			url : 'http://alapanabritteesangstha.com/api/alapon/video'
		}).success(function(data){
			defer.resolve(data);
			localStorage.setItem('videoAPI', JSON.stringify(data));
		}).error(function(){
			defer.reject();
		});
		return defer.promise;
	}



	return homeObject;

}]);