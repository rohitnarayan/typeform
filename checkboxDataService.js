"use strict";
(function(){
	angular
		.module("app")
		.factory('checkboxDataService', function(){
			return {
				option1:"A",
				option2:"B",
				option3:"C"
			}
		});
})();