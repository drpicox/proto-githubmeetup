/**
* Route /
*/
(function(angular) {
	'use strict';

	// ROUTE /
	angular
		.module('com.david-rodenas.gm.pages.root')
		.config(rootRoute);

	rootRoute.$inject = ['$routeProvider'];
	function rootRoute  ( $routeProvider ) {

		$routeProvider.when('/', {
			// view template
			templateUrl: 'gm.pages.root/routes/rootView.html',

			// view required data
			resolve: {
				currentMeetup: currentMeetupGetResolver,
			},

			// view controller
			controller: 'RootController',
			controllerAs: 'vm',
		});

		currentMeetupGetResolver.$inject = ['currentMeetupService','$route'];
		function currentMeetupGetResolver  ( currentMeetupService , $route ) {
			var value;

			// gets the value
			value = currentMeetupService.get($route.current.params);

			// return it
			return value;
		}

	}

})(angular);
