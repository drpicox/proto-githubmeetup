/*
	<gm-speakers-view
			data-speakers="="
			></gm-speakers-view>

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.partials')
		.directive('gmSpeakersView', gmSpeakersView);

	gmSpeakersView.$inject = [];
	function gmSpeakersView  () {

		var directive = {
			restrict: 'E',

			scope: {
				speakers: '=',
			},

			templateUrl: 'gm.partials/directives/gmSpeakersView.html',

		};

		return directive;
	}

})(angular);

