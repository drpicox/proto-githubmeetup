/*
	githubService:
		-get(what, id, params)
		-listFromRepo(what, params)

	Config:
		owner: 'owner'
		repo: 'repo'

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.core')
		.provider('githubService', githubServiceProvider);

	function githubServiceProvider() {
		/* jshint validthis: true */
		var config = this.config = {
			url: 'https://api.github.com',
			owner: 'owner',
			repo: 'repo',
		};

		this.$get = githubService;

		githubService.$inject = ['$http'];
		function githubService  ( $http ) {
			var service;

			service = {
				get: get,
				listFromRepo: listFromRepo,
			};

			function get(what, id, params) {
				return $http.get(config.url+'/'+what+'/'+id, {params: params}).then(function(response) {
					return response.data;
				});
			}

			function listFromRepo(what, params) {
				return $http.get(config.url+'/repos/'+config.owner+'/'+config.repo+'/'+what, {params: params}).then(function(response) {
					return response.data;
				});
			}

			return service;
		}
	}

})(angular);
