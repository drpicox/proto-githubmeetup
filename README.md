GithubMeetup
==================

This is the source of the app GithubMeetup.

How to submit a talk
--------------------

1. [click here](https://github.com/drpicox/proto-githubmeetup/issues/new?title=Your%20Awesome%20Talk&body=---%0Alevel:%20beginner%20|%20advanced%20|%20expert%0Alanguage:%20en%20|%20es%0Atwitter:%20YourTwitterHandle%0Atags:%0A%20%20-%20hello%0A%20%20-%20node%0A---%0A%0AYour%20awesome%20talk%20description.)
2. Modify the issue to match your talk
3. Submit

How to compile
--------------

Execute:

```bash
$ npm install
$ bower install
$ grunt build
```

How to edit
-----------

Open with your favorite editor and debug with:

```bash
$ grunt serve
```


How to use
----------

Configure src/gm/gmConfig.js so it points to your repo, ex:

```javascript
    githubServiceProvider.config.owner = 'drpicox';
    githubServiceProvider.config.repo = 'proto-githubmeetup';
```


Create milestones (a meetup) in your project with the following `yaml+markdown` (edit to adapt to your content):

```javascript
---
time: 19.10h
location:
  name: itnig
  lat: 41.396229
  lng: 2.194053
  z: 14
sponsors:
  - aba
  - bera
---
Welcome *today*
In fact this milestone is to test that today is working.
Change due date as needed.
```

Allow your speakers to create issues (talks) on your milestones (meetups). Issues should have a description like the following `yaml+markdown` (edit to adapt to your content):

```javascript
---
level: normal
language: es
twitter: drpicox
tags:
  - hello
  - node
  - world
---
A talk description
```

To accept a talk, verify that it is in the correct milestone and close the issue.