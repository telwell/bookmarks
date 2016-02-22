app.controller('BookmarksNewCtrl', 
	['$scope', 'Restangular', 'categoriesService', '$state', 
	function($scope, Restangular, categoriesService, $state) {

	$scope.categories = categoriesService.categories;

	$scope.formData = {
		title: '',
		url: '',
		description: '',
		category_id: ''
	}

	$scope.addBookmark = function(){
		Restangular.all('bookmarks').post({ bookmark: { 	title: $scope.formData.title,
																											url: $scope.formData.url,
																											category_id: $scope.formData.category_id,
																											description: 	$scope.formData.description}})
													.then(function(){
														$state.go('bookmarks');
													})
	}

}]);