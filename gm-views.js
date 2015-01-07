angular.module('com.david-rodenas.gm').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('gm.pages.meetups/routes/meetupsMeetupView.html',
    "<div class=\"container\">\n" +
    "\n" +
    "\t<gm-meetup-view meetup=\"vm.meetup\"></gm-meetup-view>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('gm.pages.meetups/routes/meetupsView.html',
    "<div class=\"container\">\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-sm-12\">\n" +
    "\t\t\t<div class=\"page-header\">\n" +
    "\t\t\t  <h1>Meetups list <small>past meetups, incoming meetups</small></h1>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-sm-12\">\n" +
    "\t\t\t<div class=\"list-group\">\n" +
    "\t\t\t\t<a ng-repeat=\"meetup in vm.meetups\"\n" +
    "\t\t\t\t   ng-href=\"#/meetups/{{meetup.date}}\" \n" +
    "\t\t\t\t   ng-class=\"{active: meetup === vm.currentMeetup}\"\n" +
    "\t\t\t\t   class=\"list-group-item\" >\n" +
    "\t\t\t\t\t<h4 class=\"list-group-item-heading\">{{meetup.due_on | date}}, {{meetup.title}}</h4>\n" +
    "\t\t\t\t\t<p class=\"list-group-item-text\">\n" +
    "\t\t\t\t\t\t<span ng-repeat=\"talk in meetup.talks\">\n" +
    "\t\t\t\t\t\t\t{{talk.title}}\n" +
    "\t\t\t\t\t\t\t<span ng-if=\"!$last\">, </span>\n" +
    "\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t</p>\n" +
    "\t\t\t\t</a>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('gm.pages.root/routes/rootView.html',
    "<div class=\"container\">\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-sm-12\">\n" +
    "\t\t\t<div class=\"page-header\">\n" +
    "\t\t\t  <h1>Next meetup <small>we expect see you there</small></h1>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row\" ng-if=\"vm.currentMeetup\">\n" +
    "\t\t<div class=\"col-sm-12\">\n" +
    "\t\t\t<gm-meetup-view meetup=\"vm.currentMeetup\"></gm-meetup-view>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row\" ng-hide=\"vm.currentMeetup\">\n" +
    "\t\t<div class=\"col-sm-12\">\n" +
    "\t\t\tThere is not next meetup.\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('gm.pages.speakers/routes/speakersSpeakerView.html',
    "<div class=\"container\">\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-sm-12 text-center\">\n" +
    "\t\t\t<h3>{{vm.speaker.name}}</h3>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-2 col-md-offset-5 col-sm-4 col-sm-offset-4 col-xs-10 col-xs-offset-1 text-center\">\n" +
    "\t\t\t<img ng-src=\"{{vm.speaker.avatar_url}}\" class=\"img-responsive\">\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-sm-12\">\n" +
    "\t\t\t<h1>Talks</h1>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-sm-12\">\n" +
    "\t\t\t<div class=\"list-group\">\n" +
    "\t\t\t\t<a ng-repeat=\"talk in vm.speaker.talks\"\n" +
    "\t\t\t\t   ng-href=\"#/meetups/{{talk.meetup.date}}\" \n" +
    "\t\t\t\t   class=\"list-group-item\" >\n" +
    "\t\t\t\t\t<h4 class=\"list-group-item-heading\">{{talk.meetup.due_on | date}}, {{talk.meetup.title}}</h4>\n" +
    "\t\t\t\t\t<p class=\"list-group-item-text\">\n" +
    "\t\t\t\t\t\t<span>\n" +
    "\t\t\t\t\t\t\t{{talk.title}}\n" +
    "\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t</p>\n" +
    "\t\t\t\t</a>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-xs-6\">\n" +
    "\t\t\t<a ng-if=\"speaker.prev\" ng-href=\"#/speakers/{{speaker.prev.date}}\">&lt;&lt; Previous</a>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-xs-6 text-right\">\n" +
    "\t\t\t<a ng-if=\"speaker.next\" ng-href=\"#/speakers/{{speaker.next.date}}\">Next &gt;&gt;</a>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('gm.pages.speakers/routes/speakersView.html',
    "<div class=\"container\">\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-sm-12\">\n" +
    "\t\t\t<div class=\"page-header\">\n" +
    "\t\t\t  <h1>Speakers <small>thanks friends</small></h1>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-sm-12\">\n" +
    "\t\t\t<div class=\"media\" ng-repeat=\"speaker in vm.speakers\">\n" +
    "\t\t\t  <a class=\"media-left\" ng-href=\"#/speakers/{{speaker.login}}\">\n" +
    "\t\t\t    <img ng-src=\"{{speaker.avatar_url}}\" alt=\"{{speaker.name}}\" style=\"width: 64px\">\n" +
    "\t\t\t  </a>\n" +
    "\t\t\t  <div class=\"media-body\">\n" +
    "\t\t\t    <h4 class=\"media-heading\"><a ng-href=\"#/speakers/{{speaker.login}}\" style=\"color: inherit\">{{speaker.name}}</a></h4>\n" +
    "\t\t\t\t<p>\n" +
    "\t\t\t\t\t<span ng-repeat=\"talk in speaker.talks\">\n" +
    "\t\t\t\t\t\t<a href=\"#/meetups/{{talk.meetup.date}}\">{{talk.title}}</a>\n" +
    "\t\t\t\t\t\t<span ng-if=\"!$last\">, </span>\n" +
    "\t\t\t\t\t</span>\n" +
    "\t\t\t\t</p>\n" +
    "\t\t\t  </div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('gm.partials/directives/gmMeetupView.html',
    "<h3>{{meetup.title}} - {{meetup.due_on | date}} - {{meetup.time }} - {{meetup.location.name}}</h3>\n" +
    "\n" +
    "<div ng-bind-html=\"meetup.body\">\n" +
    "</div>\n" +
    "<br><br>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\t<div ng-repeat=\"talk in meetup.talks\" class=\"col-lg-3 col-lg-offset-2 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1\">\n" +
    "\t\t<div class=\"panel panel-default\">\n" +
    "\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t<gm-talk-view talk=\"talk\"></gm-talk-view>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div ng-if=\"meetup.talks.length < 2 && !meetup.archived\" class=\"col-lg-3 col-lg-offset-2 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1\">\n" +
    "\t\t<div class=\"panel panel-default\">\n" +
    "\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t<gm-talk-empty-view></gm-talk-empty-view>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\t\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\t<div class=\"col-xs-6\">\n" +
    "\t\t<a ng-if=\"meetup.prev\" ng-href=\"#/meetups/{{meetup.prev.date}}\">&lt;&lt; Previous</a>\n" +
    "\t</div>\n" +
    "\t<div class=\"col-xs-6 text-right\">\n" +
    "\t\t<a ng-if=\"meetup.next\" ng-href=\"#/meetups/{{meetup.next.date}}\">Next &gt;&gt;</a>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('gm.partials/directives/gmMeetupsView.html',
    "<h3>gmMeetupsView</h3>\n" +
    "\n" +
    "<ul>\n" +
    "\t<li>meetups: {{meetups}}</li>\n" +
    "</ul>\n" +
    "\n"
  );


  $templateCache.put('gm.partials/directives/gmSpeakerView.html',
    "<h3>gmSpeakerView</h3>\n" +
    "\n" +
    "<ul>\n" +
    "\t<li>speaker: {{speaker}}</li>\n" +
    "</ul>\n" +
    "\n"
  );


  $templateCache.put('gm.partials/directives/gmSpeakersView.html',
    "<h3>gmSpeakersView</h3>\n" +
    "\n" +
    "<ul>\n" +
    "\t<li>speakers: {{speakers}}</li>\n" +
    "</ul>\n" +
    "\n"
  );


  $templateCache.put('gm.partials/directives/gmTalkEmptyView.html',
    "Submit your talk"
  );


  $templateCache.put('gm.partials/directives/gmTalkView.html',
    "<img ng-src=\"{{talk.speaker.avatar_url}}\" class=\"img-responsive\">\n" +
    "<p><a ng-href=\"#/speakers/{{talk.speaker.login}}\">\n" +
    "\t{{talk.speaker.name}}\n" +
    "</a></p>\n" +
    "<p>LANGUAGE: {{talk.language | uppercase}} | LEVEL: {{talk.level | uppercase}}</p>\n" +
    "\n" +
    "<h4>{{talk.title}}</h4>\n" +
    "\n" +
    "<div ng-bind-html=\"talk.body\">\n" +
    "</div>\n" +
    "\n"
  );

}]);
