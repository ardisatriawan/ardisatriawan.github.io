var myApp = angular.module('compApp',['ngRoute']);
	
myApp.controller('mainController', ['$scope', function($scope) {
	// default template: home.html
	$scope.templateUrl = './partials/home.html';
	
	$scope.openpage = function(partial) {
		if (partial == 'home') {
			$scope.templateUrl = './partials/home.html';
		}
		else if (partial == 'schedule') {
			$scope.templateUrl = './partials/schedule.html';
		}
		else if (partial == 'venue') {
			$scope.templateUrl = './partials/venue.html';
		}
		else if (partial == 'registration') {
			$scope.templateUrl = './partials/registration.html';
		}
		else if (partial == 'competitors') {
			$scope.templateUrl = './partials/competitors.html';
		}
		else if (partial == 'contact') {
			$scope.templateUrl = './partials/contact.html';
		}
	}
}]);