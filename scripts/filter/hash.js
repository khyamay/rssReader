angular.module('FeedReader')
	.filter('hash', function (HashString){
		return function (value){
			return HashString.perform(value);
		};
	});