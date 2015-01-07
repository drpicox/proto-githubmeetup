/*
	speakersService:
		-get()
		-list()
		-resolve()

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.core')
		.factory('speakersService', speakersService);

	speakersService.$inject = ['$q'];
	function speakersService  ( $q ) {
		var speakersDeferred, service;

		service = {
			get: get,
			list: list,
			resolve: resolve,
		};

		speakersDeferred = $q.defer();

		function get(login) {
			return list().then(function(speakers) {
				var i, l;
				for (i = 0, l = speakers.length; i < l && speakers[i].login !== login; i++) {}
				return speakers[i];
			});
		}

		function list() {
			return speakersDeferred.promise;
		}

		function resolve(speakers) {
			speakersDeferred.resolve(speakers);
		}

		return service;
	}

})(angular);
