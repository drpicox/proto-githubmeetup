/*
	currentMeetupService:
		-get()

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.core')
		.factory('currentMeetupService', currentMeetupService);

	currentMeetupService.$inject = ['meetupsService'];
	function currentMeetupService  ( meetupsService ) {
		var current, service;

		service = {
			get: get,
		};

		current = meetupsService.list().then(function(list) {
			var current, i, l;

			current = null;
			for (i = 0, l = list.length; i < l && !list[i].archived; i++) {
				current = list[i];
			}

			return current;
		});

		function get() {
			return current;
		}

		return service;
	}

})(angular);
