angular.module('FeedReader', ['FeedList', 'GoogleFeed'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/list.html',
				controller: 'ItemsCtrl'
			})
			.when('/feed/:id', {
				templateUrl: 'views/list.html',
				controller: 'ItemsCtrl'
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
			.otherwise({redirectTo: '/'});
	});