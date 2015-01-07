/*
	meetupsService:
		-get()
		-list()
		-resolve()

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.core')
		.factory('meetupsService', meetupsService);

	meetupsService.$inject = ['$q'];
	function meetupsService  ( $q ) {
		var meetupsDeferred, service;

		service = {
			get: get,
			list: list,
			resolve: resolve,
		};

		meetupsDeferred = $q.defer();

		function get(date) {
			return list().then(function(meetups) {
				var i, l;
				for (i = 0, l = meetups.length; i < l && meetups[i].date !== date; i++) {}
				return meetups[i];
			});
		}

		function list() {
			return meetupsDeferred.promise;
		}

		function resolve(meetups) {
			meetupsDeferred.resolve(meetups);
		}

		return service;
	}

})(angular);
