/*
	Speaker:
		.next
		.prev
		.talks: [Talk]
		.addTalk(talk) 

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.core')
		.factory('Speaker', speakerFactory);

	speakerFactory.$inject = [];
	function speakerFactory  () {
		/* jshint validthis: true */

		function Speaker(data) {
			this.talks = [];
			angular.extend(this, data);
		}

		Speaker.prototype.addTalk = addTalk;

		function addTalk(talk) {
			this.talks.push(talk);
			talk.speaker = this;
		}


		return Speaker;
	}

})(angular);
