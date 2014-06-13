angular.module('FeedReader', ['RssFeed', 'rssFeed'])
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/list.html',
				controller: 'ItemCtrl'
			})
			.when('/feed/:id', {
				templateUrl: 'views/list.html',
				controller: 'ItemCtrl'
			})
			.whhen('/feed/:id/item/:hasKey'{
				templateUrl: 'views/item.html',
				controller: 'ItemCtrl'
			})
			.when('/manage', {
				templateUrl: 'views/manage/list.html',
				controller: 'FeedManage',
			})
			.when('/manage/add', {
				templateUrl: 'views/manage/add.html',
				controller: 'FeedManage',
			})
	});