app.controller('CategoriesCtrl', 
	['$scope', 'Restangular', 'categoriesService', 
	function($scope, Restangular, categoriesService) {

	$scope.categoriesInfo = categoriesService.getInfo();
	$scope.filter = $scope.categoriesInfo.filter;

	$scope.$watch(
		"categoriesInfo.filter",
		function(value){
			$scope.filter = value;
		}
	);

	$scope.setFilter = function(id){
		categoriesService.setFilter(id);
	}

	$scope.categories = categoriesService.categories;

}]);