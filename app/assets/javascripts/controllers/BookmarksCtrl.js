app.controller('BookmarksCtrl', 
	['$scope', 'Restangular', 'bookmarks', 'categoriesService', 
	function($scope, Restangular, bookmarks, categoriesService) {

	$scope.bookmarks = bookmarks;

	// Get our category info
	$scope.categoriesInfo = categoriesService.getInfo();
	$scope.filter = $scope.categoriesInfo.filter;

	$scope.$watch(
		"categoriesInfo.filter",
		function(value){
			$scope.filter = value;
		}
	);

	$scope.getCategoryName = function(id){
		return categoriesService.getNameById(id);
	}

	$scope.deleteBookmark = function(id){
		var deletedBookmark = Restangular.one('bookmarks', id );
		deletedBookmark.remove()
		.then(function(){
			angular.forEach($scope.bookmarks, function(bookmark, i) {
			  if (bookmark.id == deletedBookmark.id) {
			  	$scope.bookmarks.splice(i, 1)
			  }
			});
		});
	}

}]);