angular.module('FeedReader')
	.filter('rssDate', function(){
		return function(value){
			return function (value){
				return new Data(value).toLocaleString();
			}
		}
	});