/*
	<gm-meetup-view
			data-meetup="="
			></gm-meetup-view>

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.partials')
		.directive('gmMeetupView', gmMeetupView);

	gmMeetupView.$inject = [];
	function gmMeetupView  () {

		var directive = {
			restrict: 'E',

			scope: {
				meetup: '=',
			},

			templateUrl: 'gm.partials/directives/gmMeetupView.html',

		};

		return directive;
	}

})(angular);

