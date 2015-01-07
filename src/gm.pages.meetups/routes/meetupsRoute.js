/**
* Route /meetups
*/
(function(angular) {
	'use strict';

	// ROUTE /meetups
	angular
		.module('com.david-rodenas.gm.pages.meetups')
		.config(meetupsRoute);

	meetupsRoute.$inject = ['$routeProvider'];
	function meetupsRoute  ( $routeProvider ) {

		$routeProvider.when('/meetups', {
			// view template
			templateUrl: 'gm.pages.meetups/routes/meetupsView.html',

			// view required data
			resolve: {
				meetups: meetupsListResolver,
				currentMeetup: currentMeetupGetResolver,
			},

			// view controller
			controller: 'MeetupsController',
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

		meetupsListResolver.$inject = ['meetupsService','$route'];
		function meetupsListResolver  ( meetupsService , $route ) {
			var list;

			// gets the list
			list = meetupsService.list($route.current.params);

			// return it
			return list;
		}

	}

})(angular);
