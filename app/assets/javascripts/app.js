var app = angular.module('bookmarks', 
	['ui.router', 'restangular'])

.config(['RestangularProvider', function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api/v1');
	RestangularProvider.setRequestSuffix('.json');
}])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$stateProvider
		
		// Main page will be the index page for 
		// all of our bookmarks
		.state('bookmarks',{
			url: '/bookmarks',
			views: {
				'categories': {
					templateUrl: '/templates/categories/index.html',
					controller: 'CategoriesCtrl',
				},
				'bookmarks': {
					templateUrl: '/templates/bookmarks/index.html',
					controller: 'BookmarksCtrl',
					resolve: {
						bookmarks: ['Restangular', function(Restangular){
							return Restangular.all('bookmarks').getList();
						}]
					}
				}
			}
		})

		.state('newBookmark',{
			url: '/newBookmark',
			views: {
				'bookmarks': {
					templateUrl: '/templates/bookmarks/new.html',
					controller: 'BookmarksNewCtrl'
				}
			}
		})

		.state('newCategory',{
			url: '/newCategory',
			views: {
				'bookmarks': {
					templateUrl: '/templates/categories/new.html',
					controller: 'CategoriesNewCtrl'
				}
			}
		})
		

	$urlRouterProvider.otherwise('/bookmarks');
}])

// For debugging
.run(function($rootScope){
	$rootScope.$on("$stateChangeError", console.log.bind(console));
});