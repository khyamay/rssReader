angular.module('RssFeed')
	.filter('rssDate', function(){
		return function(value)
		{
			return function (value){
				return new Data(value).toLocaleString()''
			}
		}
	});