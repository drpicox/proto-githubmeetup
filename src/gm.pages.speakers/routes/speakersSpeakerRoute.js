/**
* Route /speakers/:speaker
*/
(function(angular) {
	'use strict';

	// ROUTE /speakers/:speaker
	angular
		.module('com.david-rodenas.gm.pages.speakers')
		.config(speakersSpeakerRoute);

	speakersSpeakerRoute.$inject = ['$routeProvider'];
	function speakersSpeakerRoute  ( $routeProvider ) {

		$routeProvider.when('/speakers/:speaker', {
			// view template
			templateUrl: 'gm.pages.speakers/routes/speakersSpeakerView.html',

			// view required data
			resolve: {
				speaker: speakersServiceItemResolver,
			},

			// view controller
			controller: 'SpeakerController',
			controllerAs: 'vm',
		});

		speakersServiceItemResolver.$inject = ['speakersService','$route'];
		function speakersServiceItemResolver  ( speakersService , $route ) {
			var index, speaker;

			// get url restlike string param :speaker
			index = $route.current.params.speaker;

			// gets the current 
			speaker = speakersService.get(index);

			// return it
			return speaker;
		}

	}

})(angular);
