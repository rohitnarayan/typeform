(function(){
	var app = angular.module("app");
		app.directive("checkboxDirective",function() {
			return {
				restrict : "E",
				scope : {
					option: '=option'
				},
				controller:"appController",
				template : "<input ng-keyup='onKeyUp($event)' type='checkbox' id='checkbox' name='checkbox'><label for='checkbox'>{{option}}</label>",
				controller : "appController",
				link : function(scope,element,attrs,controller) {
					element.bind("mouseenter",function(){
						console.log(scope.option);
						controller.optionAt = scope.option;
					});
				}
			}
		});
})();