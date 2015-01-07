/*
	MeetupController:
		.meetup

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.pages.meetups')
		.controller('MeetupController', MeetupController);

	MeetupController.$inject = ['meetup'];
	function MeetupController  ( meetup ) {
		var self;

		self = this;

		self.meetup = meetup;

	}

})(angular);
