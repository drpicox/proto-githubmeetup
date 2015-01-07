/*
	Meetup:
		.archived
		.body
		.date
		.description
		.next
		.prev
		.talks: [Talk]
		.addTalk(talk) 
*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.core')
		.factory('Meetup', meetupFactory);

	meetupFactory.$inject = [];
	function meetupFactory  () {
		/* jshint validthis: true */

		function Meetup(data) {
			this.talks = [];
			angular.extend(this, data);
		}

		Meetup.prototype.addTalk = addTalk;

		function addTalk(talk) {
			this.talks.push(talk);
			talk.meetup = this;
		}


		return Meetup;
	}

})(angular);
