/*
	MeetupsController:
		.meetups

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.pages.meetups')
		.controller('MeetupsController', MeetupsController);

	MeetupsController.$inject = ['currentMeetup','meetups'];
	function MeetupsController  ( currentMeetup , meetups ) {
		var self;

		self = this;

		self.currentMeetup = currentMeetup;
		self.meetups = meetups;

	}

})(angular);
