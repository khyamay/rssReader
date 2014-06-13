angular.module('rssFeed', ['ngResource'])
	.factory('FeedLoad', function($resource){
		return $resource('http://ajax.googleapis.com/ajax/service/feed/load', {}, {
			fetch: {
				method: 'JSNOP', params: { v: '1.0', callback: 'JSON_CALLBACK'}
			}
		});
	})
	.factory('URLLookup', function($resource){
		return $resource('http://ajax.googleapis.com/ajax/services/feed/lookup', {}, {
			fetch: {
				method: 'JSNOP', params: { v: '1.0', callback: "JSON_CALLBACK"}
			}
		});
	});