"use strict";
(function(){
	angular
		.module("app",['angular-inview'])
		.controller("appController",["$window","$scope","checkboxDataService",function($window,$scope,checkboxDataService){

			var vm = this;

			// $window.showButtonThresholdValue=0;

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
					if($window.code != 13) {
						angular.forEach(vm.$elements,function(value,i) {
							// console.log(value.children[1].innerHTML);
							// console.log($window.code);
							// vm.input = value.children;
							if(value.children[1].innerHTML.charCodeAt(0) == $window.code) {
								// console.log("HAHA = "+value.children[1].innerHTML);
								// value.children[0].checked = true;
								if(value.children[0].checked) {
									value.children[0].checked=false;
									// $window.showButtonThresholdValue-=1;
								}
								else {
									value.children[0].checked=true;
									// $window.showButtonThresholdValue+=1;
									// console.log(vm.showButtonThresholdValue);
								}
								// vm.counter = $window.showButtonThresholdValue;
							}
						});
					}
					else if(code == 13) {
						var goTo = $('p')[0].offsetTop;
						$('html, body').animate({
						    scrollTop: goTo
						}, 500);
					}
				}
			}

			// $(window).on('keypress', function(event){
			//     event.preventDefault();

			//     var code = event.keyCode?event.keyCode:event.which;
			//     // console.log(code);
			//     // console.log($('p')[0].offsetTop);
			//     if(code == 13) {
			//     	var goTo=$('p')[0].offsetTop;
			//     	// console.log($( $.attr(this, 'href') ).offset().top);

			//     	$('html, body').animate({
			//     	    scrollTop: goTo
			//     	}, 500);
			//     }
			// });
			// $window.onkeydown = function(e) {
			// 	var code = e.keyCode ? e.keyCode:e.which;
			// 	if(code == 13) {
			// 		e.preventDefault();
			// 		var a = $('a');
			// 		console.log(a[0].offsetTop);

			// 		$('html, body').animate({
			// 			scrollTop:$()
			// 		});
			// 	}
			// }

		}]);
})();