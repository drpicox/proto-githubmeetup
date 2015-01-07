/*
	Talk:
		.body
		.description
		.meetup    # set by meetup
		.speaker   # set by speaker

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.core')
		.factory('Talk', talkFactory);

	talkFactory.$inject = [];
	function talkFactory  () {
		/* jshint validthis: true */

		function Talk(data) {
			angular.extend(this, data);
		}

		return Talk;
	}

})(angular);
