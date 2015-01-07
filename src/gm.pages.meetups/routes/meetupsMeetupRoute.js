/**
* Route /meetups/:meetup
*/
(function(angular) {
	'use strict';

	// ROUTE /meetups/:meetup
	angular
		.module('com.david-rodenas.gm.pages.meetups')
		.config(meetupsMeetupRoute);

	meetupsMeetupRoute.$inject = ['$routeProvider'];
	function meetupsMeetupRoute  ( $routeProvider ) {

		$routeProvider.when('/meetups/:meetup', {
			// view template
			templateUrl: 'gm.pages.meetups/routes/meetupsMeetupView.html',

			// view required data
			resolve: {
				meetup: meetupsServiceItemResolver,
			},

			// view controller
			controller: 'MeetupController',
			controllerAs: 'vm',
		});

		meetupsServiceItemResolver.$inject = ['meetupsService','$route'];
		function meetupsServiceItemResolver  ( meetupsService , $route ) {
			var index, meetup;

			// get url restlike string param :meetup
			index = $route.current.params.meetup;

			// gets the current 
			meetup = meetupsService.get(index);

			// return it
			return meetup;
		}

	}

})(angular);
