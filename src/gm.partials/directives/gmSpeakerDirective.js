/*
	<gm-speaker-view
			data-speaker="="
			></gm-speaker-view>

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.partials')
		.directive('gmSpeakerView', gmSpeakerView);

	gmSpeakerView.$inject = [];
	function gmSpeakerView  () {

		var directive = {
			restrict: 'E',

			scope: {
				speaker: '=',
			},

			templateUrl: 'gm.partials/directives/gmSpeakerView.html',

		};

		return directive;
	}

})(angular);

