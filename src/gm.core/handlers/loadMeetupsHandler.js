/*
	This is the loadMeetupsHandler.

	It executes automatically when the app starts and behaves as follows:
		

*/
(function(angular) {
	'use strict';

	angular
		.module('com.david-rodenas.gm.core')
		.run(loadMeetupsHandler);

	loadMeetupsHandler.$inject = ['descriptionService','githubService','meetupsService','speakersService','Meetup','Speaker','Talk','$filter','$q'];
	function loadMeetupsHandler  ( descriptionService , githubService , meetupsService , speakersService , Meetup , Speaker , Talk , $filter , $q ) {
		var issues, link, meetups, milestones, speakers, talks, today;

		today = formatDate(new Date());
		issues = githubService.listFromRepo('issues', {state: 'closed'});
		milestones = githubService.listFromRepo('milestones');

		// retrieve meetups from milestones, sort, and detect prev/next
		meetups = milestones.then(function(milestones) {
			milestones = milestones.map(processMilestone);
			milestones.sort(newerBefore);
			processNextPrev(milestones);
			return milestones;
		});

		// retrieve talks from issues
		talks = issues.then(function(issues) {
			return issues.filter(isIssueValid).map(processIssue);
		});

		// retrieve speakers from issues (we do not get all github users)
		speakers = issues.then(function(issues) {
			var seen = {}, speakers, users;

			users = issues.map(function(issue) {
				return issue.user;
			});

			users = users.filter(function(user) {
				var seenBefore = seen[user.login];
				seen[user.login] = true;
				return !seenBefore;
			});

			speakers = users.map(function(user) {
				return loadSpeaker(user.login);
			});

			return $q.all(speakers);
		});

		// sort speakers by name, and add prev/next
		speakers = speakers.then(function(speakers) {
			speakers.sort(lowerNameFirst);
			processNextPrev(speakers);
			return speakers;
		});

		// link all data toghether
		link = $q.all({meetups:meetups, talks:talks, speakers:speakers}).then(function(link) {

			// issues has information to link it to meetup and speakers
			link.talks.forEach(function(talk) {
				linkTalk(talk, link);
			});

			return link;
		});

		// resolve services data
		link.then(function(link) {
			meetupsService.resolve(link.meetups);
			speakersService.resolve(link.speakers);
		});


		function findMeetup(number, meetups) {
			var i, l;
			for (i = 0, l = meetups.length; i < l && meetups[i].number !== number; i++) {}
			return meetups[i];
		}

		function findSpeaker(login, speakers) {
			var i, l;
			for (i = 0, l = speakers.length; i < l && speakers[i].login !== login; i++) {}
			return speakers[i];
		}

		function formatDate(date) {
			return $filter('date')(date, 'yyyy-MMM-dd');
		}

		function isIssueValid(issue) {
			return issue && 
				issue.milestone && issue.milestone.number;
		}

		function linkTalk(talk, link) {
			var meetup, speaker;

			meetup = findMeetup(talk.milestone.number, link.meetups);
			speaker = findSpeaker(talk.user.login, link.speakers);

			meetup.addTalk(talk);
			speaker.addTalk(talk);
		}

		function loadSpeaker(login) {
			return githubService.get('users', login).then(function(user) {
				var speaker = new Speaker(user);
				return speaker;
			});
		}

		function lowerNameFirst(speakerA, speakerB) {
			if (speakerA.name < speakerB.name) {
				return -1;
			} else if (speakerA.name > speakerB.name) {
				return 1;
			} else {
				return 0;
			}
		}

		function newerBefore(meetupA, meetupB) {
			if (meetupA.date < meetupB.date) {
				return 1;
			} else if (meetupA.date > meetupB.date) {
				return -1;
			} else {
				return 0;
			}
		}

		function processIssue(issue) {
			var talk;

			talk = new Talk(issue);
			descriptionService.parseField(talk, 'body');

			return talk;
		}

		function processMilestone(milestone) {
			var meetup;

			meetup = new Meetup(milestone);
			meetup.date = formatDate(milestone.due_on); // jshint ignore:line
			meetup.archived = meetup.date < today;
			descriptionService.parseField(meetup, 'description');

			return meetup;
		}

		function processNextPrev(elements) {
			var element, i, l;

			for (i = 0, l = elements.length; i < l; i++) {
				element = elements[i];
				element.next = elements[i - 1];
				element.prev = elements[i + 1];
			} 
		}

	}

})(angular);
