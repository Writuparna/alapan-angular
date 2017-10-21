'use strict';

/* Directives */


angular.module('alapanApp').directive('mainHeader',[function(){
    return{
      restrict : 'AEC',
      replace : true,
      templateUrl : 'app/shared/header/header.html'
    };
}]);

angular.module('alapanApp').directive('mainSearch',[function(){
    return{
      restrict : 'AEC',
      scope : {
      	searchFn : "&"
      },
      templateUrl : 'app/shared/header/search.html',     
    }
}]);
