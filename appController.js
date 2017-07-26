(function(){
	angular
		.module("app",[])
		.controller("appController",["$window","$scope","checkboxDataService",function($window,$scope,checkboxDataService){

			$scope.options = [
				checkboxDataService.option1,
				checkboxDataService.option2,
				checkboxDataService.option3
			];

			var vm = this;

			$window.onkeydown = function(e) {
				$window.code = e.keyCode ? e.keyCode : e.which;
				console.log($window.code);
				vm.keyCode = $window.code;
			}
			console.log(vm.keyCode);
		}]);
})();