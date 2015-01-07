/*
	<gm-meetups-view
			data-meetups="="
			></gm-meetups-view>

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.partials')
		.directive('gmMeetupsView', gmMeetupsView);

	gmMeetupsView.$inject = [];
	function gmMeetupsView  () {

		var directive = {
			restrict: 'E',

			scope: {
				meetups: '=',
			},

			templateUrl: 'gm.partials/directives/gmMeetupsView.html',

		};

		return directive;
	}

})(angular);

