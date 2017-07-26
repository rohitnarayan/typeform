"use strict";
(function(){
	angular
		.module("app",['angular-inview'])
		.controller("appController",["$window","$scope","checkboxDataService",function($window,$scope,checkboxDataService){

			var vm = this;

			vm.showButtonThresholdValue=0;

			vm.options = [
				checkboxDataService.option1,
				checkboxDataService.option2,
				checkboxDataService.option3
			];

			vm.cacheDom = function(inview,inviewInfo) {
				// console.log(inviewInfo.element[0].children);
				vm.$elements = inviewInfo.element[0].children;
				// console.log(inviewInfo);

				$window.onkeydown = function(e) {
					$window.code = e.keyCode ? e.keyCode:e.which;
					// console.log(vm.$elements);
					angular.forEach(vm.$elements,function(value,i) {
						// console.log(value.children[1].innerHTML);
						// console.log($window.code);
						// vm.input = value.children;
						if(value.children[1].innerHTML.charCodeAt(0) == $window.code) {
							// console.log("HAHA = "+value.children[1].innerHTML);
							// value.children[0].checked = true;
							if(value.children[0].checked) {
								value.children[0].checked=false;
							}
							else {
								value.children[0].checked=true;
							}
						}
					});
				}
			}
		}]);
})();