app.service('categoriesService', 
	['Restangular', '$state', 
	function(Restangular, $state){
	
	var categories = Restangular.all('categories').getList().$object;

	// TODO #1: Sidebar categories don't update upon submission.
	// this function was to help alleviate this but it can't get called
	// from within the promise. Since I'm using a service to send my 
	// categories to the view I need to figure out how to update the service
	// variable itself. 
	var resetCategories = function(){
		categories = Restangular.all('categories').getList().$object;
	}

	var info = {
		filter: ''
	}

	var getInfo = function(){
		return info;
	}

	var setFilter = function(id){
		info.filter = (id == null ? '' : id);
	}

	var getNameById = function(id){
		for (var i=0;i<categories.length;i++) {
			if (categories[i].id == id) {
				return categories[i].title;
			}
		}
	}

	var addCategory = function(formData){
		Restangular.all('categories').post({ category: { 	title: formData.title,
																											description: 	formData.description}})
													.then(function(){
														$state.go('bookmarks');
													})
	}

  return {
  	categories: categories,
  	getInfo: getInfo,
  	setFilter: setFilter,
  	getNameById: getNameById,
  	addCategory: addCategory
  }

}]);