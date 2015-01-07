/*
	SpeakerController:
		.speaker

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.pages.speakers')
		.controller('SpeakerController', SpeakerController);

	SpeakerController.$inject = ['speaker'];
	function SpeakerController  ( speaker ) {
		var self;

		self = this;

		self.speaker = speaker;

	}

})(angular);
