angular.module('FeedReader', ['FeedReader.FeedList', 'FeedReader.FeedLoad'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/list.html',
				controller: 'ItemCtrl'
			})
			.when('/feed/:id', {
				templateUrl: 'views/list.html',
				controller: 'ItemCtrl'
			})
			.when('/feed/:id/item/:hashKey',{
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