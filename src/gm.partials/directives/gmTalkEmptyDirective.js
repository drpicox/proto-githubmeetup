/*
	<gm-talk-empty-view></gm-talk-empty-view>

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.partials')
		.directive('gmTalkEmptyView', gmTalkEmptyView);

	gmTalkEmptyView.$inject = [];
	function gmTalkEmptyView  () {

		var directive = {
			restrict: 'E',

			templateUrl: 'gm.partials/directives/gmTalkEmptyView.html',

		};

		return directive;
	}

})(angular);

