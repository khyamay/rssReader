angular.module('RssFeed')
	.controller('ItemsCtrl', function($scope, $routeParams, Feedlist, FeedLoad){
		var feed = Feedlist.getById($routeParams.id || Feedlist.getMinId());

		FeedLoad.fetch({q: feed.url, num: 50}, {}, function(data){
			$scope.feed = data.responseData.feed;
			$scope.feed.id = feed.id;
		});
	});