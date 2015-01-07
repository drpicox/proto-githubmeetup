/**
* Route /speakers
*/
(function(angular) {
	'use strict';

	// ROUTE /speakers
	angular
		.module('com.david-rodenas.gm.pages.speakers')
		.config(speakersRoute);

	speakersRoute.$inject = ['$routeProvider'];
	function speakersRoute  ( $routeProvider ) {

		$routeProvider.when('/speakers', {
			// view template
			templateUrl: 'gm.pages.speakers/routes/speakersView.html',

			// view required data
			resolve: {
				speakers: speakersListResolver,
			},

			// view controller
			controller: 'SpeakersController',
			controllerAs: 'vm',
		});

		speakersListResolver.$inject = ['speakersService','$route'];
		function speakersListResolver  ( speakersService , $route ) {
			var list;

			// gets the list
			list = speakersService.list($route.current.params);

			// return it
			return list;
		}

	}

})(angular);
