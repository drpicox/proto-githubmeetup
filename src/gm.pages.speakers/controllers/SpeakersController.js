/*
	SpeakersController:
		.speakers

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.pages.speakers')
		.controller('SpeakersController', SpeakersController);

	SpeakersController.$inject = ['speakers'];
	function SpeakersController  ( speakers ) {
		var self;

		self = this;

		self.speakers = speakers;

	}

})(angular);
