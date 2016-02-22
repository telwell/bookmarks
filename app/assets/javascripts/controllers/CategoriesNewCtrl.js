app.controller('CategoriesNewCtrl', 
	['$scope', 'Restangular', 'categoriesService', 
	function($scope, Restangular, categoriesService) {

	$scope.formData = {
		title: '',
		description: ''
	}

	$scope.addCategory = function(){
		categoriesService.addCategory($scope.formData);
	}

}]);