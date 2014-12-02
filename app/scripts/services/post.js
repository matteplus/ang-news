'use strict;'

app.factory('Post', function ($resource) {
	return $resource('https://radiant-inferno-9874.firebaseio.com/posts/:id.json');
});