/*
	descriptionService:
		.parseField(object, field): sameObject

*/
/* global jsyaml: false */
/* global marked: false */
(function(angular, jsyaml, marked) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.core')
		.factory('descriptionService', descriptionService);

	descriptionService.$inject = [];
	function descriptionService  () {
		var service, yamlRegex;

		service = {
			parseField: parseField,
		};

		yamlRegex = /---[\r\n]+([\s\S]*)---[\r\n]+([\s\S]*)/;

		function parseField(object, field) {
			var body, description, matched, yaml;

			// fetch description
			description = object[field] || '';

			// parse description if yaml (&find body)
			matched = description.match(yamlRegex);
			if (matched) {
				yaml = jsyaml.load(matched[1]);
				angular.extend(object, yaml);
				body = matched[2];
			} else {
				body = description;
			}

			// parse body
			body = marked(body);

			// set description and body to the object
			object.description = description;
			object.body = body;

			return object;
		}

		return service;
	}

})(angular, jsyaml, marked);
