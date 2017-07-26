"use strict";
(function(){
	var app = angular.module("app");
		app.directive("checkboxDirective",function($rootScope,$window,compareDataService) {
			return {
				restrict : "E",
				scope : {
					option: '=option'
				},
				controller:"appController",
				transclude:true,
				templateUrl : "checkboxTemplate.html",
				controller : "appController",
				link : function(scope,element,attrs,controller) {

					// element[0].children.checkbox.focus();

					// compareDataService.option = scope.option;
					// console.log(compareDataService);


					// compareDataService.option = scope.option;

					// if(compareDataService.option.charCodeAt(0) == compareDataService.code){
					// 	if(element[0].children.checkbox.checked) {
					// 		element[0].children.checkbox.checked=false;
					// 	}
					// 	else {
					// 		element[0].children.checkbox.checked=true;
					// 	}
					// }

					// console.log(compareDataService);
					// element.bind("mouseenter",function(){
					// 	$rootScope.option = scope.option;
					// });
				}
			}
		});
})();