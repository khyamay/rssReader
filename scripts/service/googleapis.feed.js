angular.module('GoogleFeed', ['ngResource'])
	.factory('FeedLoad', function ($resource){
		return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
			fetch: {
				method: 'JSNOP', params: { v: '1.0', callback: 'JSON_CALLBACK'}
			}
		});
	})
	.factory('UrlLookup', function ($resource){
		return $resource('http://ajax.googleapis.com/ajax/services/feed/lookup', {}, {
			fetch: {
				method: 'JSONP', params: { v: '1.0', callback: "JSON_CALLBACK"}
			}
		});
	});