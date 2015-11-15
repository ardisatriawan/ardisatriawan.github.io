var myApp = angular.module('compApp',['ngRoute']);

var comp = {
	'shortName':'bo2016',
	'longName':'Bandung Open 2016'
};

myApp.config(function($routeProvider) {
	$routeProvider
	// route for the home page
	.when('/', {
		templateUrl : './partials/home.html',
		controller  : 'mainController'
	})
	.when('/schedule', {
		templateUrl : './partials/schedule.html',
		controller  : 'mainController'
	})
	.when('/venue', {
		templateUrl : './partials/venue.html',
		controller  : 'mainController'
	})
	.when('/registration', {
		templateUrl : './partials/registration.html',
		controller  : 'mainController'
	})
	.when('/competitors', {
		templateUrl : './partials/competitors.html',
		controller  : 'mainController'
	})
	.when('/contact', {
		templateUrl : './partials/contact.html',
		controller  : 'mainController'
	})
	.otherwise({
		templateUrl : './partials/404.html',
		controller  : 'mainController'
	});
});

myApp.controller('mainController', ['$scope', '$rootScope', function($scope, $rootScope) {
	/** fill the controller here**/
	$scope.comp = comp;
}]);