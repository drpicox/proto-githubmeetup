/*
	RootController:
		.currentMeetup

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.pages.root')
		.controller('RootController', RootController);

	RootController.$inject = ['currentMeetup'];
	function RootController  ( currentMeetup ) {
		var self;

		self = this;

		self.currentMeetup = currentMeetup;

	}

})(angular);
