/*
	<gm-talk-view
			data-talk="="
			></gm-talk-view>

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.partials')
		.directive('gmTalkView', gmTalkView);

	gmTalkView.$inject = [];
	function gmTalkView  () {

		var directive = {
			restrict: 'E',

			scope: {
				talk: '=',
			},

			templateUrl: 'gm.partials/directives/gmTalkView.html',

		};

		return directive;
	}

})(angular);

